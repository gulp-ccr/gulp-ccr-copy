'use strict';

var schema = {
	title: 'copy',
	description: 'Copy assets defined by `src` to `dest` folder, optionally remove or replace relative paths for files.',
	properties: {
		src: {
			description: 'Source files to copy.',
			type: 'glob'
		},
		dest: {
			description: 'Destination path to store copied files.',
			type: 'path'
		},
		flatten: {
			description: 'Remove or replace relative paths for files.',
			anyOf: [{
				type: 'boolean',
				default: false
			}, {
				properties: {
					newPath: {
						description: 'Relative path for file.',
						type: 'path',
						default: ''
					},
					includeParents: {
						description: 'Specify how to include parent path.',
						anyOf: [{
							description: 'If passed in as positive number, it will include the number of top-level parents in the output. If passed in as negative number, it will include the number of bottom-level parents in the output.',
							type: 'integer'
						}, {
							description: 'If passes as array of two numbers, both parents from top and bottom will be kept in resulting path of a file.',
							type: 'array',
							items: {
								type: 'integer',
								minimum: 0
							},
							minItems: 2,
							maxItems: 2
						}]
					}
				}
			}]
		}
	},
	required: ['src', 'dest']
};

function copy() {
	var flatten = require('gulp-flatten');

	var gulp = this.gulp;
	var config = this.config;
	var stream = this.upstream || gulp.src(config.src.globs, config.src.options);

	if (config.flatten) {
		stream = stream.pipe(flatten());
	}
	return stream.pipe(gulp.dest(config.dest.path, config.dest.options));
}

module.exports = copy;
module.exports.schema = schema;
module.exports.type = 'task';
