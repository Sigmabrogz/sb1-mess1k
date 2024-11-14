import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Check, X } from 'lucide-react';
import { useProjectStore } from '../store/projectStore';
import toast from 'react-hot-toast';

export function AdminPage() {
  const navigate = useNavigate();
  const { pendingProjects, fetchPendingProjects, approveProject, rejectProject, isLoading, error } = useProjectStore();

  useEffect(() => {
    fetchPendingProjects();
  }, [fetchPendingProjects]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleApprove = async (id: string) => {
    await approveProject(id);
    toast.success('Project approved successfully');
  };

  const handleReject = async (id: string) => {
    await rejectProject(id);
    toast.success('Project rejected successfully');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-white">Project Review Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card/80 rounded-lg 
                     transition-colors duration-hover text-text-secondary hover:text-white"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {error && (
          <div className="glass-card p-4 rounded-lg mb-6 text-error flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={fetchPendingProjects}
              className="text-sm underline hover:text-white transition-colors duration-hover"
            >
              Retry
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="glass-card p-8 rounded-lg animate-pulse">
            <div className="h-6 bg-card/50 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-card/50 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-card/50 rounded w-2/4"></div>
          </div>
        ) : pendingProjects.length > 0 ? (
          <div className="glass-card rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-text-secondary">Company Name</th>
                  <th className="text-left p-4 text-text-secondary">Category</th>
                  <th className="text-left p-4 text-text-secondary">Subcategory</th>
                  <th className="text-left p-4 text-text-secondary">Website</th>
                  <th className="text-left p-4 text-text-secondary">Twitter</th>
                  <th className="text-right p-4 text-text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingProjects.map((project) => (
                  <tr key={project.id} className="border-b border-white/5 hover:bg-card/50">
                    <td className="p-4">{project.company_name}</td>
                    <td className="p-4">{project.category}</td>
                    <td className="p-4">{project.subcategory}</td>
                    <td className="p-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover"
                      >
                        {new URL(project.website).hostname}
                      </a>
                    </td>
                    <td className="p-4">
                      <a
                        href={project.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover"
                      >
                        @{new URL(project.twitter).pathname.slice(1)}
                      </a>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleApprove(project.id)}
                          className="p-2 bg-success/10 hover:bg-success/20 text-success rounded-lg
                                   transition-colors duration-hover"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(project.id)}
                          className="p-2 bg-error/10 hover:bg-error/20 text-error rounded-lg
                                   transition-colors duration-hover"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="glass-card p-8 rounded-lg text-center text-text-secondary">
            No pending projects to review
          </div>
        )}
      </div>
    </div>
  );
}