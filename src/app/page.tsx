'use client'

import { useState } from 'react'
import { CopilotSidebar } from '@copilotkit/react-ui'
import { useCopilotReadable, useCopilotAction } from '@copilotkit/react-core'

export default function Home() {
  const [tasks, setTasks] = useState<string[]>(['Ship MVP'])

  useCopilotReadable({
    description: 'List of tasks currently visible in the UI',
    value: tasks,
  })

  useCopilotAction({
    name: 'addTask',
    description: 'Add a new task to the list',
    parameters: [
      {
        name: 'title',
        type: 'string',
        description: 'Title of the task to add',
        required: true,
      },
    ],
    handler: async ({ title }) => setTasks((t) => [...t, title]),
  })

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
      <ul className="list-disc pl-6 space-y-1">
        {tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <CopilotSidebar
        defaultOpen
        instructions="You are an in-app copilot. Help the user manage their tasks. Prefer using the `addTask` action when they ask to add something."
      />
    </main>
  )
}
