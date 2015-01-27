SquareBatman.js API Documentation
=================================
### [SquareBatman](#SquareBatman)
- [RoundRobin](#SquareBatman.RoundRobin)

### [RoundRobin](#RoundRobin)
- [add](#RoundRobin.prototype.add)(value)
- [clear](#RoundRobin.prototype.clear)()
- [has](#RoundRobin.prototype.has)(value)
- [next](#RoundRobin.prototype.next)()
- [remove](#RoundRobin.prototype.remove)(value)


<a name="SquareBatman" />
SquareBatman
------------


<a name="SquareBatman.RoundRobin" />
### SquareBatman.RoundRobin
The [`RoundRobin`](#RoundRobin) class.

**Examples**:
```javascript
var RoundRobin = require("square-batman").RoundRobin
```


<a name="RoundRobin" />
RoundRobin([values])
--------------------
Basic [round-robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)
scheduling.

Create an empty scheduler or provide some initial values.

**Examples**:
```javascript
var servers = new RoundRobin(["1.example.com", "2.example.com"])
servers.next() // => "1.example.com"
servers.next() // => "2.example.com"
servers.next() // => "1.example.com"
```

<a name="RoundRobin.prototype.add" />
### RoundRobin.prototype.add(value)
Add a value to the scheduler.  
Duplicate values are ignored.

<a name="RoundRobin.prototype.clear" />
### RoundRobin.prototype.clear()
Remove all values from the scheduler.

<a name="RoundRobin.prototype.has" />
### RoundRobin.prototype.has(value)
Checks whether the given value is already in the scheduler.  
Returns either `true` or `false`.

<a name="RoundRobin.prototype.next" />
### RoundRobin.prototype.next()
Get the next value.  
Rotates to the beginning when it reaches the end of the list.

**Examples**:
```javascript
var servers = new RoundRobin(["1.example.com", "2.example.com"])
servers.next() // => "1.example.com"
servers.next() // => "2.example.com"
servers.next() // => "1.example.com"
```

<a name="RoundRobin.prototype.remove" />
### RoundRobin.prototype.remove(value)
Remove a value from the scheduler.  
Returns `true` if the value was in the scheduler and `false` if it wasn't.
