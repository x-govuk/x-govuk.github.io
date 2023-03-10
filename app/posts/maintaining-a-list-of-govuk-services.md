---
title: Maintaining a list of GOV.UK services
description: TODO
date: 2023-03-07
tags: post
layout: post
author:
  name: Frankie Roberto
  url: https://github.com/frankieroberto
---

Back in 2013, after the successful launch of GOV.UK, the Government Digital Service [began looking at services](https://gds.blog.gov.uk/2013/07/17/the-pivot-from-publishing-to-transactions/), starting with a list of 25 which would be ‘exemplars’.

The distinction between services and the main GOV.UK website itself is tricky to define and has gotten blurrier over time. As I understand it, the original decision was to move all static content onto the single government website (itself a huge task), but to keep services requiring users to submit information separate.

Since then, the number of GOV.UK branded digital services has grown. There are now services from every major department and agency, covering everything from [registering a design](https://www.gov.uk/register-a-design/send-your-application) to [checking MOT history](https://www.gov.uk/check-mot-history).

How many are there exactly though? The truth is, no one can answer that question. Whilst there are some central controls over the funding and launch of services, UK government is distributed across so many separate organisations that it’s impossible to keep track of them all.

The Government Digital Service (GDS) used to maintain a ‘register of services on a *.service.gov.uk domain’, but this was closed when the [registers service was retired](https://dataingovernment.blog.gov.uk/2021/02/18/new-guidance-for-publishing-data/) in 2021.

## A community-maintained list

To fill this gap, I’ve been helping to run a [community-maintained list of government services](https://govuk-digital-services.herokuapp.com). There’s now over 400 services listed.

Why do this? Lots of people have found it useful. Designers like being able to find other services to get inspiration from. Product managers working on platforms like GOV.UK Pay and GOV.UK One Login use it to work out which services might use their platform. Researchers from outside government have even used it as a starting point for academic work.

Maintaining this list is hard. So far I’ve used numerous sources, including:

* published [service standard reports](https://www.gov.uk/service-standard-reports)
* ‘start pages’ on GOV.UK
* source code published on department GitHub accounts
* the list of [75 services prioritised in the government’s 2022 to 2025 roadmap](https://www.gov.uk/government/publications/roadmap-for-digital-and-data-2022-to-2025/transforming-for-a-digital-future-2022-to-2025-roadmap-for-digital-and-data)

## Contributing to the list

Individuals across government have been in touch to point out missing services, corrections, or where a service has been retired. So if you spot anything, please [contribute to the list](https://govuk-digital-services.herokuapp.com/contribute).

There’s no strict definition of a government digital service, but if it’s run by the UK government or its agencies and is GOV.UK branded (at least to some degree), then it counts. Usefulness of the list beats precision in its scope.

Each service can include metadata including a brief description, the organisation that runs it, a category, what stage the service is in, and links to the service, its start page on GOV.UK, source code and any service standard assessments.

Finally, I’ve also added a few fun bonus features which use the data:

* the list of services [organised by the verb they start with](https://govuk-digital-services.herokuapp.com/verbs)
* a page containing [screenshots of the first page for each service](https://govuk-digital-services.herokuapp.com/screenshots)
* a [list of the domains and subdomains](https://govuk-digital-services.herokuapp.com/domains) the services run on
* the [list of the original 25 exemplars](https://govuk-digital-services.herokuapp.com/original-25-exemplars)

Let us know if you find it useful in any way, or have any suggestions for improvements.
