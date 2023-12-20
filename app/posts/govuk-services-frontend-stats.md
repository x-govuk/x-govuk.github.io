---
title: Measuring how government services are using GOV.UK Frontend
description: How I wrote a script to detect which versions of GOV.UK Frontend different government services are using
date: 2023-12-20
author:
  name: Frankie Roberto
  url: https://github.com/frankieroberto
---

To celebrate the release of [GOV.UK Frontend version 5](https://github.com/alphagov/govuk-frontend/releases/tag/v5.0.0), as a fun end-of-year project, I’ve written a script to report which version of GOV.UK Frontend different government services are currently using.

[Using common patterns and components](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns) helps users to have a more consistent experience as they move between different services, and is part of the service standard. GOV.UK Frontend helps service teams achieve this.

However, maintaining and upgrading GOV.UK Frontend across hundreds of government services is no small feat!

The script I wrote checks the version of GOV.UK Frontend specified in the `package.json` file of as many government services as possible. It can do this because many services [make their source code open](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open) by publishing it to GitHub.

By scheduling a daily run of the script using GitHub actions, the list can be kept up to date, and the results are published on GitHub: 

[GOV.UK services: govuk-frontend version status](https://github.com/x-govuk/govuk-services-frontend-stats)

At the time of publishing, 6 services have already upgraded to GOV.UK Frontend version 5.

Well done to:

* Apply for legal aid
* Check if your client qualifies for legal aid
* GOV.UK Design System
* GOV.UK Forms
* GOV.UK Platform as a Service
* Product safety database

If your service isn’t included in the full list, you can add it by [contributing to the X-GOVUK services list](https://govuk-digital-services.herokuapp.com/contribute).
