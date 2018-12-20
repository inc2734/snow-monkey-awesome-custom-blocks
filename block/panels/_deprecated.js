'use strict';

import { schema } from './_schema.js';

const { times, get, omit } = lodash;
const { RichText } = wp.editor;
const { Fragment } = wp.element;

export const deprecated = [
	{
		attributes: {
			...omit( schema, [ 'itemTitleTagName' ] ),
		},

		save( { attributes } ) {
			const { columns, sm, md, lg, imagePadding, items } = attributes;

			return (
				<div className={ `smb-panels smb-panels--sm-${ sm } smb-panels--md-${ md } smb-panels--lg-${ lg }` } data-image-padding={ imagePadding }>
					<div className="c-row c-row--margin c-row--fill">
						{ times( columns, ( index ) => {
							const itemTitle = get( items, [ index, 'title' ], '' );
							const summary = get( items, [ index, 'summary' ], '' );
							const linkLabel = get( items, [ index, 'linkLabel' ], '' );
							const linkURL = get( items, [ index, 'linkURL' ], '' );
							const linkTarget = get( items, [ index, 'linkTarget' ], '_self' );
							const imageID = get( items, [ index, 'imageID' ], 0 );
							const imageURL = get( items, [ index, 'imageURL' ], '' );

							const renderItem = ( itemContent ) => {
								if ( !! linkURL ) {
									return (
										<a
											className="smb-panels__item"
											href={ linkURL }
											target={ linkTarget }
										>
											{ itemContent }
										</a>
									);
								}

								return (
									<div
										className="smb-panels__item"
										href={ linkURL }
										target={ linkTarget }
									>
										{ itemContent }
									</div>
								);
							};

							const _generateColClasses = () => {
								let colClasses = [];
								colClasses.push( 'c-row__col' );
								colClasses.push( `c-row__col--1-${ sm }` );
								if ( sm === md ) {
									colClasses.push( `c-row__col--1-${ md }` );
								}
								colClasses.push( `c-row__col--lg-1-${ lg }` );
								colClasses = colClasses.join( ' ' );
								return colClasses;
							};

							return (
								<div className={ _generateColClasses( sm, md, lg ) }>
									{
										renderItem(
											<Fragment>
												{ !! imageID &&
													<div className="smb-panels__item__figure">
														<img src={ imageURL } alt="" data-image-id={ imageID } />
													</div>
												}

												<div className="smb-panels__item__body">
													{ ! RichText.isEmpty( itemTitle ) &&
														<div className="smb-panels__item__title">
															<RichText.Content value={ itemTitle } />
														</div>
													}

													{ ! RichText.isEmpty( summary ) &&
														<div className="smb-panels__item__content">
															<RichText.Content value={ summary } />
														</div>
													}

													{ ! RichText.isEmpty( linkLabel ) &&
														<div className="smb-panels__item__action">
															<div className="smb-panels__item__link">
																<RichText.Content value={ linkLabel } />
															</div>
														</div>
													}
												</div>
											</Fragment>
										)
									}
								</div>
							);
						} ) }
					</div>
				</div>
			);
		},
	},
];
