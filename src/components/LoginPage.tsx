import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuthStore } from '../lib/auth';
import toast from 'react-hot-toast';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-card">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-accent-purple" />
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold text-center mb-8">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-background rounded-lg border border-white/5 
                       focus:border-primary focus:ring-1 focus:ring-primary"
              required
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-accent-purple hover:bg-accent-purple/90 text-white rounded-lg 
                     transition-colors duration-hover font-medium disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}