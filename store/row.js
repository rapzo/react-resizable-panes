import { EventEmitter } from 'events'

export default class Row extends EventEmitter {
  constructor (items) {
    super()

    this.items = items
  }

  trigger (payload = {}) {
    this.emit('row', payload)
  }

  addTrigger (callback) {
    this.on('row', callback)
  }

  removeTrigger (e, cb) {
    this.removeListener(e, cb)
  }
}
