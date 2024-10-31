<?php
/**
 * Plugin Name: Nusratech Pricing Block
 * Plugin URI: http://nusratech.com
 * Description: Gutenberg pricing table block, create pricing/compare table easily
 * Author: Sharif Mohammad Eunus
 * Author URI: https://smeunus.github.io
 * Tags: gutenberg, editor, block, layout, writing
 * Version: 1.0.0
 * Text Domain: 'nusratech-pricing-block'
 * Domain Path: languages
 * Tested up to: 4.9.7
 *
 * Gutenberg Pricing Block by Nusratech is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with @@pkg.title. If not, see <http://www.gnu.org/licenses/>.
 *
 * @package   Gutenberg Pricing Block by Nusratech
 * @author    Sharif Mohammad Eunus
 * @license   GPL-3.0
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Main Gutenberg Pricing block by Nusratech Class
 *
 * @since 1.0.0
 */
class NusratechPricingBlock
{
	/**
	 * This plugin's instance.
	 *
	 * @var NusratechPricingBlock
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register()
	{
		if (null === self::$instance) {
			self::$instance = new NusratechPricingBlock();
		}
	}

	/**
	 * The base directory path (without trailing slash).
	 *
	 * @var string $_url
	 */
	private $_dir;

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $_url
	 */
	private $_url;

	/**
	 * The Plugin version.
	 *
	 * @var string $_version
	 */
	private $_version;

	/**
	 * The Plugin version.
	 *
	 * @var string $_slug
	 */
	private $_slug;

	/**
	 * The Constructor.
	 */
	private function __construct()
	{
		$this->_version = '1.0.0';
		$this->_slug = 'nusratech-pricing-block';
		$this->_dir = untrailingslashit(plugin_dir_path('/', __FILE__));
		$this->_url = untrailingslashit(plugins_url('/', __FILE__));

		add_action('init', array( $this, 'register_blocks' ));
		add_action('init', array( $this, 'block_assets' ));
		add_action('init', array( $this, 'editor_assets' ));
	}

	/**
	 * Add actions to enqueue assets.
	 *
	 * @access public
	 */
	public function register_blocks()
	{
		// Return early if this function does not exist.
		if (!function_exists('register_block_type')) {
			return;
		}

		// Shortcut for the slug.
		$slug = $this->_slug;

		register_block_type(
			'nusratech/pricing-block',
			[
				'editor_script' => $slug . '-editor',
				'editor_style' => $slug . '-editor',
				'style' => $slug . '-frontend',
			]
		);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function block_assets()
	{
		// Styles.
		wp_register_style(
			$this->_slug . '-frontend',
			$this->_url . '/dist/blocks.style.build.css',
			[ 'wp-blocks' ],
			$this->_version
		);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets()
	{
		// Styles.
		wp_register_style(
			$this->_slug . '-editor',
			$this->_url . '/dist/blocks.editor.build.css',
			[ 'wp-edit-blocks' ],
			$this->_version
		);

		// Scripts.
		wp_register_script(
			$this->_slug . '-editor',
			$this->_url . '/dist/blocks.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			$this->_version
		);
	}
}

NusratechPricingBlock::register();
