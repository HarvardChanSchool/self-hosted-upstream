# HSPH Self-Hosted Upstream

This repository should be used as the upstream repository for compliant self-hosted sites running in the HSPH Pantheon environment. It contains plugins and themes officially supported by HSPH, default configurations for Composer and other internal tools, and deployment Actions.

## Monthly maintenance tasks

[Last updated: 2024-10-03]

This is an outline of tasks that should be performed by maintainers during monthly maintenance.

### Update self-hosted-upstream

1. All work must take place on the `master` branch of self-hosted upstream:

    ```
    git checkout master
    git pull origin master
    ```

2. Fetch Pantheon upstream:

    ```
    git fetch pantheon-wordpress
    git merge pantheon-wordpress/master
    ```

3. Check wordpress.org plugins

    ```
    wp plugin list --update=available
    # Upgrade each one unless there's a reason not to
    wp gh plugin upgrade <plugin> # https://github.com/boonebgorges/wp-cli-git-helper
    ```

4. Copy latest versions of commercial plugins from wwwhsph repo:

    - advanced-custom-fields-pro
    - gravityforms

5. Wait a moment - Before pulling content to site-specific repos, wait for the GitHub build action to run.

### Update site-specific repos

1. All work must take place on the `main` branch:

    ```
    git checkout main
    git pull origin main
    ```

2. Sync from production site:

    ```
    terminus rsync <site>.live:files/ wp-content/uploads/
    terminus local:getLiveDB --overwrite <site>.live
    gunzip ~/pantheon-local-copies/db/<site>-db.tgz
    wp db import ~/pantheon-local-copies/db/<site>-db.tar # Pantheon gives it the wrong extension
    wp search-replace <production-url> <local-url>
    ```

    Now verify local site

3. Fetch and merge from self-hosted-upstream:

    ```
    git fetch upstream
    git merge upstream/build # Important! Always pull from the build branch
    # Now verify local site
    ```

4. Check for wordpress.org plugin updates:

    ```
    wp plugin list --update=available
    # Upgrade each one unless there's a reason not to
    wp gh plugin upgrade <plugin>
    ```

5. Check with team for updates to premium and HSPH plugins.

6. Verify site locally, checking site-specific URLs.

7. Make sure everything is pushed to GitHub, and wait for the build Action to run.

8. Create release. Use naming convention vx.y.z, where:
  - x is only bumped for major changes
  - y is bumped for monthly maintenance releases
  - z is bumped for unscheduled bugfixes

  Use 'September 2024 maintenance release' format for release description.

9. Wait for release action to complete, then verify production site.

### Site list for monthly maintenance

1. CHDS

Web: https://chds.hsph.harvard.edu/

GitHub: https://github.com/HarvardChanSchool/center-for-health-decision-science

Pantheon: https://dashboard.pantheon.io/sites/4850d5e8-9a0a-42ce-b919-30b22d5704ec

Verification URLs:
- https://chds.hsph.harvard.edu/
- https://chds.hsph.harvard.edu/approaches/
- https://chds.hsph.harvard.edu/approaches/practice-and-policy/
- https://chds.hsph.harvard.edu/media-hub/people-and-perspectives/
- https://chds.hsph.harvard.edu/two-doctoral-students-join-chds/

boone.cool/hsph/center-for-health-decision-science versions:
- http://boone.cool/hsph/center-for-health-decision-science/
- http://boone.cool/hsph/center-for-health-decision-science/approaches/
- http://boone.cool/hsph/center-for-health-decision-science/approaches/practice-and-policy/
- http://boone.cool/hsph/center-for-health-decision-science/media-hub/people-and-perspectives/
- http://boone.cool/hsph/center-for-health-decision-science/two-doctoral-students-join-chds/

On this last URL, note that Vimeo will not permit promo-block__video embeds on local domains.

2. Mindfulness

Web: https://www.mindfulpublichealth.org/

GitHub: https://github.com/HarvardChanSchool/center-for-mindfulness-in-public-health

Pantheon: https://dashboard.pantheon.io/sites/9558ba79-7451-404d-87ea-23f30299c214

Verification URLs:
- https://www.mindfulpublichealth.org/
- https://www.mindfulpublichealth.org/home-en/our-research/
- https://www.mindfulpublichealth.org/home-en/news-events/
- https://www.mindfulpublichealth.org/news-events/summer-2024-mindfulness-sessions/

boone.cool/hsph/center-for-mindfulness-in-public-health versions:
- http://boone.cool/hsph/center-for-mindfulness-in-public-health/
- http://boone.cool/hsph/center-for-mindfulness-in-public-health/home-en/our-research/
- http://boone.cool/hsph/center-for-mindfulness-in-public-health/home-en/news-events/
- http://boone.cool/hsph/center-for-mindfulness-in-public-health/news-events/summer-2024-mindfulness-sessions/

3. NPLI

Web: https://npli.hsph.harvard.edu/

GitHub: https://github.com/HarvardChanSchool/national-preparedness-leadership-initiative

Pantheon: https://dashboard.pantheon.io/sites/07752cca-a62c-439b-8bdf-a3439f86d166#dev/code

Verification URLs:
- https://npli.hsph.harvard.edu/
- https://npli.hsph.harvard.edu/our-programs/
- https://npli.hsph.harvard.edu/apply/
- https://npli.hsph.harvard.edu/news-insights/
- https://npli.hsph.harvard.edu/news-insights/implementing-large-language-models-in-healthcare/

boone.cool/hsph/national-preparedness-leadership-initiative versions:
- http://boone.cool/hsph/national-preparedness-leadership-initiative/
- http://boone.cool/hsph/national-preparedness-leadership-initiative/our-programs/
- http://boone.cool/hsph/national-preparedness-leadership-initiative/apply/
- http://boone.cool/hsph/national-preparedness-leadership-initiative/news-insights/
- http://boone.cool/hsph/national-preparedness-leadership-initiative/news-insights/implementing-large-language-models-in-healthcare/


4. Nutrition Source

Web: https://nutritionsource.hsph.harvard.edu/

GitHub: https://github.com/HarvardChanSchool/the-nutrition-source

Pantheon: https://dashboard.pantheon.io/sites/bac3c981-cc7f-4c97-924d-bf1d29325b57

Verification URLs:
- https://nutritionsource.hsph.harvard.edu/
- https://nutritionsource.hsph.harvard.edu/nutrition-news/
- https://nutritionsource.hsph.harvard.edu/2024/01/02/healthy-living-guide-2023-2024/
- https://nutritionsource.hsph.harvard.edu/healthy-drinks/
- https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/

boone.cool/hsph/the-nutrition-source versions:
- http://boone.cool/hsph/the-nutrition-source/
- http://boone.cool/hsph/the-nutrition-source/nutrition-news/
- http://boone.cool/hsph/the-nutrition-source/2024/01/02/healthy-living-guide-2023-2024/
- http://boone.cool/hsph/the-nutrition-source/healthy-drinks/
- http://boone.cool/hsph/the-nutrition-source/healthy-eating-plate/
