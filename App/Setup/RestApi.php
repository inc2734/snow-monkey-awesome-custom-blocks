<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */

namespace Snow_Monkey\Plugin\Blocks\App\Setup;

use Snow_Monkey\Plugin\Blocks;
use Snow_Monkey\Plugin\Blocks\App\Api;

class RestApi {

	public function __construct() {
		new Api\TemplateCategories\TemplateCategories();
		new Api\BlockTemplates\BlockTemplates();

		foreach ( glob( SNOW_MONKEY_BLOCKS_DIR_PATH . '/block/*/api.php' ) as $file ) {
			include( $file );
		}
	}
}