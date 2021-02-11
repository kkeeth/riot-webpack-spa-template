import '@riotjs/hot-reload'
import { component, register } from 'riot'
import { Route, Router, setBase } from '@riotjs/route'
import App from './app.riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

// register Router and Route components are globally
register('router', Router)
register('route', Route)

// set routing base URL
setBase("/riot-webpack-spa-template")

// mount the root tag
component(App)(document.getElementById('root'))