'use strict';

export default {
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-alert__title strong',
		default: '',
	},
	content: {
		type: 'string',
		source: 'html',
		selector: '.smb-alert__body',
		multiline: 'p',
		default: '',
	},
	modifier: {
		type: 'string',
		default: '',
	},
	icon: {
		type: 'string',
		default: 'exclamation-circle',
	},
};
