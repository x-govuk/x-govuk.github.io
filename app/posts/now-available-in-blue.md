---
title: Now available in blue
date: 2025-05-25
description: As teams at GDS prepare to launch a refreshed brand for GOV.UK on 25 June, so the X-GOVUK community has been updating its projects in preparation for this go-live date.
author:
  name: Paul Lloyd
  url: https://github.com/paulrobertlloyd
image:
  src: /assets/posts/now-available-in-blue/illustration.png
  alt: A cyan blue dot surrounded by radiating, fading bands of the same colour.
  opengraphImage: true
---

As teams at GDS [prepare to launch a refreshed brand for GOV.UK on 25 June](https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0), so the X-GOVUK community has been updating its projects in preparation for this go-live date.

As a reminder, X-GOVUK is an unofficial community-maintained space for people working on government digital services in the UK. Since [formally launching](/posts/introduction/) 3 years ago, it has become home to a number of different ports of GOV.UK Frontend, with [James Gunn](https://github.com/gunndabad)’s [ASP.NET Core integration](https://github.com/x-govuk/govuk-frontend-aspnetcore) joining us earlier this month.

Besides updating projects to support the refreshed brand, other updates have been made across a range of projects, so now seems like a good time to recap some recent improvements.

## GOV.UK Eleventy Plugin

The latest [v7.0 release to this plugin for Eleventy](https://x-govuk.github.io/govuk-eleventy-plugin/upgrading/6-to-7/) addresses a number of long standing issues.

Thanks to the [virtual templates feature](https://www.11ty.dev/docs/virtual-templates/) introduced in Eleventy 3.0, default templates provided by the plugin can now be replaced by creating a layout with the same name in your layouts directory.

There are also fixes to generated RSS feeds. Featured post images are now included by default and source paths for embedded media now resolve correctly.

Thanks to Sass modules, you can now update the design of a site by calling `govuk-frontend` with the `@use` syntax:

```scss
$_font-family: system-ui, sans-serif;
@use "pkg:govuk-frontend/dist/govuk" with (
  $govuk-font-family: $_font-family,
  $govuk-brand-colour: #8822aa,
  $govuk-link-colour: #660088,
  $govuk-link-hover-colour: #440066,
  $govuk-link-visited-colour: #333366,
  $govuk-page-width: 1100px
);
```

Generated JavaScript and CSS files are now minimised, and all options for the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/) are now supported.

And of course, support is provided for the GOV.UK rebrand. Setting the `rebrand` option to `true` will render templates with the refreshed design. This option is set to `false` by default; a later minor update will change this default to `true` before the option is removed.

## GOV.UK Prototype Components

Alongside some under-the-hood updates (moving the project to ES and Sass modules), v4.0 of [this plugin for the GOV.UK Prototype Kit](https://x-govuk.github.io/govuk-prototype-components/) removes the deprecated Primary navigation component. You should use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/) to help users navigate your service instead.

## GOV.UK Prototype Filters

Recent updates to the [filters provided by this plugin](https://x-govuk.github.io/govuk-prototype-filters/) for the GOV.UK Prototype Kit have been especially fun.

Turns out JavaScript runtimes have differing opinions around date formatting. How is September abbreviated (‘Sept’ or ‘Sep’)? Should a comma be included in a date that includes a time?

These inconsistencies have been resolved, alongside the ability to include the day of the week in formatted dates and format a person’s age according to the [NHS.UK content guide](https://service-manual.nhs.uk/content/inclusive-content/age).

## GOV.UK Components and Form Builder for Ruby on Rails

[Peter Yates](https://github.com/peteryates) continues his diligent stewardship of the Ruby Gems that provide [components for use with Rails’ ViewComponent framework](https://govuk-components.x-govuk.org/) and [form components for Rails’ `FormBuilder`](https://govuk-form-builder.x-govuk.org/).

Updates to both gems in support of the rebrand will be released on 25 June.

## GOV.UK Frontend Statistics

[Frankie Roberto](https://github.com/frankieroberto)’s project attempts to track [adoption of the latest releases to GOV.UK Frontend](https://x-govuk.github.io/govuk-services-frontend-stats/).

Originally created to track adoption of a release that introduced the Tudor crown, the report has been updated to show which services are ready to support the rebrand.

The report isn’t exhaustive (it doesn’t detect uses of `govuk-frontend` in some types of repository or within closed source projects), but it serves as a good sense check.

## X-GOVUK rebrand

Finally, with all this talk of rebrands, X-GOVUK has updated its own brand to align with changes to GOV.UK.

Our new logotype features a unique graphic device, a perfectly symmetrical oval that sits between ‘X’ and ‘GOVUK’. This symbolises the synergy between our collaborative cross-government community and the digital centre of government, with its neon blue colour expressing the energy and passion we put into our projects. It’s also just a cyan blue circle.

Joking aside, apart from updating our project documentation to use the rebranded components, the service navigation component allows us to better demonstrate the relationship between X-GOVUK and the projects that exist under that banner.

This work was made much easier thanks to the excellent work done by the teams working on the GOV.UK Design System. As ever, our projects stand on the shoulders of giants.
