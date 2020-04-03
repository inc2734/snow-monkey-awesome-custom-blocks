'use strict';

export default {
	titleTagName: {
		type: 'string',
		default: 'div',
	},
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__item__title',
		default: '',
	},
	lede: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__item__lede',
		default: '',
	},
	summary: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__item__content',
		default: '',
	},
	btnLabel: {
		type: 'string',
		source: 'html',
		selector: '.smb-items__item__btn > .smb-btn__label',
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
	btnBackgroundColor: {
		type: 'string',
	},
	btnTextColor: {
		type: 'string',
	},
	imageID: {
		type: 'number',
		default: 0,
	},
	imageURL: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-items__item__figure > img',
		attribute: 'src',
		default: '',
	},
	imageAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-items__item__figure > img',
		attribute: 'alt',
		default: '',
	},
};
