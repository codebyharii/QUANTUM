import { create } from 'zustand'

interface AppState {
  isDarkMode: boolean
  isLoading: boolean
  toggleDarkMode: () => void
  setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  isDarkMode: true,
  isLoading: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setLoading: (loading) => set({ isLoading: loading }),
}))
