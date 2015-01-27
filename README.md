SquareBatman.js
===============
[![NPM version][npm-badge]](http://badge.fury.io/js/square-batman)
[npm-badge]: https://badge.fury.io/js/square-batman.png

**SquareBatman.js** is a small **scheduling algorithm library** for JavaScript.

It currently implements:
- [Round-robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)


Installing
----------
```sh
npm install square-batman
```

SquareBatman.js follows [semantic versioning](http://semver.org/), so feel
free to depend on its major version with something like `>= 1.0.0 < 2`
(a.k.a `^1.0.0`).


API
---
For extended documentation on all functions, please see the
[SquareBatman.js API Documentation][api].

[api]: https://github.com/moll/js-square-batman/blob/master/doc/API.md

### [SquareBatman](https://github.com/moll/js-square-batman/blob/master/doc/API.md#SquareBatman)
- [RoundRobin](https://github.com/moll/js-square-batman/blob/master/doc/API.md#SquareBatman.RoundRobin)

### [RoundRobin](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin)
- [add](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin.prototype.add)(value)
- [clear](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin.prototype.clear)()
- [has](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin.prototype.has)(value)
- [next](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin.prototype.next)()
- [remove](https://github.com/moll/js-square-batman/blob/master/doc/API.md#RoundRobin.prototype.remove)(value)


License
-------
SquareBatman.js is released under a *Lesser GNU Affero General Public License*,
which in summary means:

- You **can** use this program for **no cost**.
- You **can** use this program for **both personal and commercial reasons**.
- You **do not have to share your own program's code** which uses this program.
- You **have to share modifications** (e.g. bug-fixes) you've made to this
  program.

For more convoluted language, see the `LICENSE` file.


About
-----
**[Andri Möll][moll]** typed this and the code.  
[Monday Calendar][monday] supported the engineering work.

If you find SquareBatman.js needs improving, please don't hesitate to type to me
now at [andri@dot.ee][email] or [create an issue online][issues].

[email]: mailto:andri@dot.ee
[issues]: https://github.com/moll/js-square-batman/issues
[moll]: http://themoll.com
[monday]: https://mondayapp.com
