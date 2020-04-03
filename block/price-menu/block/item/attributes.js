'use strict';

export default {
	title: {
		type: 'string',
		source: 'html',
		selector: '.smb-price-menu__item__title',
		default: '',
	},
	price: {
		type: 'string',
		source: 'html',
		selector: '.smb-price-menu__item__price',
		default: '',
	},
};
