/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, ColorPalette } = wp.blocks;
const { PanelBody, PanelColor, RangeControl } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
		this.updateBorderRadius = this.updateBorderRadius.bind( this );
	}
	updateBorderRadius( newRadius ) {
		this.props.setAttributes( { borderRadius: newRadius } );
	}
	render() {

		const {
			attributes,
			setAttributes
		} = this.props;

		const {
			buttonBackground,
			tableBackground,
			tableColor,
			buttonColor,
			borderRadius,
		} = attributes;

		return (
			<InspectorControls key="inspector">
				<PanelColor title={ __( 'Background Color' ) } colorValue={ tableBackground } initialOpen={ false }>
					<ColorPalette
						value={ tableBackground }
						onChange={ ( colorValue ) => setAttributes( { tableBackground: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Text Color' ) } colorValue={ tableColor } initialOpen={ false }>
					<ColorPalette
						value={ tableColor }
						onChange={ ( colorValue ) => setAttributes( { tableColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Button Background' ) } colorValue={ buttonBackground } initialOpen={ false }>
					<ColorPalette
						value={ buttonBackground }
						onChange={ ( colorValue ) => setAttributes( { buttonBackground: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Button Text' ) } colorValue={ buttonColor } initialOpen={ false }>
					<ColorPalette
						value={ buttonColor }
						onChange={ ( colorValue ) => setAttributes( { buttonColor: colorValue } ) }
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Border Radius' ) }
					value={ borderRadius || '' }
					onChange={ this.updateBorderRadius }
					min={ 0 }
					max={ 15 }
				/>

			</InspectorControls>
		);
	}
}
