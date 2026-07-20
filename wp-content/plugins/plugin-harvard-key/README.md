# HSPH Plugin Harvard Key

HarvardKey Integration for WordPress.

# Functionality

- Single Sign-On via HarvardKey using SAML
- Single Log-Out via HarvardKey using SAML
- Upon successful login, automatically update the following WordPress user properties using attributes in the SAML response 
  - user_email
  - display_name
  - nickname
  - first_name
  - last_name
  - user_meta
    - grouper_groups
    - last_login
    - eppn
- Restrict access to content
  - Pages
    - Choose whether the page will be "public" or "HarvardKey protected"
    - If "HarvardKey protected," select an option from a meta-box on the page edit screen
      - "All": Access is restricted to members of the WordPress HarvardKey authorization group, defined in the HarvardKey registration.
      - "HSPH Faculty": Access is restricted to members of harvard:org:schools:sph:apps:managed:faculty-sph-apps.
      - "HSPH Staff": Access is restricted to members of harvard:org:schools:sph:apps:managed:staff-sph-apps.
      - "HSPH Postdocs:" Access is restricted to members of harvard:org:schools:sph:apps:managed:postdoctoral-sph-apps.
      - "HSPH Students:" Access is restricted to members of harvard:org:schools:sph:apps:managed:students-sph-apps
      - "Other Group Not Listed": Access is restricted to harvard:org:schools:sph:apps:managed:[provided by user in text field]
    - Any page that is "HarvardKey protected" will be excluded from the main query for users that are not logged-in.
  - Sites
    - Check a box in Site Admin > Settings > HarvardKey to restrict access to members of the WordPress HarvardKey authorization group.
  - Post Types
    - Toggle checkboxes from a list of post types in Site Admin > Settings > HarvardKey. Access to selected post types will be restricted to members of the WordPress HarvardKey authorization group.
- Adds a capability use_grouper_groups
  - Allows the user to see and use the access restriction meta box (described above) on the edit page screen.
  - Filters this capability into super_admin_roles_display, the filter that determines which capabilities are selectable in Network Admin > Settings > Users and Limits.
- Auto-generates password during user creation.
- Disables password change notification.
- Logging
  - If WP_DEBUG is true, debug info will be written to the file defined in HARVARD_KEY_DEBUG_FILE.

# Known Issues
- HarvardKey Single Log-Out may not always work when logging out from and back into different sites. I.e. if you logout of site A and immediately try to log into site B, you may still be logged into site B.
