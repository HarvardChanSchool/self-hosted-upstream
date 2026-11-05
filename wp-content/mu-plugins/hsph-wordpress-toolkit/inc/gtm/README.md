# GTM Integration MU-Plugin

General example to integrate GTM through an admin setting and with optional environment parameters in visitor view.
Includes support for multisite network setups.

- The single blog/site settings will override the network wide settings.
- This is applicable for all the GTM settings integrated by this code.

The GTM Auth and Preview parameters are used to distinguish between [GTM environments](https://support.google.com/tagmanager/answer/6311518). These environments allow GTM containers to be published to those *GTM* environments allowing for testing on different *website* environments, before publishing container changes to `production`.

Things to consider before implementation:

- Implementation through other plugins like [Google Site Kit](https://sitekit.withgoogle.com/).
- Don't reinvent the wheel if not necessary, this is for when other plugin options are blocked by client IT teams or hosting providers.
- Should likely be in a mu-plugin or plugin of its own since it is site related (may not apply when it is a multisite).
- Displays settings in the "General" section. If tracking scripts + pixels amass these settings should be grouped into their own settings page.
