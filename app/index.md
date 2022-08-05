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

* [GOV.UK Design System](https://design-system.service.gov.uk)
* [CJS Crime Programme design patterns](https://cjscpp-design-patterns.herokuapp.com)
* [Digital Land design system](https://digital-land.github.io/design-system/)
* [Digital Scotland Design System](https://designsystem.gov.scot)
* [DWP Design System](https://design-system.dwp.gov.uk/index)
* [GOV.WALES components](https://gov.wales/govwales-components)
* [HM Land Registry Design System](https://hmlr-design-system.herokuapp.com)
* [HMCTS Design System](https://hmcts-design-system.herokuapp.com)
* [HMRC Design Patterns](https://design.tax.service.gov.uk/hmrc-design-patterns/)
* [Home Office Design System](https://design.homeoffice.gov.uk)
* [Ministry of Justice Pattern Library](https://design-patterns.service.justice.gov.uk)
* [MOD.UK Design System](https://design-system.digital.mod.uk)
* [NHS Design System](https://service-manual.nhs.uk/design-system)
* [NICE Design System](https://design-system.nice.org.uk)
* [Office for National Statistics Design System](https://ons-design-system.netlify.app)
* [Transport for West Midlands Design System](https://designsystem.tfwm.org.uk)
* [Hackney Design System](https://design-system.hackney.gov.uk)
* [Croydon design and content guidelines](https://www.croydon.gov.uk/design-and-content-guidelines)

#### Other design resources

* [GOV.UK Design histories](https://github.com/x-govuk/govuk-design-history)
* [Statistics on usage of `govuk-frontend` components](https://github.com/x-govuk/govuk-frontend-component-stats)

### User research

* [Local government user research library](https://research.localgov.digital/)

</div>
<div class="govuk-grid-column-one-half-from-desktop govuk-!-margin-bottom-4">

### Content design

* [Government Digital Service style guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style)
* [Department for Education glossary](https://dfe-glossary.herokuapp.com)
* [GOV.WALES style guide](https://gov.wales/govwales-style-guide)
* [HMRC content style guide](https://design.tax.service.gov.uk/hmrc-content-style-guide/)
* [NHS style guide](https://service-manual.nhs.uk/content)

### Prototyping

* [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs)
* [Navigation radios extension](https://github.com/x-govuk/prototype-navigation-radios)
* [Wizard extension](https://github.com/x-govuk/govuk-prototype-wizard)
* [GOV.UK Figma library](https://www.figma.com/file/NWuFffKvPQhl3aJ9nKU0p3/GOV.UK-Design-System?node-id=0%3A1)

### Front-end

* [Flask](https://github.com/LandRegistry/govuk-frontend-flask)
* [Jinja](https://github.com/LandRegistry/govuk-frontend-jinja)
* [Markdown](https://github.com/x-govuk/govuk-markdown)
* [R Markdown](https://github.com/ukgovdatascience/govdown)
* [React](https://github.com/surevine/govuk-react-jsx)
* [Ruby on Rails asset pipeline](https://github.com/dxw/dxw_govuk_frontend_rails)
* [Ruby on Rails components](https://github.com/DFE-Digital/govuk-components)
* [Ruby on Rails formbuilder](https://github.com/DFE-Digital/govuk-formbuilder)
* [Twirl](https://github.com/hmrc/play-frontend-hmrc)
* [WTForms](https://github.com/LandRegistry/govuk-frontend-wtf)

</div>
</div>

<p class="govuk-body-s govuk-!-margin-bottom-8"><a class="govuk-link" href="{{ pkg.repository.url | replace("io.git", "io") }}/blob/main/{{ page.inputPath | replace("./", "") }}">Edit this list on GitHub</a></p>
