'use strict';

import classnames from 'classnames';
import { deprecated } from './_deprecated.js';

const { registerBlockType } = wp.blocks;
const { PlainText, RichText, MediaUpload, InspectorControls, PanelColorSettings } = wp.editor;
const { Button, PanelBody, SelectControl } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

registerBlockType( 'snow-monkey-blocks/balloon', {
	title: __( 'Balloon', 'snow-monkey-blocks' ),
	icon: 'admin-comments',
	category: 'smb',
	attributes: {
		avatarID: {
			type: 'number',
			default: 0,
		},
		avatarURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
			default: 'https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g',
		},
		avatarBorderColor: {
			type: 'string',
		},
		balloonName: {
			type: 'string',
			default: '',
		},
		balloonBody: {
			source: 'html',
			selector: '.smb-balloon__body',
		},
		modifier: {
			type: 'string',
			default: '',
		},
	},

	edit( { attributes, setAttributes, className } ) {
		const { avatarID, avatarURL, avatarBorderColor, balloonName, balloonBody, modifier } = attributes;

		const renderAvatar = ( obj ) => {
			return (
				<Button className="image-button" onClick={ obj.open } style={ { padding: 0 } }>
					<img src={ avatarURL } alt="" className={ `wp-image-${ avatarID }` } />
				</Button>
			);
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Balloon Settings', 'snow-monkey-blocks' ) }>
						<SelectControl
							label={ __( 'Type', 'snow-monkey-blocks' ) }
							value={ modifier }
							onChange={ ( value ) => setAttributes( { modifier: value } ) }
							options={ [
								{
									value: '',
									label: __( 'Normal balloon', 'snow-monkey-blocks' ),
								},
								{
									value: 'reverse',
									label: __( 'Reverse Balloon', 'snow-monkey-blocks' ),
								},
							] }
						/>
					</PanelBody>

					<PanelColorSettings
						title={ __( 'Color Settings', 'snow-monkey-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: avatarBorderColor,
								onChange: ( value ) => setAttributes( { avatarBorderColor: value } ),
								label: __( 'Avatar Border Color', 'snow-monkey-blocks' ),
							},
						] }
					>
					</PanelColorSettings>
				</InspectorControls>

				<div className={ classnames( 'smb-balloon', { [ `smb-balloon--${ modifier }` ]: !! modifier }, className ) }>
					<div className="smb-balloon__person">
						<div
							className="smb-balloon__figure"
							style={ { borderColor: avatarBorderColor } }
						>
							<MediaUpload
								onSelect={ ( media ) => {
									const newAvatarURL = !! media.sizes.thumbnail ? media.sizes.thumbnail.url : media.url;
									setAttributes( { avatarURL: newAvatarURL, avatarID: media.id } );
								} }
								type="image"
								value={ avatarID }
								render={ renderAvatar }
							/>
						</div>
						<div className="smb-balloon__name">
							<PlainText
								value={ balloonName }
								placeholder={ __( 'Name', 'snow-monkey-blocks' ) }
								onChange={ ( value ) => setAttributes( { balloonName: value } ) }
							/>
						</div>
					</div>
					<div className="smb-balloon__body">
						<RichText
							tagName="div"
							multiline="p"
							value={ balloonBody }
							onChange={ ( value ) => setAttributes( { balloonBody: value } ) }
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { avatarID, avatarURL, avatarBorderColor, balloonName, balloonBody, modifier } = attributes;

		return (
			<div className={ classnames( 'smb-balloon', { [ `smb-balloon--${ modifier }` ]: !! modifier } ) }>
				<div className="smb-balloon__person">
					<div
						className="smb-balloon__figure"
						style={ { borderColor: avatarBorderColor } }
					>
						<img src={ avatarURL } alt="" className={ `wp-image-${ avatarID }` } />
					</div>
					<div className="smb-balloon__name">
						{ balloonName }
					</div>
				</div>
				<div className="smb-balloon__body">
					<RichText.Content value={ balloonBody } />
				</div>
			</div>
		);
	},

	deprecated: deprecated,
} );
