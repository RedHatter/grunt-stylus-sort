'use strict'

var grunt = require('grunt')

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stylus_sort = {
  setUp: function (done) {
    done()
  },
  default_options: function (test) {
    test.expect(1)

    let actual = grunt.file.read('tmp/default_options.styl')
    let expected = grunt.file.read('test/expected/default_options.styl')
    test.equal(actual, expected, 'Sort main.styl with yandex scheme.')

    test.done()
  },
  custom_options: function (test) {
    test.expect(1)

    let actual = grunt.file.read('tmp/custom_options.styl')
    let expected = grunt.file.read('test/expected/custom_options.styl')
    test.equal(actual, expected, 'Sort main.styl with zen scheme.')

    test.done()
  }
}
