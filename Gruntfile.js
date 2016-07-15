/*
 * grunt-stylus-sort
 * https://github.com/RedHatter/grunt-stylus-sort
 *
 * Copyright (c) 2016 Timothy Johnson
 * Licensed under the GPL-3.0 license.
 */

'use strict'

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    standard: {
      files: {
        expand: true,
        src: ['**/*.js']
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    copy: {
      default_options: {
        files: {
          'tmp/default_options.styl': ['test/fixtures/main.styl']
        }
      },
      custom_options: {
        files: {
          'tmp/custom_options.styl': ['test/fixtures/main.styl']
        }
      }
    },

    // Configuration to be run (and then tested).
    stylus_sort: {
      default_options: {
        src: ['tmp/default_options.styl']
      },
      custom_options: {
        options: {
          config: 'zen'
        },
        src: ['tmp/custom_options.styl']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  })

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks')

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-standard')

  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'stylus_sort', 'nodeunit', 'clean'])

  // By default, lint and run all tests.
  grunt.registerTask('default', ['standard', 'test'])
}
