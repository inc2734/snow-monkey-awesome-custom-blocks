'use strict';

export default {
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-step__item__title > span',
		default: '',
	},
	numberColor: {
		type: 'string',
	},
	imagePosition: {
		type: 'string',
		default: 'center',
	},
	imageID: {
		type: 'number',
		default: 0,
	},
	imageURL: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-step__item__figure > img',
		attribute: 'src',
		default: '',
	},
	imageAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-step__item__figure > img',
		attribute: 'alt',
		default: '',
	},
	linkLabel: {
		type: 'string',
		source: 'html',
		selector: '.smb-step__item__link__label',
		default: '',
	},
	linkURL: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-step__item__link',
		attribute: 'href',
		default: '',
	},
	linkTarget: {
		type: 'string',
		default: '_self',
	},
	linkColor: {
		type: 'string',
	},
};
