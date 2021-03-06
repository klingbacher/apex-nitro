'use strict';

const path = require('path');
const messages = require('../templates/messages');

module.exports = {
	notifyLaunch() {
		return {
			title: messages.notifyTitle,
			message: messages.notifyLaunched,
			icon: path.join(__dirname, '../../docs/img/apex-nitro-icon.png'),
			timeout: 2
		};
	},

	notifySuccessJS() {
		return {
			title: messages.notifyTitle,
			message: messages.notifySuccessJS,
			icon: path.join(__dirname, '../../docs/img/apex-nitro-icon.png'),
			timeout: 2
		};
	},

	notifySuccessCSS() {
		return {
			title: messages.notifyTitle,
			message: messages.notifySuccessCSS,
			icon: path.join(__dirname, '../../docs/img/apex-nitro-icon.png'),
			timeout: 2
		};
	},

	notifySuccessOther() {
		return {
			title: messages.notifyTitle,
			message: messages.notifySuccessOther,
			icon: path.join(__dirname, '../../docs/img/apex-nitro-icon.png'),
			timeout: 2
		};
	},

	notifyError() {
		return {
			title: messages.notifyTitle,
			message: messages.notifyError,
			icon: path.join(__dirname, '../../docs/img/apex-nitro-icon-warning.png')
		};
	},

	sassOptions(config) {
		return {
			sourcemap: true,
			includePaths: [
				path.resolve(config.css.sassIncludePath || '')
			]
		};
	},

	lessOptions(config) {
		return {
			paths: [
				path.resolve(config.css.lessIncludePath || '')
			]
		};
	},

	cssnanoOptions() {
		return {
			safe: true
		};
	},

	renameOptions() {
		return {
			suffix: '.min'
		};
	},

	uglifyOptions() {
		return {
			preserveComments: 'license'
		};
	}
};
