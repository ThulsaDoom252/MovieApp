import { create } from 'zustand'

const useMovieStore = create((set) => ({
    searchQuery: '',
    currentPage: 1,
    setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
    setCurrentPage: (page) => set({ currentPage: page }),
}))

export default useMovieStore