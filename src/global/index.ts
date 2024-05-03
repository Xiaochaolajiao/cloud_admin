import registerElementPlus from './registerElementPlus'
import registerElementPlusicon from './registerElementPlusicon'
import type {App} from 'vue'


export const registerGlobalComponent = (app: App) => {
    app.use(registerElementPlus)
  app.use(registerElementPlusicon)
}

