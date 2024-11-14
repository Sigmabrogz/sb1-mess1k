import { create } from 'zustand';
import { sections as initialSections } from '../data/sections';
import { projectsTable, createRecord, updateRecord, fetchRecords, AirtableRecord } from '../lib/airtable';

interface ProjectState {
  sections: typeof initialSections;
  pendingProjects: AirtableRecord[];
  isLoading: boolean;
  error: string | null;
  addProject: (project: Omit<AirtableRecord, 'id' | 'created_at' | 'status'>) => Promise<void>;
  fetchPendingProjects: () => Promise<void>;
  approveProject: (id: string) => Promise<void>;
  rejectProject: (id: string) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  sections: initialSections,
  pendingProjects: [],
  isLoading: false,
  error: null,

  addProject: async (project) => {
    const requiredFields = ['company_name', 'category', 'subcategory', 'website', 'twitter'] as const;
    for (const field of requiredFields) {
      if (!project[field]?.trim()) {
        throw new Error(`${field.replace('_', ' ')} is required`);
      }
    }

    try {
      new URL(project.website);
      new URL(project.twitter);
    } catch {
      throw new Error('Invalid URL format');
    }

    try {
      await createRecord(project);
    } catch (error: any) {
      console.error('Error adding project:', error);
      throw new Error(error.message || 'Failed to submit project');
    }
  },

  fetchPendingProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const records = await fetchRecords();
      const projects = records.map(record => ({
        id: record.id,
        ...record.fields
      })) as AirtableRecord[];

      set({ pendingProjects: projects });
    } catch (error: any) {
      console.error('Error fetching pending projects:', error);
      set({ error: error.message || 'Failed to fetch pending projects' });
    } finally {
      set({ isLoading: false });
    }
  },

  approveProject: async (id: string) => {
    try {
      await updateRecord(id, {
        status: 'approved'
      });
      
      const { pendingProjects } = get();
      set({ 
        pendingProjects: pendingProjects.filter(project => project.id !== id) 
      });
    } catch (error: any) {
      console.error('Error approving project:', error);
      throw new Error(error.message || 'Failed to approve project');
    }
  },

  rejectProject: async (id: string) => {
    try {
      await updateRecord(id, {
        status: 'rejected'
      });
      
      const { pendingProjects } = get();
      set({ 
        pendingProjects: pendingProjects.filter(project => project.id !== id) 
      });
    } catch (error: any) {
      console.error('Error rejecting project:', error);
      throw new Error(error.message || 'Failed to reject project');
    }
  }
}));