/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class PricingTable extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const { attributes } = this.props;

		const {
			buttonBackground,
			buttonColor,
			borderRadius,
			tableBackground,
			tableColor,
		} = attributes;

		const buttonStyle = {
			backgroundColor: buttonBackground,
			color: buttonColor,
		};

		return (
			<div className={ this.props.className } style={ { backgroundColor: tableBackground, borderRadius: borderRadius } } >

				{ this.props.title && this.props.title.length > 0 && (
					<h4 className={ 'pricing-block__title' } style={ { color: tableColor } } >
						{ this.props.title }
					</h4>
				) }

				{ this.props.amount && this.props.amount.length > 0 && (
					<div className={ 'pricing-block__price' }>

						{ this.props.currency && this.props.currency.length > 0 && (
							<span className={ 'pricing-block__currency' } style={ { color: tableColor } } >
								{ this.props.currency }
							</span>
						) }

						<h5 className={ 'pricing-block__amount' } style={ { color: tableColor } } >
							{ this.props.amount }
						</h5>
					</div>
				) }

				{ this.props.features && this.props.features.length > 0 && (
					<ul className={ 'pricing-block__features' } style={ { color: tableColor } } >
						{ this.props.features }
					</ul>
				) }

				{ this.props.button && this.props.button.length > 0 && (
					<a className={ 'pricing-block__button wp-block-button__link' } href={ this.props.url } title={ this.props.button } style={ buttonStyle } >
						{ this.props.button }
					</a>
				) }

			</div>
		);
	}
}
