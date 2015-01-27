var RoundRobin = require("../../lib/round_robin")
var demand = require("must")

describe("RoundRobin", function() {
  describe("new", function() {
    it("must be an instance of RoundRobin", function() {
      new RoundRobin().must.be.an.instanceof(RoundRobin)
    })

    it("must be empty", function() {
      var round = new RoundRobin()
      round.length.must.equal(0)
      round.values.must.eql([])
    })
  })

  describe(".prototype.next", function() {
    it("must return undefined given no values", function() {
      demand(new RoundRobin().next()).be.undefined()
    })

    it("must return a single value", function() {
      var round = new RoundRobin(["a"])
      round.next().must.equal("a")
      round.next().must.equal("a")
      round.next().must.equal("a")
    })

    it("must return values in succession", function() {
      var round = new RoundRobin(["a", "b", "c"])

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")
    })
  })

  describe(".prototype.add", function() {
    it("must return self", function() {
      var round = new RoundRobin(["a"])
      round.add("b").must.equal(round)
    })

    it("must append value to a single value", function() {
      var round = new RoundRobin(["a"])
      round.add("b")

      round.next().must.equal("a")
      round.next().must.equal("b")

      round.next().must.equal("a")
      round.next().must.equal("b")
    })

    it("must append value to multiple values", function() {
      var round = new RoundRobin(["a", "b"])
      round.add("c")

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")
    })

    it("must append value and use it next time", function() {
      var round = new RoundRobin(["a", "b"])
      round.next()
      round.next()

      round.add("c")
      round.next().must.equal("c")

      round.next().must.equal("a")
      round.next().must.equal("b")
      round.next().must.equal("c")
    })

    it("must update length", function() {
      new RoundRobin(["a"]).add("b").length.must.equal(2)
    })
  })

  describe(".prototype.has", function() {
    it("must return true if value exists", function() {
      new RoundRobin(["a", "b", "c"]).has("b").must.be.true()
    })

    it("must return false if value missing", function() {
      new RoundRobin(["a", "b", "c"]).has("d").must.be.false()
    })

    it("must return false given no values", function() {
      new RoundRobin().has("a").must.be.false()
    })
  })

  describe(".prototype.remove", function() {
    it("must return true if value existed", function() {
      new RoundRobin(["a"]).remove("a").must.be.true()
    })

    it("must return false if value missing", function() {
      new RoundRobin().remove("a").must.be.false()
    })

    it("must remove value", function() {
      var round = new RoundRobin(["a", "b", "c"])
      round.remove("b")

      round.next().must.equal("a")
      round.next().must.equal("c")

      round.next().must.equal("a")
      round.next().must.equal("c")
    })

    it("must not remove anything given a missing value", function() {
      var round = new RoundRobin(["a", "b"])
      round.remove("c")

      round.next().must.equal("a")
      round.next().must.equal("b")

      round.next().must.equal("a")
      round.next().must.equal("b")
    })

    it("must not miss next value after removing next", function() {
      var round = new RoundRobin(["a", "b", "c"])
      round.next()
      round.remove("b")
      round.next().must.equal("c")
    })

    it("must not miss next value after removing previous", function() {
      var round = new RoundRobin(["a", "b", "c"])
      round.next()
      round.remove("a")
      round.next().must.equal("b")
    })

    it("must update length", function() {
      var round = new RoundRobin(["a", "b"])
      round.remove("b")
      round.length.must.equal(1)
    })
  })

  describe(".prototype.clear", function() {
    it("must remove all values", function() {
      var round = new RoundRobin(["a", "b", "c"])
      round.clear()
      demand(round.next()).be.undefined()
    })

    it("must update length", function() {
      var round = new RoundRobin(["a", "b", "c"])
      round.clear()
      round.length.must.equal(0)
    })
  })
})
