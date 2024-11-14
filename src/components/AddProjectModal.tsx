import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sections } from '../data/sections';
import { useProjectStore } from '../store/projectStore';
import toast from 'react-hot-toast';

interface Category {
  category: string;
  subcategory: string;
}

export function AddProjectModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const addProject = useProjectStore((state) => state.addProject);
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    twitter: '',
  });
  const [selectedCategory, setSelectedCategory] = useState<Category>({ category: '', subcategory: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addProject({
        company_name: formData.companyName.trim(),
        category: selectedCategory.category,
        subcategory: selectedCategory.subcategory,
        website: formData.website.trim(),
        twitter: formData.twitter.trim()
      });

      toast.success('Project submitted successfully');
      onClose();
      setFormData({ companyName: '', website: '', twitter: '' });
      setSelectedCategory({ category: '', subcategory: '' });
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit project');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-card z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-card rounded-card w-full max-w-md p-layout relative border border-white/5 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-hover"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-heading font-semibold mb-layout">Add New Project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-body font-medium mb-2 text-text-secondary">Company Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary text-input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-body font-medium mb-2 text-text-secondary">Category</label>
            <select
              value={selectedCategory.category}
              onChange={(e) => setSelectedCategory({ category: e.target.value, subcategory: '' })}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary text-input"
              required
              disabled={isSubmitting}
            >
              <option value="">Select Category</option>
              {sections.map((section) => (
                <option key={section.title} value={section.title}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory.category && (
            <div>
              <label className="block text-body font-medium mb-2 text-text-secondary">Subcategory</label>
              <select
                value={selectedCategory.subcategory}
                onChange={(e) => setSelectedCategory({ ...selectedCategory, subcategory: e.target.value })}
                className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                         focus:border-primary focus:ring-1 focus:ring-primary text-input"
                required
                disabled={isSubmitting}
              >
                <option value="">Select Subcategory</option>
                {sections
                  .find((section) => section.title === selectedCategory.category)
                  ?.subsections.map((subsection) => (
                    <option key={subsection.title} value={subsection.title}>
                      {subsection.title}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-body font-medium mb-2 text-text-secondary">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary text-input"
              required
              disabled={isSubmitting}
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-body font-medium mb-2 text-text-secondary">X / Twitter URL</label>
            <input
              type="url"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary text-input"
              required
              disabled={isSubmitting}
              placeholder="https://twitter.com/username"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg 
                     transition-colors duration-hover text-input font-medium mt-layout
                     border border-white/10 hover:border-white/20 disabled:opacity-50
                     disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}