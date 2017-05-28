SquareBatman.js API Documentation
=================================
### [SquareBatman](#SquareBatman)
- [.RoundRobin](#SquareBatman.RoundRobin)

### [RoundRobin](#RoundRobin)
- [.prototype.add](#RoundRobin.prototype.add)(value)
- [.prototype.clear](#RoundRobin.prototype.clear)()
- [.prototype.has](#RoundRobin.prototype.has)(value)
- [.prototype.next](#RoundRobin.prototype.next)()
- [.prototype.remove](#RoundRobin.prototype.remove)(value)


SquareBatman <a name="SquareBatman"></a>
------------


### SquareBatman.RoundRobin <a name="SquareBatman.RoundRobin"></a>
The [`RoundRobin`](#RoundRobin) class.

**Examples**:
```javascript
var RoundRobin = require("square-batman").RoundRobin
```


RoundRobin([values]) <a name="RoundRobin"></a>
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

### RoundRobin.prototype.add(value) <a name="RoundRobin.prototype.add"></a>
Add a value to the scheduler.  
Duplicate values are ignored.

### RoundRobin.prototype.clear() <a name="RoundRobin.prototype.clear"></a>
Remove all values from the scheduler.

### RoundRobin.prototype.has(value) <a name="RoundRobin.prototype.has"></a>
Checks whether the given value is already in the scheduler.  
Returns either `true` or `false`.

### RoundRobin.prototype.next() <a name="RoundRobin.prototype.next"></a>
Get the next value.  
Rotates to the beginning when it reaches the end of the list.

**Examples**:
```javascript
var servers = new RoundRobin(["1.example.com", "2.example.com"])
servers.next() // => "1.example.com"
servers.next() // => "2.example.com"
servers.next() // => "1.example.com"
```

### RoundRobin.prototype.remove(value) <a name="RoundRobin.prototype.remove"></a>
Remove a value from the scheduler.  
Returns `true` if the value was in the scheduler and `false` if it wasn't.
