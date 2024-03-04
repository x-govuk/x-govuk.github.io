---
title: Ideas for digital public works
description: Some thoughts on digital platforms and services that would be helpful for cross-government teams.
date: 2024-03-01
author:
  name: Frankie Roberto
  url: https://github.com/frankieroberto
image:
  src: /assets/posts/digital-public-works-ideas/illustration.png
  alt: GOV.UK crown icon sat on a background of colourful interconnecting shapes.
  opengraphImage: true
---

A recent blog post from dxw suggests that [there needs to be more support for digital public works](https://www.dxw.com/2024/01/there-needs-to-be-more-support-for-digital-public-works/), described as platforms and tools which work across government to make it easier and faster to build services.

I’m also big supporter of these. This unofficial X-GOVUK community is one way to support cross-government collaboration and tools, but many digital public works would need full-time teams to support them.

There’s lots to be thankful for. The [platforms developed by the Government Digital Service](https://www.gov.uk/service-toolkit#platforms-and-tools) – Notify, Pay, Forms and One Login – are all super useful.

Unfortunately there doesn’t currently seem to be an easy way for government departments working on services to spot other opportunities for common platforms and to turn these into funded cross-government teams and services.

However, were this to be possible, I do have a list of ideas for what these services could be.

## The ideas

### 1. Analytics

There are plenty of existing commercial and open source tools for this, so I’m not suggesting rebuilding those, but instead picking one and building a service on top of it.

The team would do the hard work of navigating the trade-offs between privacy, security and usability to give teams the design patterns and technical implementation for collecting consent and then data.

They might also build a simple web service to help teams view and understand the most important metrics, with comparisons across services.

### 2. Address lookup

The [public sector geospatial agreement](https://www.ordnancesurvey.co.uk/customers/public-sector/public-sector-geospatial-agreement) means that all public sector services should have access to high quality databases of UK addresses. However that doesn’t mean they are easy to integrate with, and some services still end up using Google or other commercial services.

A central digital team could help by maintaining an API, design patterns and code to make it super easy for teams to let users lookup and select addresses from postcodes.

### 3. Hosting

This might have been tried once before, with [PaaS then being decommissioned](https://gds.blog.gov.uk/2022/07/12/why-weve-decided-to-decommission-gov-uk-paas-platform-as-a-service/), but it’s still a good idea.

A rebooted service could be simpler but more opinionated, with the benefit of taking care of more of the low-level issues like operating systems, backups, monitoring and scaling.

It could also support easy hosting of prototypes.

### 4. Certifications

There are lots of services where the outcome is that the user receives a certificate or qualification to do something, whether that’s teaching children in schools or working on gas boilers.

Currently, each of these services needs to devise their own way for users to be able to prove or check these certifications.

A central service could allow users to collect all their certifications on a single account and selectively share these with others, either via a code or some other mechanism.

### 5. Registers

Unlike the previous version, this could be a platform for the many services which need to maintain public information such as registered landlords, childminders or building inspectors.

There would be tools for organisations to maintain the data, as well as ways for the public to browse and search it.

Large-scale registers, such the company register, would still need their own bespoke service, but for small and medium registers a platform would allow these to be built far more quickly and easily.

### 6. Monthly payments

We have GOV.UK Pay for one-off and recurring payments. A possible future extension of this might be users having a single monthly payment to government which includes all the services or licences they currently subscribe to.

This might make it easier for more services to switch from charging a upfront payment every year or so, allowing users to spread the cost and avoid forgetting to renew.

### 7. Statistics and data publishing

The Office for National Statistics (ONS) has a whole platform for this, but central government also publish a lot of official stats separately on GOV.UK. Currently these are most published as Excel files, PDFs or in other file formats.

Several departments have looked into building platforms for publishing statistics in a more usable and accessible way, and a shared service could be helpful.

It might make sense for this to start by focusing on statistics which are published monthly or quarterly and looking at ways to improve the automation of these.

### 8. Consultations

Whilst not directly connected to digital services, all government departments and agencies run consultations on proposed policies. The GOV.UK platform lets organisations publish documents for consultation, but they usually use commercial third parties for the consultation itself, where the public can answer questions or upload evidence.

A central service for running consultations might not only save organisations money, but also help them to run more effective consultations leading to better policy outcomes.

The platform could also make it easier for the public to be discover or be notified about consultations that might affect them, and to find out about the outcomes of consultations they’ve contributed to.

## Closing thoughts

These are just my ideas, based on the work and conversations I’ve been part of.

I’m interested in what your ideas might be - and whether there could be a way for teams to share these ideas and collaboratively explore whether some of them have the potential to become shared services.

---

<small>The background pattern in this post’s illustration was created using [Fractalpuzzlejs](https://github.com/proceduraljigsaw/Fractalpuzzlejs).</small>
