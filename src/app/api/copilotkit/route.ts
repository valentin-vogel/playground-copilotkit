import { NextRequest } from 'next/server'
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime'
import { OpenAI } from 'openai'

const serviceAdapter = new OpenAIAdapter({
  openai: new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
    organization: process.env.OPENAI_ORGANIZATION || '',
    project: process.env.OPENAI_PROJECT_ID || '',
  }),
  model: 'gpt-5-nano',
})

const runtime = new CopilotRuntime()

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  })
  return handleRequest(req)
}
