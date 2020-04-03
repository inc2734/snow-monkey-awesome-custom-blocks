'use strict';

export default {
	wrapperTagName: {
		type: 'string',
		default: 'div',
	},
	titleTagName: {
		type: 'string',
		default: 'h2',
	},
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-section__title',
		default: '',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundColor2: {
		type: 'string',
	},
	backgroundColorAngle: {
		type: 'number',
		default: 0,
	},
	textColor: {
		type: 'string',
	},
	contentsWidth: {
		// deprecated
		type: 'string',
		default: null,
	},
	isSlim: {
		type: 'boolean',
		default: false,
	},
	topDividerType: {
		type: 'string',
		default: 'tilt',
	},
	topDividerLevel: {
		type: 'number',
		default: 0,
	},
	topDividerColor: {
		type: 'string',
		default: '#fff',
	},
	bottomDividerType: {
		type: 'string',
		default: 'tilt',
	},
	bottomDividerLevel: {
		type: 'number',
		default: 0,
	},
	bottomDividerColor: {
		type: 'string',
		default: '#fff',
	},
};
