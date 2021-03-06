import classnames from 'classnames';

import {
	InnerBlocks,
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
	'snow-monkey-blocks/step--item',
	'snow-monkey-blocks/step--item--free',
];

const TEMPLATE = [ [ 'snow-monkey-blocks/step--item--free' ] ];

export default function ( { className } ) {
	const classes = classnames( 'smb-step', className );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'smb-step__body',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			templateLock: false,
			renderAppender: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
