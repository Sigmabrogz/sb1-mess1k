import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

// In a real app, use environment variables and proper hashing
const ADMIN_PASSWORD = 'admin123';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (password: string) => {
        const isValid = password === ADMIN_PASSWORD;
        if (isValid) {
          set({ isAuthenticated: true });
        }
        return isValid;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'admin-auth',
    }
  )
);