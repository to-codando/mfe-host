import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'appMain'
const app = { name, model, view, controller }
const appMain = createComponent(app)

export { appMain }
