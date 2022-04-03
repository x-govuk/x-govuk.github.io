---
title: Why I contribute to the GOV.UK Design System (and why you should too)
date: 2022-05-03
tags: post
layout: post
author:
  name: Frankie Roberto
  url: https://github.com/frankieroberto
---

Last week a new pattern was published in the GOV.UK Design System that helps users [confirm a phone number](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/) using a security code sent by text message.

I initiated this contribution almost two years ago when working on a service that was switching to using its own sign in system to avoid relying upon an off-the-shelf authentication service which was hard to maintain.

As the service was quite sensitive, we decided to require a text message confirmation code when signing in – sometimes known as two factor authentication.

The pattern of sending and requesting an SMS code is quite well established, used by many services in and out of government.

However we still had a bunch of detailed design questions. Things like:

* should we call it a security code, a verification code, or something else?
* how long should the codes be valid for?
* if a code doesn't arrive straight away and the user requests a new one, should we resend the same code or generate a new one?
* how many digits should the code contain?
* when first setting up an account, how we can we make sure the phone number is valid and can receive text messages without letting the user get stuck?

For each of these questions, we looked at what existing services like GOV.UK Notify and HMRC did, and spoke to some of their designers to try to understand the reasons behind the decision they’d taken. Being able to reach out to the wider government design community like this, through platforms like the cross-government Slack and Twitter, is super valuable.

There was also an existing thread on the GOV.UK Design System backlog for [identifying users](https://github.com/alphagov/govuk-design-system-backlog/issues/25), where designers and researchers had shared some screenshots and discussed the pattern. These [backlog threads](https://github.com/alphagov/govuk-design-system-backlog/issues) are another great resource, if sometimes hard to find.

When we had assimilated some of this existing work, plus made some design iterations of our own, we were ready to ship. And once the dust had settled, I realised that writing this all up might be useful for other designers in the same situation.

Contributing a [new pattern or component](https://design-system.service.gov.uk/community/propose-a-component-or-pattern/) to the GOV.UK Design System can be a daunting prospect. The designs that are included need to be useful for multiple services. There’s also a working group who review all new patterns and components, and the design system team themselves will also help to make sure the written content is consistent with their style guide and the other pages.

However this is all a process of continual improvement, making sure that the published page is as high quality and useful as possible. As a contributor it’s helpful to enter in a spirit of collaboration, remembering that the design system is the product of the work of a whole community.

Why do this? I do find it personally satisfying when a contribution I worked on makes its way onto the website. But the primary reason I contribute is because the GOV.UK Design System is so important and useful to my day-to-day work as a designer.

Every addition, amendment or clarification to the design system makes my work slightly easier, allowing me more time to focus on the problems unique to the service I’m working on. I see contributing back as part of the day job, even if the immediate pay-off isn’t quite so apparent.

For designers, researchers and developers working on government digital services, I’d encourage you to contribute too!

Contributing doesn’t always mean proposing a whole new component or pattern – it’s just as valuable to:

* ask questions
* say where you find some existing guidance confusing or ambiguous
* post screenshots of components and patterns used within your service or other services you’ve looked at
* share the results of any research or usability testing you’ve done

You can do this on the [discussions in the backlog](https://github.com/alphagov/govuk-design-system-backlog/issues) (requires a free GitHub account), on the [cross-government Slack](https://ukgovernmentdigital.slack.com/app_redirect?channel=govuk-design-system) or by [contacting the GOV.UK Design System team](https://design-system.service.gov.uk/get-in-touch/).

Your future self – and other designers, researchers and developers – will thank you!
