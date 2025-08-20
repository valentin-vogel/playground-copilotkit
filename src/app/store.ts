import { create } from 'zustand'

interface TaskState {
  tasks: string[]
  addTask: (title: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: ['Ship MVP'],
  addTask: (title) => set((state) => ({ tasks: [...state.tasks, title] })),
}))
