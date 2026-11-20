# HSPH WordPress Toolkit

Tools and features used on HSPH WordPress websites.

## Installation

### 1. Pre-installation Cleanup

The hsph-wordpress-toolkit mu-plugin bundles features that are needed by most WordPress installations at HSPH, i.e. HarvardKey, Automated User Cleanup, and Default Security Configurations. Some or all of these features are already installed in existing WordPress environments, and some cleanup is needed to migrate to the new plugin.

**Uninstall the wp-saml-auth-config mu-plugin**
The wp-saml-auth-config plugin code was migrated to hsph-wordpress-toolkit. Thus, we need to uninstall that plugin before installing hsph-wordpress-toolkit.

1. In `wp-content/composer.json`, remove wp-saml-auth-config from the `repositories` node.
2. In `wp-content/composer.json`, remove wp-saml-auth-config from the `require` node.
3. Delete the `mu-plugins/wp-saml-auth-config` directory
4. Remove `wp-saml-auth-config` from the mu-plugin loader. On the flagship website, the mu-plugin loader is located at `wp-content/mu-plugins/hsph-plugin-loader.php`, but may be in a different file depending on the environment.
5. Remove `mu-plugins/wp-saml-auth-config` from the root .gitignore

**Uninstall the gtm mu-plugin**
The gtm plugin code was migrated to hsph-wordpress-toolkit. Thus, we need to uninstall that plugin before installing hsph-wordpress-toolkit.

1. Delete the `mu-plugins/gtm` directory.
2. Remove `gtm` from the mu-plugin loader. On the flagship website, the mu-plugin loader is located at `wp-content/mu-plugins/hsph-plugin-loader.php`, but may be in a different file depending on the environment.

### 2. Install hsph-wordpress-toolkit

**Install external dependencies**
1. Install and activate the wp-saml-auth plugin: https://wordpress.org/plugins/wp-saml-auth/

**Add hsph-wordpress-toolkit to wp-content/composer.json**

1. In `wp-content/composer.json`, add hsph-wordpress-toolkit to the `repositories` node.

```
 {
   "type": "vcs",
   "url": "https://github.com/HarvardChanSchool/hsph-wordpress-toolkit"
 }
 ```

 2. Require hsph-wordpress-toolkit

 ```
 composer require harvardchanschool/hsph-wordpress-toolkit:dev-main
 ```

 3. Add `mu-plugins/hsph-wordpress-toolkit` to the root .gitignore

### 3. Follow the READMEs in each feature folder

- [wp-saml-auth-config](inc/wp-saml-auth-config/README.md) 
- [wp-pantheon-security](inc/wp-pantheon-security/README.md) 
- [gtm-mu-plugin](inc/gtm/README.md)
- [user-management](inc/user-management/README.md) — after configuring, run `wp hsph_user_management import_eppn` once to populate `eppn` user meta for existing users.
- [local-uploads-proxy](inc/local-uploads-proxy/README.md) — local-only, no-op in production.

### 4. Rebuild your local site

```
npm run init:local
```

## Feature Flags

`plugin.php` loads two groups of features, each controlled by its own set of constants.

### Production feature flags

These features are loaded on every environment by default. To disable one, define its constant as `true` before the toolkit loads:

| Feature | Disable constant |
| --- | --- |
| Google Tag Manager | `HSPH_TOOLKIT_DISABLE_GTM` |
| Pantheon Security Hardening | `HSPH_TOOLKIT_DISABLE_PANTHEON_SECURITY` |
| HarvardKey Auth | `HSPH_TOOLKIT_DISABLE_SAML_AUTH` |
| User Management | `HSPH_TOOLKIT_DISABLE_USER_MGMT` |

### Local dev feature flags

These features only load when `WP_ENVIRONMENT_TYPE` is set to `local` and the site is not running on Pantheon (i.e. `$_ENV['PANTHEON_ENVIRONMENT']` is not set). They are never loaded in production, staging, or any Pantheon environment.

| Feature | Disable constant |
| --- | --- |
| [local-uploads-proxy](inc/local-uploads-proxy/README.md) | `HSPH_TOOLKIT_DISABLE_LOCAL_UPLOADS_PROXY` |
| Grouper API mock | `HSPH_TOOLKIT_DISABLE_GROUPER_MOCK` |

New local-only features should be added inside the same `WP_ENVIRONMENT_TYPE === 'local'` conditional in `plugin.php`, not loaded unconditionally.