jQuery(document).ready(
    function ($) {
        // Tabs Shortcode
        $(".hsph-ui-shortcodes.tabs").tabs();

        // Accordion Shortcode
        $(".hsph-ui-shortcodes.accordion").accordion(
            {
                heightStyle: "content",
                animate: 500,
                collapsible: true,
                icons: { "header": "dashicons dashicons-arrow-down-alt2 icon-up", "activeHeader": "dashicons dashicons-arrow-down-alt2 icon-down" },
            }
        );

        // If we find an altmetric badge we load the Altmetric JS lib.
        if ($('.altmetric-embed').length) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
            var x = document.getElementsByTagName('head')[0];
            x.appendChild(s);
        }
    }
);
