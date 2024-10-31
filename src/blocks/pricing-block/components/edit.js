/**
 * Internal dependencies
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, UrlInput } = wp.blocks;
const { Dashicon, IconButton, withState } = wp.components;

/**
 * Block edit function
 */
export default withState( { editable: 'title' } )( class PricingTableBlock extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			className,
			isSelected,
			editable,
			setState,
			setAttributes,
		} = this.props;

		const {
			align,
			amount,
			amountTwo,
			amountThree,
			button,
			buttonTwo,
			buttonThree,
			buttonBackground,
			buttonColor,
			columns,
			currency,
			currencyTwo,
			currencyThree,
			features,
			featuresTwo,
			featuresThree,
			tableBackground,
			tableColor,
			borderRadius,
			title,
			titleTwo,
			titleThree,
			url,
			urlTwo,
			urlThree,
		} = attributes;

		const onSetActiveEditable = ( newEditable ) => () => {
			setState( { editable: newEditable } );
		};

		const formattingControls = [ 'bold', 'italic', 'strikethrough' ];

		return [
			isSelected && (
				<Controls
					{ ...this.props }
				/>
			),
			isSelected && (
				<Inspector
					{ ...this.props }
				/>
			),

			<div className={ className + ' pricing-block pricing-block--' + columns + ' pricing-block--' + align } style={ { textAlign: align } }>

				<div className="pricing-block__item pricing-block__item--1" style={ { backgroundColor: tableBackground, borderRadius: borderRadius } }>

					<RichText
						tagName="h4"
						className="pricing-block__title"
						onChange={ ( nextTitle ) => setAttributes( { title: nextTitle } ) }
						style={ { color: tableColor } }
						value={ title }
						placeholder={ __( 'Plan A' ) }
						isSelected={ isSelected && editable === 'title' }
						onFocus={ onSetActiveEditable( 'title' ) }
						formattingControls={ formattingControls }
						keepPlaceholderOnFocus
					/>

					<div className="pricing-block__price">

						<RichText
							tagName="span"
							className="pricing-block__currency"
							onChange={ ( nextCurrency ) => setAttributes( { currency: nextCurrency } ) }
							style={ { color: tableColor } }
							value={ currency }
							placeholder={ __( '$' ) }
							isSelected={ isSelected && editable === 'currency' }
							onFocus={ onSetActiveEditable( 'currency' ) }
							formattingControls={ formattingControls }
							keepPlaceholderOnFocus
						/>

						<RichText
							tagName="h5"
							className="pricing-block__amount"
							onChange={ ( nextAmount ) => setAttributes( { amount: nextAmount } ) }
							style={ { color: tableColor } }
							value={ amount }
							placeholder={ __( '99' ) }
							isSelected={ isSelected && editable === 'amount' }
							onFocus={ onSetActiveEditable( 'amount' ) }
							formattingControls={ formattingControls }
							keepPlaceholderOnFocus
						/>

					</div>

					<RichText
						tagName="ul"
						multiline="li"
						className="pricing-block__features"
						onChange={ ( nextFeatures ) => setAttributes( { features: nextFeatures } ) }
						value={ features }
						style={ { color: tableColor } }
						placeholder={ __( 'Add features' ) }
						isSelected={ isSelected && editable === 'features' }
						onFocus={ onSetActiveEditable( 'features' ) }
						keepPlaceholderOnFocus
					/>

					{ ( ( button && button.length > 0 ) || isSelected ) && (
						<span className="wp-block-button" title={ button }>
							<RichText
								tagName="span"
								className="pricing-block__button wp-block-button__link"
								onChange={ ( nextButton ) => setAttributes( { button: nextButton } ) }
								value={ button }
								placeholder={ __( 'Buy Now' ) }
								isSelected={ isSelected && editable === 'button' }
								onFocus={ onSetActiveEditable( 'button' ) }
								style={ {
									backgroundColor: buttonBackground,
									color: buttonColor,
								} }
								formattingControls={ formattingControls }
								keepPlaceholderOnFocus
							/>
						</span>
					) }

				</div>

				{ ( columns >= 2 ) && (

					<div className="pricing-block__item pricing-block__item--2" style={ { backgroundColor: tableBackground, borderRadius: borderRadius } }>

						<RichText
							tagName="h4"
							multiline="false"
							className="pricing-block__title"
							onChange={ ( nextTitle ) => setAttributes( { titleTwo: nextTitle } ) }
							style={ { color: tableColor } }
							value={ titleTwo }
							placeholder={ __( 'Plan B' ) }
							isSelected={ isSelected && editable === 'titleTwo' }
							onFocus={ onSetActiveEditable( 'titleTwo' ) }
							formattingControls={ formattingControls }
							keepPlaceholderOnFocus
						/>

						<div className="pricing-block__price">

							<RichText
								tagName="span"
								className="pricing-block__currency"
								onChange={ ( nextCurrency ) => setAttributes( { currencyTwo: nextCurrency } ) }
								style={ { color: tableColor } }
								value={ currencyTwo }
								placeholder={ __( '$' ) }
								isSelected={ isSelected && editable === 'currencyTwo' }
								onFocus={ onSetActiveEditable( 'currencyTwo' ) }
								formattingControls={ formattingControls }
								keepPlaceholderOnFocus
							/>

							<RichText
								tagName="h5"
								className="pricing-block__amount"
								onChange={ ( nextAmount ) => setAttributes( { amountTwo: nextAmount } ) }
								style={ { color: tableColor } }
								value={ amountTwo }
								placeholder={ __( '99' ) }
								isSelected={ isSelected && editable === 'amountTwo' }
								onFocus={ onSetActiveEditable( 'amountTwo' ) }
								formattingControls={ formattingControls }
								keepPlaceholderOnFocus
							/>

						</div>

						<RichText
							tagName="ul"
							multiline="li"
							className="pricing-block__features"
							onChange={ ( nextFeatures ) => setAttributes( { featuresTwo: nextFeatures } ) }
							value={ featuresTwo }
							style={ { color: tableColor } }
							placeholder={ __( 'Add features' ) }
							isSelected={ isSelected && editable === 'featuresTwo' }
							onFocus={ onSetActiveEditable( 'featuresTwo' ) }
							keepPlaceholderOnFocus
						/>

						{ ( ( buttonTwo && buttonTwo.length > 0 ) || isSelected ) && (
							<span className="wp-block-button" title={ buttonTwo }>
								<RichText
									tagName="span"
									className="pricing-block__button wp-block-button__link"
									onChange={ ( nextButton ) => setAttributes( { buttonTwo: nextButton } ) }
									value={ buttonTwo }
									placeholder={ __( 'Buy Now' ) }
									isSelected={ isSelected && editable === 'buttonTwo' }
									onFocus={ onSetActiveEditable( 'buttonTwo' ) }
									style={ {
										backgroundColor: buttonBackground,
										color: buttonColor,
									} }
									formattingControls={ formattingControls }
									keepPlaceholderOnFocus
								/>
							</span>
						) }

					</div>
				) }
				{ ( columns >= 3 ) && (

					<div className="pricing-block__item pricing-block__item--3" style={ { backgroundColor: tableBackground, borderRadius: borderRadius } }>

						<RichText
							tagName="h4"
							multiline="false"
							className="pricing-block__title"
							onChange={ ( nextTitle ) => setAttributes( { titleThree: nextTitle } ) }
							style={ { color: tableColor } }
							value={ titleThree }
							placeholder={ __( 'Plan C' ) }
							isSelected={ isSelected && editable === 'titleThree' }
							onFocus={ onSetActiveEditable( 'titleThree' ) }
							formattingControls={ formattingControls }
							keepPlaceholderOnFocus
						/>

						<div className="pricing-block__price">

							<RichText
								tagName="span"
								className="pricing-block__currency"
								onChange={ ( nextCurrency ) => setAttributes( { currencyThree: nextCurrency } ) }
								style={ { color: tableColor } }
								value={ currencyThree }
								placeholder={ __( '$' ) }
								isSelected={ isSelected && editable === 'currencyThree' }
								onFocus={ onSetActiveEditable( 'currencyThree' ) }
								formattingControls={ formattingControls }
								keepPlaceholderOnFocus
							/>

							<RichText
								tagName="h5"
								className="pricing-block__amount"
								onChange={ ( nextAmount ) => setAttributes( { amountThree: nextAmount } ) }
								style={ { color: tableColor } }
								value={ amountThree }
								placeholder={ __( '99' ) }
								isSelected={ isSelected && editable === 'amountThree' }
								onFocus={ onSetActiveEditable( 'amountThree' ) }
								formattingControls={ formattingControls }
								keepPlaceholderOnFocus
							/>

						</div>

						<RichText
							tagName="ul"
							multiline="li"
							className="pricing-block__features"
							onChange={ ( nextFeatures ) => setAttributes( { featuresThree: nextFeatures } ) }
							value={ featuresThree }
							style={ { color: tableColor } }
							placeholder={ __( 'Add features' ) }
							isSelected={ isSelected && editable === 'featuresThree' }
							onFocus={ onSetActiveEditable( 'featuresThree' ) }
							keepPlaceholderOnFocus
						/>

						{ ( ( buttonThree && buttonThree.length > 0 ) || isSelected ) && (
							<span className="wp-block-button" title={ buttonThree }>
								<RichText
									tagName="span"
									className="pricing-block__button wp-block-button__link"
									onChange={ ( nextButton ) => setAttributes( { buttonThree: nextButton } ) }
									value={ buttonThree }
									placeholder={ __( 'Buy Now' ) }
									isSelected={ isSelected && editable === 'buttonThree' }
									onFocus={ onSetActiveEditable( 'buttonThree' ) }
									style={ {
										backgroundColor: buttonBackground,
										color: buttonColor,
									} }
									formattingControls={ formattingControls }
									keepPlaceholderOnFocus
								/>
							</span>
						) }

					</div>
				) }

			</div>,
			isSelected && ( editable === 'button' || editable === 'buttonTwo' || editable === 'buttonThree' ) && (
				<form
					className="blocks-button__inline-link"
					onSubmit={ ( event ) => event.preventDefault() }>
					<Dashicon icon="admin-links" />

					{ ( isSelected && editable === 'button' ) && (
						<UrlInput
							value={ url }
							onChange={ ( value ) => setAttributes( { url: value } ) }
						/>
					) }

					{ editable === 'buttonTwo' && (
						<UrlInput
							value={ urlTwo }
							onChange={ ( value ) => setAttributes( { urlTwo: value } ) }
						/>
					) }
					{ editable === 'buttonThree' && (
						<UrlInput
							value={ urlThree }
							onChange={ ( value ) => setAttributes( { urlThree: value } ) }
						/>
					) }
					<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
				</form>
			),
		];
	}
} );
