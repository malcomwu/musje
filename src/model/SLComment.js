import Lexer from './Lexer'
import { makeToJSON } from '../utils/helpers'

export default class SLComment {
  constructor(comment) {
    this.name = 'sl-comment'
    if (comment.name === 'lexer') {
      this.parse(comment)
    } else if (typeof comment === 'string') {
      this.parse(new Lexer(comment))
    } else {
      this.value = comment.value
    }
  }

  parse(lexer) {
    lexer.token('//')
    lexer.token('all', lexeme => { this.value = lexeme })
  }

  toString() { return '//' + this.value }
  toJSON = makeToJSON('value')
}
