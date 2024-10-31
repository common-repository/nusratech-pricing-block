/**
 * Internal dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';
import PricingTable from './components/pricing-block';
import PricingTableBlock from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Block registration
 */
registerBlockType( 'nusratech/pricing-block', {

	title: __( 'Pricing Block' ),

	description: __( 'Add pricing Block.' ),

	icon: 'editor-table',

	category: 'layout',

	keywords: [
		__( 'comparison' ),
		__( 'nusratech' ),
		__( 'pricing' ),
	],

	attributes: {
		title: {
			source: 'children',
			selector: '.pricing-block__item--1 .pricing-block__title',
		},
		features: {
			source: 'children',
			selector: '.pricing-block__item--1 .pricing-block__features',
			default: [],
		},
		currency: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--1 .pricing-block__currency',
		},
		amount: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--1 .pricing-block__amount',
		},
		button: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--1 .pricing-block__button',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
			selector: '.pricing-block__item--1 .pricing-block__button',
		},
		titleTwo: {
			source: 'children',
			selector: '.pricing-block__item--2 .pricing-block__title',
		},
		featuresTwo: {
			source: 'children',
			selector: '.pricing-block__item--2 .pricing-block__features',
			default: [],
		},
		currencyTwo: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--2 .pricing-block__currency',
		},
		amountTwo: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--2 .pricing-block__amount',
		},
		buttonTwo: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--2 .pricing-block__button',
		},
		urlTwo: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
			selector: '.pricing-block__item--2 .pricing-block__button',
		},

		titleThree: {
			source: 'children',
			selector: '.pricing-block__item--3 .pricing-block__title',
		},
		featuresThree: {
			source: 'children',
			selector: '.pricing-block__item--3 .pricing-block__features',
			default: [],
		},
		currencyThree: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--3 .pricing-block__currency',
		},
		amountThree: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--3 .pricing-block__amount',
		},
		buttonThree: {
			type: 'array',
			source: 'children',
			selector: '.pricing-block__item--3 .pricing-block__button',
		},
		urlThree: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
			selector: '.pricing-block__item--3 .pricing-block__button',
		},
		layout: {
			type: 'string',
		},
		align: {
			type: 'string',
			default: 'center',
		},
		columns: {
			type: 'number',
			default: 2,
		},
		tableBackground: {
			type: 'string',
		},
		borderRadius: {
			type: 'number',
			default: 4,
		},
		tableColor: {
			type: 'string',
		},
		buttonBackground: {
			type: 'string',
		},
		buttonColor: {
			type: 'string',
		},
	},

	edit: PricingTableBlock,

	save: function( props ) {

		const {
			amount,
			button,
			currency,
			features,
			title,
			url,
			amountTwo,
			buttonTwo,
			currencyTwo,
			featuresTwo,
			titleTwo,
			urlTwo,
			amountThree,
			buttonThree,
			currencyThree,
			featuresThree,
			titleThree,
			urlThree,
			align,
			columns,
		} = props.attributes;

		return (

			<div
				className={ props.className + ' pricing-block pricing-block--' + columns + ' pricing-block--' + align }
				style={ {
					textAlign: align,
				} }
			>
				<PricingTable { ...props }
					amount={ amount }
					button={ button }
					className={ 'pricing-block__item pricing-block__item--1' }
					currency={ currency }
					features={ features }
					title={ title }
					url={ url }
				>
				</PricingTable>
				{ columns >= 2 && (
					<PricingTable { ...props }
						amount={ amountTwo }
						button={ buttonTwo }
						className={ 'pricing-block__item pricing-block__item--2' }
						currency={ currencyTwo }
						features={ featuresTwo }
						title={ titleTwo }
						url={ urlTwo }
					>
					</PricingTable>
				) }
				{ columns >= 3 && (
					<PricingTable { ...props }
						amount={ amountThree }
						button={ buttonThree }
						className={ 'pricing-block__item pricing-block__item--3' }
						currency={ currencyThree }
						features={ featuresThree }
						title={ titleThree }
						url={ urlThree }
					>
					</PricingTable>
				) }
			</div>
		);
	},
} );
