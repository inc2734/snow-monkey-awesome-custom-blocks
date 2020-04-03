'use strict';

export default {
	avatarID: {
		type: 'number',
		default: 0,
	},
	avatarURL: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-testimonial__item__figure > img',
		attribute: 'src',
		default:
			'https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g',
	},
	avatarAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.smb-testimonial__item__figure > img',
		attribute: 'alt',
		default: '',
	},
	name: {
		type: 'string',
		source: 'html',
		selector: '.smb-testimonial__item__name',
		default: '',
	},
	lede: {
		type: 'string',
		source: 'html',
		selector: '.smb-testimonial__item__lede',
		default: '',
	},
	content: {
		type: 'string',
		source: 'html',
		selector: '.smb-testimonial__item__content',
		default: '',
	},
};
