# gulp-ccr-copy

Copy assets and optionally remove or replace relative paths for files. A cascading configurable gulp recipe for [gulp-chef](https://github.com/gulp-cookery/gulp-chef).

## Install

``` bash
$ npm install --save-dev gulp-chef gulp-ccr-copy
```

## Recipe

Copy files

## Ingredients

* [gulp-flatten](https://github.com/armed/gulp-flatten)

* [gulp.src()](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#gulpsrcglobs-options)

* [gulp.dest()](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#gulpdestpath-options)

## API

### config.src

Source files to copy.

### config.dest

Destination path to store copied files.

### config.faltten

Optional. Remove or replace relative paths for files. Defaults to false.

## Usage

``` javascript
var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    src: 'src/',
    dest: 'dist/',
    copy: {
        src: ['**/*.{{eof,jpeg,jpg,png,svg,ttf,webp,woff}'],
        flatten: true
    }
});

gulp.registry(meals);
```

## License
[MIT](https://opensource.org/licenses/MIT)

## Author
[Amobiz](https://github.com/amobiz)
