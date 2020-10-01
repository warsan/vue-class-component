import Vue, { CreateElement } from 'vue'
import Component from '../../../lib/index'

@Component
export default class World extends Vue {
  render (h: CreateElement) {
    return <p>Это отображается через TSX</p>
  }
}
