'use strict';

import { schema } from './_schema.js';

const { times, get, omit } = lodash;
const { RichText } = wp.editor;

export const deprecated = [
	{
		attributes: {
			...omit( schema, [ 'itemTitleTagName' ] ),
		},

		save( { attributes } ) {
			const { columns, sm, md, lg, items } = attributes;

			return (
				<div className={ `smb-items smb-items--sm-${ sm } smb-items--md-${ md } smb-items--lg-${ lg }` }>
					<div className="c-row c-row--margin">
						{ times( columns, ( index ) => {
							const itemTitle = get( items, [ index, 'title' ], '' );
							const lede = get( items, [ index, 'lede' ], '' );
							const summary = get( items, [ index, 'summary' ], '' );
							const btnLabel = get( items, [ index, 'btnLabel' ], '' );
							const btnURL = get( items, [ index, 'btnURL' ], '' );
							const btnTarget = get( items, [ index, 'btnTarget' ], '_self' );
							const btnBackgroundColor = get( items, [ index, 'btnBackgroundColor' ], '' );
							const btnTextColor = get( items, [ index, 'btnTextColor' ], '' );
							const imageID = get( items, [ index, 'imageID' ], 0 );
							const imageURL = get( items, [ index, 'imageURL' ], '' );

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
									<div className="smb-items__item">
										{ !! imageID &&
											<div className="smb-items__item__figure">
												<img src={ imageURL } alt="" data-image-id={ imageID } />
											</div>
										}

										<div className="smb-items__item__title">
											<RichText.Content value={ itemTitle } />
										</div>

										{ ! RichText.isEmpty( lede ) &&
											<div className="smb-items__item__lede">
												<RichText.Content value={ lede } />
											</div>
										}

										{ ! RichText.isEmpty( summary ) &&
											<div className="smb-items__item__content">
												<RichText.Content value={ summary } />
											</div>
										}

										{ ( ! RichText.isEmpty( btnLabel ) && !! btnURL ) &&
											<div className="smb-items__item__action">
												<a className="smb-items__item__btn smb-btn"
													href={ btnURL }
													target={ btnTarget }
													style={ { backgroundColor: btnBackgroundColor } }
													data-background-color={ btnBackgroundColor }
													data-color={ btnTextColor }
												>
													<span className="smb-btn__label" style={ { color: btnTextColor } }>
														<RichText.Content value={ btnLabel } />
													</span>
												</a>
											</div>
										}
									</div>
								</div>
							);
						} ) }
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...omit( schema, [ 'itemTitleTagName' ] ),
		},

		save( { attributes } ) {
			const { columns, sm, md, lg, items } = attributes;

			return (
				<div className={ `smb-items smb-items--lg-${ lg }` }>
					<div className="c-row c-row--margin">
						{ times( columns, ( index ) => {
							const itemTitle = get( items, [ index, 'title' ], '' );
							const lede = get( items, [ index, 'lede' ], '' );
							const summary = get( items, [ index, 'summary' ], '' );
							const btnLabel = get( items, [ index, 'btnLabel' ], '' );
							const btnURL = get( items, [ index, 'btnURL' ], '' );
							const btnTarget = get( items, [ index, 'btnTarget' ], '_self' );
							const btnBackgroundColor = get( items, [ index, 'btnBackgroundColor' ], '' );
							const btnTextColor = get( items, [ index, 'btnTextColor' ], '' );
							const imageID = get( items, [ index, 'imageID' ], 0 );
							const imageURL = get( items, [ index, 'imageURL' ], '' );

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
									<div className="smb-items__item">
										{ !! imageID &&
											<div className="smb-items__item__figure">
												<img src={ imageURL } alt="" data-image-id={ imageID } />
											</div>
										}

										<div className="smb-items__item__title">
											<RichText.Content value={ itemTitle } />
										</div>

										{ ! RichText.isEmpty( lede ) &&
											<div className="smb-items__item__lede">
												<RichText.Content value={ lede } />
											</div>
										}

										{ ! RichText.isEmpty( summary ) &&
											<div className="smb-items__item__content">
												<RichText.Content value={ summary } />
											</div>
										}

										{ ( ! RichText.isEmpty( btnLabel ) && !! btnURL ) &&
											<div className="smb-items__item__action">
												<a className="smb-items__item__btn smb-btn"
													href={ btnURL }
													target={ btnTarget }
													style={ { backgroundColor: btnBackgroundColor } }
													data-background-color={ btnBackgroundColor }
													data-color={ btnTextColor }
												>
													<span className="smb-btn__label" style={ { color: btnTextColor } }>
														<RichText.Content value={ btnLabel } />
													</span>
												</a>
											</div>
										}
									</div>
								</div>
							);
						} ) }
					</div>
				</div>
			);
		},
	},
];
