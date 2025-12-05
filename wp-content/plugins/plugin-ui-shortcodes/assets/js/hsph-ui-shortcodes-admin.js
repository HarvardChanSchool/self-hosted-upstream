jQuery(document).on(
    'tinymce-editor-setup', function ( event, editor ) {
        // Editors enqueued in widgets (and maybe other context) are ignoring `wp_enqueue_editor`
        if(typeof hsph_shortcode_vars === 'object' && typeof editor === 'object' && typeof editor.contentCSS === 'object' ) {
            editor.contentCSS.push(hsph_shortcode_vars.css_path);
        }
    }
);
