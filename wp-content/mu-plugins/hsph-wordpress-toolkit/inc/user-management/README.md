# HSPH User Management

Automatically removes WordPress user accounts that are not authorized through Harvard's [Grouper](https://grouper.internet2.edu/) group management system. Works on both single-site and multisite WordPress installations.

## How it works

On each run, the plugin:

1. Fetches the list of authorized users from the configured Grouper groups
2. Compares that list against all WordPress users (matched by `eppn` metadata)
3. On multisite, also removes users who have no access to any active blog
4. Deletes unauthorized users and reassigns their content to the admin user defined in `HSPH_USER_MANAGEMENT_REASSIGN_TO`
5. Logs every action as structured JSON

Runs are triggered weekly via WordPress cron, or on-demand via WP-CLI.

## Configuration

All constants are defined in `wp-config.php`.

### Required

These constants have no defaults and must be set for the plugin to function.

| Constant | Description |
|---|---|
| `HSPH_USER_MANAGEMENT_REASSIGN_TO` | `user_login` of the WordPress user that deleted users' content is reassigned to. An exception is thrown at runtime if this is not defined. |
| `HSPH_GROUPER_AUTH_GROUPS` | Array of Grouper group paths whose members are considered authorized WordPress users. |
| `HSPH_GROUPER_API_URL` | Base URL of the Grouper Convenience API. **Must include a trailing slash** (e.g. `https://go.apis.huit.harvard.edu/ats/grouper-convenience/v2/`), because endpoint paths are appended directly. |
| `HSPH_GROUPER_CONVENIENCE_API_KEY` | API key for the Harvard Grouper Convenience API. Search 1P for "Grouper Convenience API" |
| `HSPH_GROUPER_BASE_API_USERNAME` | Username for Grouper base API HTTP authentication. Search 1P for "Grouper Web Service API"
 |
| `HSPH_GROUPER_BASE_API_PASSWORD` | Password for Grouper base API HTTP authentication. Search 1P for "Grouper Web Service API" |
| `HSPH_USER_MANAGEMENT_PDS_KEY` | API key for the Harvard Person Data Service (PDS). Only required when using the `import_eppn` WP-CLI command. Search 1P for "Person Data Service (PDS) API Key" |

**Example:**

```php
define( 'HSPH_USER_MANAGEMENT_REASSIGN_TO', 'site-admin' );
define( 'HSPH_GROUPER_AUTH_GROUPS', array(
    'edu:harvard:huit:ats:apps:wordpress:wordpress-authorization',
) );
define( 'HSPH_GROUPER_API_URL',              'https://go.apis.huit.harvard.edu/ats/grouper-convenience/v2/' );
define( 'HSPH_GROUPER_CONVENIENCE_API_KEY',  'xxxxxxxxxxxxxxxx' );
define( 'HSPH_GROUPER_BASE_API_USERNAME',    'svc-account' );
define( 'HSPH_GROUPER_BASE_API_PASSWORD',    'xxxxxxxxxxxxxxxx' );
define( 'HSPH_USER_MANAGEMENT_PDS_KEY',      'xxxxxxxxxxxxxxxx' );
```

### Optional

These constants have built-in defaults and only need to be defined to override them.

