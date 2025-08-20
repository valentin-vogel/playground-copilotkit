import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TaskState {
  tasks: string[]
  addTask: (title: string) => void
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: ['Ship MVP'],
      addTask: (title: string) =>
        set((state) => ({ tasks: [...state.tasks, title] })),
    }),
    {
      name: 'playground-copilotkit-task-storage',
    }
  )
)
