import { __ } from '@wordpress/i18n';

import blockConfig from '../../../../src/js/config/block';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import transforms from './transforms';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title:
		__( 'Items', 'snow-monkey-blocks' ) +
		' ' +
		__( '(Deprecated)', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'screenoptions',
	},
	inserter: false,
	edit,
	save,
	deprecated,
	transforms,
};