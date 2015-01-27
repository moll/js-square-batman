module.exports = RoundRobin

/**
 * Basic [round-robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)
 * scheduling.
 *
 * Create an empty scheduler or provide some initial values.
 *
 * @example
 * var servers = new RoundRobin(["1.example.com", "2.example.com"])
 * servers.next() // => "1.example.com"
 * servers.next() // => "2.example.com"
 * servers.next() // => "1.example.com"
 *
 *
 * @class RoundRobin
 * @constructor
 * @param {Array} [values]
 */
function RoundRobin(values) {
  this.values = values ? values.slice() : []
  this.length = this.values.length
  this.position = 0
}

/**
 * Get the next value.  
 * Rotates to the beginning when it reaches the end of the list.
 *
 * @example
 * var servers = new RoundRobin(["1.example.com", "2.example.com"])
 * servers.next() // => "1.example.com"
 * servers.next() // => "2.example.com"
 * servers.next() // => "1.example.com"
 *
 * @method next
 */
RoundRobin.prototype.next = function() {
  if (this.position >= this.length) this.position = 0
  return this.values[this.position++]
}

/**
 * Add a value to the scheduler.  
 * Duplicate values are ignored.
 *
 * @method add
 * @param {Object} value
 */
RoundRobin.prototype.add = function(value) {
  if (!~this.values.indexOf(value)) {
    this.values.push(value)
    ;++this.length
  }

  return this
}

/**
 * Checks whether the given value is already in the scheduler.  
 * Returns either `true` or `false`.
 *
 * @method has
 * @param {Object} value
 */
RoundRobin.prototype.has = function(value) {
  return !!~this.values.indexOf(value)
}

/**
 * Remove a value from the scheduler.  
 * Returns `true` if the value was in the scheduler and `false` if it wasn't.
 *
 * @method remove
 * @param {Object} value
 */
RoundRobin.prototype.remove = function(value) {
  var index = this.values.indexOf(value)
  if (index == -1) return false

  this.values.splice(index, 1)
  ;--this.length
  if (index < this.position) --this.position
  return true
}

/**
 * Remove all values from the scheduler.
 *
 * @method clear
 */
RoundRobin.prototype.clear = function() {
  this.values = []
  this.length = 0
  this.position = 0
}
