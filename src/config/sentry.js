import {
  SENTRY_DNS
} from './constants/sentry'

const startSentry = () => {
  if(SENTRY_DNS && window.Raven) {
    window.Raven.config(SENTRY_DNS).install()
  }
}

export {
  startSentry
}
