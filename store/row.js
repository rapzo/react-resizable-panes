import { EventEmitter } from 'events'

export default class Row extends EventEmitter {
  constructor (items) {
    super()

    this.items = items
  }

  getItems () {
    return this.items
  }

  trigger (e, payload) {
    this.emit(e, payload)
  }

  addTrigger (e, callback) {
    this.on(e, callback)
  }

  removeTrigger (e, cb) {
    this.removeListener(e, cb)
  }
}
