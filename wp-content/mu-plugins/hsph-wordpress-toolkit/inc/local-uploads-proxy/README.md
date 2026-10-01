# local-uploads-proxy

Local-only. Redirects requests for missing `/wp-content/uploads/` files to production, so local dev doesn't need a full media sync.

Loaded as part of `hsph-wordpress-toolkit`. No-op outside the local environment (`wp_get_environment_type() !== 'local'`).

## How it works

By the time WordPress boots for a `/wp-content/uploads/` request, Valet has already confirmed no local file exists at that path (otherwise it would have been served statically and never reached PHP). So any request that reaches the `template_redirect` hook here is safe to 302 to production.

Multisite subdirectory installs also serve uploads with a subsite slug prefixed onto the path (e.g. `/information-technology/wp-content/uploads/...`), so requests with one optional leading path segment before `wp-content/uploads/` are matched too. The request URI is passed through to the upstream host unchanged — production resolves both the prefixed and unprefixed shapes, so no rewriting is needed.

Note that image `src` attributes on local pages still point at the local `.test` domain — that's how this feature works. The browser requests the local URL, and this handler redirects it to production; there is no URL rewriting involved.

## Configuration

By default, requests are redirected to the current request host with a trailing `.test` stripped and the scheme forced to `https`. For example, `intranet.hsph.harvard.edu.test` proxies to `https://intranet.hsph.harvard.edu` with no configuration needed.

If the local domain doesn't mirror its production host this way (e.g. a non-flagship site with a different local alias), define an explicit override:

```php
define( 'HSPH_UPLOADS_PROXY_HOST', 'https://intranet.hsph.harvard.edu' );
```

## Disabling

Define `HSPH_TOOLKIT_DISABLE_LOCAL_UPLOADS_PROXY` as `true` before the toolkit loads.
