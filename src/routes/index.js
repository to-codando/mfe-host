import { appNotFound } from '@/components/notFound'

export const routes = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: async () => ({
      component: appNotFound,
      children: null
    })
  },
  {
    regex: /^#\/user\/viewer$/,
    start: '#/user/viewer',
    mount: async () => {
      const { appViewer: component } = await import('http://localhost:8083/main.js')
      return { component }
    }
  },
  {
    regex: /^#\/user\/creator$/,
    mount: async () => {
      const { appUser: component } = await import('http://localhost:8082/main.js')
      return { component }
    }
  }
]
