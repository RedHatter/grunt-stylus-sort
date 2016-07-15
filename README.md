# grunt-stylus-sort

> Sorts stylus rules in-place based on a predefined order.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stylus-sort --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stylus-sort');
```

## The "stylus_sort" task

### Overview
In your project's Gruntfile, add a section named `stylus_sort` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  stylus_sort: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.config
Type: `String`
Default value: `yandex`

Predefined configuration to sort by.

### Usage Examples

#### Default Options
In this example, the default options are used to sort with the `yandex` scheme.

```js
grunt.initConfig({
  stylus_sort: {
    src: ['assets/styles']
  }
});
```

#### Custom Options
In this example, custom options are used to sort with the `csscomb` scheme.

```js
grunt.initConfig({
  stylus_sort: {
    options: {
      config: 'csscomb'
    },
    src: ['assets/styles']
  },
});
```
