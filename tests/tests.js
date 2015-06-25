/**
 * Created by nerdbynature on 25.06.15.
 */

var should = require("should");
var assert = require("assert");
var threeSeconds = require("seconds");

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, false);
    })
    it('should have should installed and running.', function () {
        true.should.eql(true);
    })
})