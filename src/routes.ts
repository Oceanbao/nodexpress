import { Application, Router } from 'express'
import { PingController } from './controllers/PingController'
import { IndexController } from './controllers/IndexController'
import { StreamBigController } from './controllers/StreamBigController'

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/ping', PingController],
  ['/stream', StreamBigController]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route
    app.use(url, controller)
  })
}
