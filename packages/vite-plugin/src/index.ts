import { Plugin } from 'vite'
import { Options, isObject, includes } from '@vuetify/loader-shared'

import { importPlugin } from './importPlugin'
import { stylesPlugin } from './stylesPlugin'

function vuetify (_options: Options = {}): Plugin[] {
  const options: Options = {
    autoImport: true,
    styles: true,
    stylesTimeout: 1000,
    ..._options,
  }

  const plugins: Plugin[] = []
  if (options.autoImport) {
    plugins.push(importPlugin())
  }
  if (includes(['none', 'expose', 'sass'], options.styles) || isObject(options.styles)) {
    plugins.push(stylesPlugin(options))
  }

  return plugins
}

module.exports = vuetify
export default vuetify
