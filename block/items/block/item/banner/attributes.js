'use strict';

export default {
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__banner__title',
		default: '',
	},
	lede: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__banner__lede',
		default: '',
	},
	url: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'string',
		default: '_self',
	},
	blur: {
		type: 'boolean',
		default: false,
	},
	textColor: {
		type: 'string',
	},
	maskColor: {
		type: 'string',
	},
	maskOpacity: {
		type: 'number',
		default: 1,
	},
	imageSize: {
		default: 'default',
	},
	imageID: {
		type: 'number',
		default: 0,
	},
	imageURL: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-items__banner__figure > img',
		attribute: 'src',
		default: '',
	},
	imageAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-items__banner__figure > img',
		attribute: 'alt',
		default: '',
	},
};
