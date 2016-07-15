/*
 * grunt-stylus-sort
 * https://github.com/RedHatter/grunt-stylus-sort
 *
 * Copyright (c) 2016 Timothy Johnson
 * Licensed under the GPL-3.0 license.
 */

const StylusSort = require('stylus-sort')

module.exports = function (grunt) {
  grunt.registerMultiTask('stylus_sort', 'Sorts stylus rules in-place based on a predefined order.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    let options = this.options({
      config: 'yandex'
    })

    let sorter = new StylusSort(options.config)
    // Iterate over all specified file groups.

    let files = []
    this.files.forEach((group) =>
      group.src.forEach((f) =>
        files.push(f)))

    var counter = 0
    let done = this.async()
    files.forEach((f) =>
      sorter.processPath(f, () => {
        if (++counter >= files.length) {
          console.log(`Sorted \x1b[36m${counter}\x1b[0m files.`)
          done()
        }
      }))
  })
}
