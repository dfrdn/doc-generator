import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import PizZipUtils from 'pizzip/utils/index.js'
import InspectModule from 'docxtemplater/js/inspect-module.js'
import { saveAs } from 'file-saver'
import expressions from 'angular-expressions'
import { storage } from '@/firebaseInit'
import _ from 'lodash'

expressions.filters.lower = (input: string) => {
  if (!input) {
    return input
  }
  return input.toLowerCase()
}

export function angularParser(tag: string) {
  if (tag === '.') {
    return {
      get: function(s: string) {
        return s
      }
    }
  }
  const expr = expressions.compile(
    tag.replace(/(’|‘)/g, "'").replace(/(“|”)/g, '"')
  )
  return {
    get: function(
      scope: Record<string, never>,
      context: Record<string, never>
    ) {
      let obj = {}
      const scopeList = context['scopeList']
      const num = context['num']
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = _.merge(obj, scopeList[i])
      }
      return expr(scope, obj)
    }
  }
}

export function loadFile(
  url: string,
  onSuccess: (c: string) => void,
  onError: (e: Error) => void
) {
  PizZipUtils.getBinaryContent(url, (e: Error, c: string) => {
    if (e) {
      console.log(e)
      onError(e)
    }
    onSuccess(c)
  })
}

export function generateSchema(tags: Record<string, any>) {
  const toProperties = Object.fromEntries(
    Object.keys(tags).map(k => [
      k,
      {
        type: _.startsWith(_.snakeCase(k), 'is_') ? 'boolean' : 'string',
        title: _.startCase(k),
        format: _.endsWith(k, 'Date') ? 'date' : null
      }
    ])
  )

  const schema = {
    type: 'object',
    required: [],
    properties: toProperties
  }

  console.log(schema)

  return schema
}