| Constant | Default | Description |
|---|---|---|
| `HSPH_USER_MANAGEMENT_DO_NOT_DELETE` | `array()` | Additional `user_login` values that will never be deleted, merged with the hardcoded exclusion list. See [Users excluded from deletion](#users-excluded-from-deletion). |
| `HSPH_USER_MANAGEMENT_CRON_ENABLED` | `true` | Set to `false` to disable the weekly cron job entirely. |
| `HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN` | `false` | Set to `true` to run the cron job in dry-run mode — logs what would be deleted without actually deleting anyone. |
| `HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE` | `true` | Set to `false` to disable the failsafe that prevents the cron job from running when the number of unauthorized users exceeds `HSPH_USER_MANAGEMENT_MAX_DELETIONS`. |
| `HSPH_USER_MANAGEMENT_MAX_DELETIONS` | `100` | Maximum number of users that can be deleted in a single session. If unauthorized users exceed this count and the failsafe is enabled, the session aborts without deleting anyone. |
| `HSPH_USER_MANAGEMENT_LOG_LEVEL` | `Psr\Log\LogLevel::DEBUG` | Minimum PSR-3 log level written to the log file. Accepts a PSR-3 `LogLevel` constant (e.g. `Psr\Log\LogLevel::INFO`) or the equivalent lowercase string (e.g. `'info'`). Valid strings: `'debug'`, `'info'`, `'notice'`, `'warning'`, `'error'`, `'critical'`, `'alert'`, `'emergency'`. |
| `HSPH_USER_MANAGEMENT_LOG_PATH` | `ABSPATH . 'wp-content/uploads/private/user-management.log'` | Absolute path to the JSON log file. The directory is created automatically on plugin activation. |
| `HSPH_TOOLKIT_ENABLE_GROUPER_MOCK` | `false` | Local dev only. Loads `dev/hsph-grouper-mock.php` to mock the Grouper Convenience API. **Never enable in production.** See [Local development](#local-development). |
| `HSPH_GROUPER_MOCK_EXTRA_EPPNS` | `array()` | Extra eppns to include in the mock membership response, in addition to those derived from usermeta. Only relevant when the mock is enabled. |

**Example:**

```php
define( 'HSPH_USER_MANAGEMENT_MAX_DELETIONS',   50 );
define( 'HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE', true );
define( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN',   false );
define( 'HSPH_USER_MANAGEMENT_CRON_ENABLED',      true );
define( 'HSPH_USER_MANAGEMENT_LOG_LEVEL',         Psr\Log\LogLevel::INFO );
define( 'HSPH_USER_MANAGEMENT_LOG_PATH',          ABSPATH . 'wp-content/uploads/private/user-management.log' );
```

## Installation

1. Define all [Required](#required) constants in `wp-config.php`, including `HSPH_USER_MANAGEMENT_PDS_KEY` which is needed for the next step.
2. Optionally override any [Optional](#optional) constants.
3. Run the `import_eppn` command once to populate `eppn` user meta for existing users, so they can be matched against Grouper on the first run:

```bash
wp hsph_user_management import_eppn
```

Use `--dry-run` first to preview what will be written. See the [Import eppn metadata](#import-eppn-metadata) section for details.

## Cron schedule

The cron job runs weekly at 1 AM server time via the `hsph_user_mgmt_cron` action hook. It respects `HSPH_USER_MANAGEMENT_CRON_ENABLED`, `HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN`, and `HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE`.

To manually unschedule it:

```php
HSPH_User_Management_Cron::unschedule_user_mgmt_cron();
```

## WP-CLI

### Import eppn metadata

Populates the `eppn` (`eduPersonPrincipalName`) user meta for all WordPress users by querying the PDS API based on their email addresses. Run this once after initial setup to ensure users can be matched against Grouper.

```bash
wp hsph_user_management import_eppn
```

Use `--dry-run` to preview changes without writing anything:

```bash
wp hsph_user_management import_eppn --dry-run
```

Requires `HSPH_USER_MANAGEMENT_PDS_KEY` to be defined.

## Users excluded from deletion

The following users are always skipped, regardless of Grouper membership.

**Hardcoded exclusions** (defined in the class constructor, cannot be changed via configuration):

| Login | Notes |
|---|---|
| Value of `HSPH_USER_MANAGEMENT_REASSIGN_TO` | Always protected so content reassignment works |
| `salesforce` | |
| `appsteam` | |
| `webappsteam` | |
| `hsph-author` | |

**Configurable exclusions** — add additional logins via `HSPH_USER_MANAGEMENT_DO_NOT_DELETE`:

| Constant | Default | Description |
|---|---|---|
| `HSPH_USER_MANAGEMENT_DO_NOT_DELETE` | `array()` | Array of `user_login` values that will never be deleted. Merged with the hardcoded list above. |

```php
define( 'HSPH_USER_MANAGEMENT_DO_NOT_DELETE', array( 'another-service-account' ) );
```

**Additional skip conditions** (applied at deletion time, not via the do-not-delete list):

- WordPress super admins are never deleted (multisite only)
- Users with no `eppn` whose account was registered within the last 60 days are skipped. Grouper authorization is matched by `eppn`, but `eppn` user meta isn't populated until a user's first login, so newly registered users would otherwise be deleted as unauthorized before they ever log in.

## Local development

`dev/hsph-grouper-mock.php` mocks the Grouper Convenience API so the user-management sync can be exercised locally without real Grouper credentials or a network call. It intercepts requests made by `HSPH_User_Management_Grouper` via the `pre_http_request` filter and returns a mock membership payload.

Enable it by defining the following in your local `wp-config.php`:

```php
define( 'HSPH_TOOLKIT_ENABLE_GROUPER_MOCK', true );
```

**Never enable this in production.**

When enabled:

- Page 1 of the mock membership response returns every WordPress user's `eduPersonPrincipalName` usermeta value (so all existing users appear authorized), plus any eppns listed in `HSPH_GROUPER_MOCK_EXTRA_EPPNS`. Later pages return an empty membership array so pagination terminates.
- Any of the required Grouper constants (`HSPH_GROUPER_API_URL`, `HSPH_GROUPER_AUTH_GROUPS`, `HSPH_GROUPER_CONVENIENCE_API_KEY`, `HSPH_GROUPER_BASE_API_USERNAME`, `HSPH_GROUPER_BASE_API_PASSWORD`) that aren't already defined are given mock default values.

```php
define( 'HSPH_TOOLKIT_ENABLE_GROUPER_MOCK', true );
define( 'HSPH_GROUPER_MOCK_EXTRA_EPPNS', array( 'someone@harvard.edu' ) );
```

### Running the cron job on demand

Rather than waiting for the weekly schedule, trigger the `hsph_user_mgmt_cron` event directly with WP-CLI:

```bash
wp cron event run hsph_user_mgmt_cron
```

Then inspect `HSPH_USER_MANAGEMENT_LOG_PATH` (default `wp-content/uploads/private/user-management.log`) to see what the run did:

```bash
tail -f wp-content/uploads/private/user-management.log
```

Each line is a JSON log entry tagged with a session ID, so a run can be isolated with something like `grep '"session_id":"<id>"' user-management.log`. See [Logging](#logging) for details on the log format.

## External APIs

| API | Base URL |
|---|---|
| Grouper Convenience API v2 | `https://go.apis.huit.harvard.edu/ats/grouper-convenience/v2/` |
| Person Data Service (PDS) v3 | `https://go.prod.apis.huit.harvard.edu/ats/person/v3/search/` |

The Grouper client throttles requests to one per 250 ms. The PDS client throttles to one per 500 ms and batches email lookups in chunks of 200.

## Logging

Each session is assigned a unique ID. All events are written as newline-delimited JSON to `HSPH_USER_MANAGEMENT_LOG_PATH`. Timestamps use the `America/New_York` timezone.

Log entries include the session ID, log level, message, and any relevant context (user login, eppn, exception details, etc.), making it straightforward to `grep` for a specific session or user.

## File structure

```
inc/user-management/
├── hsph-user-management.php                      Main plugin file; defines constants and bootstraps the feature
├── dev/
│   └── hsph-grouper-mock.php                     Local dev mock of the Grouper Convenience API. See Local development
└── inc/
    ├── class-hsph-user-management.php            Core deletion and authorization logic
    ├── class-hsph-user-management-cron.php       Cron scheduling and handler
    ├── class-hsph-user-management-grouper.php    Grouper API client
    ├── class-hsph-user-management-pds.php        PDS API client
    ├── class-hsph-user-management-logger.php     Structured JSON logger
    ├── class-hsph-user-management-cli.php        WP-CLI commands
    └── class-hsph-user-management-exception.php  Custom exception class
```
