<?php

$redis_object_cache_file = __DIR__ . '/plugins/wp-redis/object-cache.php';

if ( isset( $_ENV['PANTHEON_ENVIRONMENT'] ) && file_exists( $redis_object_cache_file ) ) {
	require $redis_object_cache_file;
}
