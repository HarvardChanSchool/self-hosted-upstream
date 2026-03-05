# wp-saml-auth-config
An mu-plugin used to configure the [wp-saml-auth plugin](https://wordpress.org/plugins/wp-saml-auth/) plugin. 

- Supports Okta and legacy HarvardKey (harvard-cas) IdPs
- Works with single or multisite WordPress
- Supports multiple metadata files if multiple domains are being used in a multisite network

*Note:*  
This README is referenced by our Okta Wiki page: https://harvardwiki.atlassian.net/wiki/spaces/HSPHWeb/pages/409272422/Okta

## Quickstart: Add HarvardKey Login to WordPress

1. Register the application with IAM. See INC06116464 for an example of how to format the description and required info.
2. Install the [wp-saml-auth plugin](https://wordpress.org/plugins/wp-saml-auth/) and activate it (network activate if multisite).
3. Install this plugin as an mu-plugin in `wp-content/mu-plugins`. Modify the mu-plugin loader to include this plugin, or add `wp-saml-auth-config.php` directly to `wp-content/mu-plugins`.
4. Follow the IdP Specific Config instructions below based on which IdP you're using.

## IdP Specific Config

#### Okta
1. Download the IDP metadata XML file provided by IAM. If it's a multisite and there's multiple domains being used, download each metadata file.
2. Upload the metadata file(s) to the WordPress filesystem. **Adhere to the following path and filename requirements carefully**. The files needs to be in the `wp-content/uploads/private/okta` folder. You'll  need to create the intermediate folders if they don't already exist. Metadata filenames need to be named using the following convention: <br>
`[site_url].xml`<br>
See the below `site_url -> metadata file` mapping for examples:<br>
```
https://fxb.harvard.edu -> fxb.harvard.edu.xml
https://www.hhrjournal.org -> www.hhrjournal.org.xml
```




#### Legacy (harvard-cas)
As long as the application is registered correctly with IAM, no further action should be needed.
