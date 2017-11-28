import axios from 'axios'
import {
  IS_DEV
} from './constants/env'

import {
  DEV_BASE_URL,
  PROD_BASE_URL
} from './constants/apiPaths'

axios.defaults.baseURL = IS_DEV ? DEV_BASE_URL : PROD_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
