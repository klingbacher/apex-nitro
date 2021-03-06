'use strict';

const gulp = require('gulp');
const notifier = require('node-notifier');
const options = require('./options');

module.exports = function (config, browsersync) {
	// Copy other files as is
	gulp.task('other', () => {
		// All files except js, scss, sass, less, css, ts
		const otherFiles = [
			config.srcFolder + '/**/*.*',
			'!' + config.srcFolder + '/js/**/*.{js,ts}',
			'!' + config.srcFolder + '/scss/**/*.scss',
			'!' + config.srcFolder + '/sass/**/*.sass',
			'!' + config.srcFolder + '/less/**/*.less',
			'!' + config.srcFolder + '/css/**/*.css'
		];

		return gulp.src(otherFiles)
			.pipe(gulp.dest(config.distFolder));
	});

	// Processes other files and reload
	gulp.task('other-watch', ['other'], () => {
		browsersync.reload();

		if (config.browsersync.notify) {
			notifier.notify(options.notifySuccessOther());
		}
	});
};
