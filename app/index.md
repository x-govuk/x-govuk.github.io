---
layout: product
homepage: true
title: Welcome to X-GOVUK
description: A community-maintained collection of resources which are useful for working on GOV.UK services.
---

{% include "../app/includes/shared_projects.njk" %}

{% include "../app/includes/posts.njk" %}

<hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">

<h2 class="govuk-heading-l" id="resources">Resources</h2>

<div class="govuk-grid-row">
<div class="govuk-grid-column-one-half-from-desktop govuk-!-margin-bottom-4">

### Design

#### Design systems, patterns and components

- [GOV.UK Design System](https://design-system.service.gov.uk)
- [Digital Land Design System](https://digital-land.github.io/design-system/)
- [Digital Scotland Design System](https://designsystem.gov.scot)
- [DWP Design System](https://design-system.dwp.gov.uk/index)
- [GOV.WALES components](https://gov.wales/govwales-components)
- [HM Land Registry Design System](https://hmlr-design-system.herokuapp.com)
- [HMRC Design Patterns](https://design.tax.service.gov.uk/hmrc-design-patterns/)
- [Home Office Design System](https://design.homeoffice.gov.uk)
- [Ministry of Justice Pattern Library](https://design-patterns.service.justice.gov.uk)
- [MOD.UK Design System](https://design-system.service.mod.gov.uk)
- [NHS Design System](https://service-manual.nhs.uk/design-system)
- [NICE Design System](https://design-system.nice.org.uk)
- [Office for National Statistics Design System](https://ons-design-system.netlify.app)
- [Transport for West Midlands Design System](https://designsystem.tfwm.org.uk)
- [Hackney Design System](https://design-system.hackney.gov.uk)
- [Croydon design and content guidelines](https://www.croydon.gov.uk/design-and-content-guidelines)
- [Bristol Design System](https://design.bristol.gov.uk/)
- [BATHNES Digital Toolkit](https://style.bathnes.gov.uk/)
- [Maidstone Design System](https://digitalservices.maidstone.gov.uk/about-us/design-system)
- [Essex County Council's design and patterns library](https://www.essex.gov.uk/essex-county-councils-design-and-patterns-library)

#### Other design resources

- [Accessibility Personas](https://alphagov.github.io/accessibility-personas/)
- [Department for Education Design Manual](https://design.education.gov.uk)
- [Statistics on usage of `govuk-frontend` components](https://github.com/x-govuk/govuk-frontend-component-stats)

### User research

- [Department for Education User Research manual](https://user-research.education.gov.uk)
- [Local government user research library](https://research.localgov.digital/)

</div>
<div class="govuk-grid-column-one-half-from-desktop govuk-!-margin-bottom-4">

### Content design

- [Government Digital Service style guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style)
- [Department for Education style guide](https://design.education.gov.uk/content-design/style-guide/)
- [GOV.WALES style guide](https://gov.wales/govwales-style-guide)
- [HMRC content style guide](https://design.tax.service.gov.uk/hmrc-content-style-guide/)
- [Home Office style guide](https://design.homeoffice.gov.uk/content-style-guide)
- [NHS content style guide](https://service-manual.nhs.uk/content)

### Prototyping

- [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/)
- [GOV.UK Prototype Wizard](https://github.com/x-govuk/govuk-prototype-wizard)
- [Navigation radios extension](https://github.com/x-govuk/prototype-navigation-radios)
- [GOV.UK Figma library](https://www.figma.com/file/NWuFffKvPQhl3aJ9nKU0p3/GOV.UK-Design-System?node-id=0%3A1)

### Frontend

- [GOV.UK Frontend](https://frontend.design-system.service.gov.uk)
- [GOV.UK Frontend Flask](https://github.com/LandRegistry/govuk-frontend-flask)
- [GOV.UK Frontend Jinja](https://github.com/LandRegistry/govuk-frontend-jinja)
- [GOV.UK Form Builder for Ruby on Rails](https://github.com/x-govuk/govuk-formbuilder)
- [GOV.UK Components for Ruby on Rails](https://github.com/x-govuk/govuk-components)
- [GOV.UK Design System for ASP.NET MVC and Umbraco](https://github.com/thepensionsregulator/govuk-frontend-aspnetcore-extensions)
- [GOV.UK Vue](https://govukvue.org)
- [Markdown extension for Marked](https://github.com/x-govuk/govuk-markdown)
- [Markdown plugin for markdown-it](https://github.com/x-govuk/markdown-it-govuk)
- [Twirl](https://github.com/hmrc/play-frontend-hmrc)
- [WTForms](https://github.com/LandRegistry/govuk-frontend-wtf)

### Analysis

- [Quarto templates](https://github.com/DataS-DHSC/dhsc_quarto_template)

### Product management

- [Product management learning list](https://docs.google.com/spreadsheets/d/15bimOfA5EYpvfC3UbU8MUV-qUjhSKdcrukHisQqNzhU/edit#gid=0)
- [Learn by doing (for associate and mid-level product managers)](https://github.com/alphagov/Product-Managers-Learn-By-Doing)
- [Learn by doing (for senior and lead product managers)](https://github.com/alphagov/Product-Leadership-skills)
- [Join the product manager buddy scheme](https://docs.google.com/forms/d/e/1FAIpQLSf4RMKfyzMi0ZlASGhmJMDaQHDNI4h0g2XYubv0o9hrYH77qw/viewform)
- Things to do as a new product manager in your first 30 days ([Trello board](https://trello.com/b/UjAn4OBa) or [Notion board](https://www.notion.so/stevenjmesser/216be86b0fe04ff8b0fbe61e0928178e?v=2368cfc6cf734d8890fb09aa59225423))

</div>
</div>

<p class="govuk-body-s govuk-!-margin-bottom-8"><a class="govuk-link" href="{{ pkg.repository.url | replace("io.git", "io") }}/blob/main/{{ page.inputPath | replace("./", "") }}">Edit this list on GitHub</a></p>
