import { createApp, render, router } from 'terezzu'
import { appMain } from '@/components/appMain'

import { routes } from './routes'

const appHost = createApp({
  mount: async () => {
    const { appSidebar } = await import('http://localhost:8081/main.js')

    render(appMain, document.body, context => {
      appSidebar.mount(context)
      router({ routes, context }).init()
    })
  }
})

export { appHost }
