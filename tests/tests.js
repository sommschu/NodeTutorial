/**
 * Created by nerdbynature on 25.06.15.
 */

var should = require("should");
var assert = require("assert");
var threeSeconds = require("seconds");

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have should installed and running.', function () {
        true.should.eql(true);
    })
})

describe('Async Test', function () {
    var result = false;
    beforeEach(function (done) {
        setTimeout(function () {
            result = true;
            // complete async beforeEach
            done();
        }, 200)
    });

    it('should not be so hard to make it easier.', function (done) {
        result.should.eql(true);
        done();
    })
})