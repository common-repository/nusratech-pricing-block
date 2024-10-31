/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.blocks;
const { Toolbar, IconButton } = wp.components;

export default class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const { columns } = attributes;

		const customControls = [
			{
				icon: icons.colOne,
				title: __( 'One Column' ),
				onClick: () => setAttributes( { columns: 1 } ),
				isActive: columns === 1,
			},
			{
				icon: icons.colTwo,
				title: __( 'Two Column' ),
				onClick: () => setAttributes( { columns: 2 } ),
				isActive: columns === 2,
			},
			{
				icon: icons.colThree,
				title: __( 'Three Column' ),
				onClick: () => setAttributes( { columns: 3 } ),
				isActive: columns === 3,
			},
		];

		return (
			<BlockControls key="controls">
				<Toolbar controls={ customControls } />
			</BlockControls>
		);
	}
}
