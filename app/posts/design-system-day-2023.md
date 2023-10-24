---
title: Notes from Design System Day 2023
description: TODO
date: 2023-09-23
author:
  name: Frankie Roberto
  url: https://github.com/frankieroberto
image:
  src: /assets/posts/design-system-day-2023/dsday2023.png
  alt: Illustration with the words 'Notes from Design System Day 2023'
  opengraphImage: true
---

This month I was thrilled to take part in [Design System Day 2023](https://design-system.service.gov.uk/community/design-system-day-2023/), a 2-day conference run by the GOV.UK Design System team to collaborate and share knowledge about design systems.

Here are my notes from the conference, as well as an outline of the talk I gave.

## Day 1

The first day was held in-person at Our Dynamic Earth in Edinburgh, and included sessions on research operations, the [Scottish Government Digital Design System](https://designsystem.gov.scot) and trauma-informed research. I also took part in a panel discussion on how design systems manage contributions, where we discussed how and why to encourage teams using design systems to contribute back.

The final session of the day was a keynote by Tash Willcocks called ‘Design systems don’t solve problems, people do’ – love the Goldie Lookin Chain reference! – where Tash implored design system teams to continually “socialise” their design systems by being in the spaces where teams using the design hang out, and making the effort to understand the reasons why a design might not be being adopted.

The videos from each of these sessions will be released online soon.

## Day 2

The second day was held as a multi-track online conference.

I enjoyed attending a fireside chat with [Ethan Marcotte](https://ethanmarcotte.com), which touched upon the history of responsive design, as well as the many different forms of design systems and brand guidelines. 

In the middle of the day, Vicky Teinaki gave a fantastic keynote titled [Design pattern histories](https://www.vickyteinaki.com/blog/design-pattern-histories/), where she delved deep into the history of now-familiar design patterns like pull-to-refresh, news feeds and task lists, as well ideas now discouraged like [external link icons](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/) and [carousels](https://shouldiuseacarousel.com).

Her conclusion was that it pays to understand the history of where a pattern came from, to keep testing and sharing your findings, and to remember that best practice can and will continue to change!

## Contributing to design systems

The talk I gave was titled ‘Design Systems: the contributor perspective’.

There have been lots of talks in the past from design system teams about contribution models (including in Amy Hupe’s [keynote from last year](https://www.youtube.com/watch?v=25XuvRqbLEM)) – so I thought I’d give the reverse point of view as someone who’s contributed to design systems but never run one.

I started by giving a run through of the different contributions I have made to the GOV.UK Design System.

The first, back in 2019, was the [accordion component](https://design-system.service.gov.uk/components/accordion/). The context to this is that I didn’t design the accordion at all – it was already in widespread use on GOV.UK on topic pages and in the [Service Manual](https://www.gov.uk/service-manual). The service I was working on at the time had re-used it, and the main thing I had done was re-writing it to not require jQuery. Lots of other teams were also wanting to use the component, and so contributing it to the then-new Design System seemed like a helpful thing to do.

The contribution process was a great learning experience for me. The [pull request I created](https://github.com/alphagov/govuk-frontend/pull/958) ended up containing 50 commits and took 5 months to get merged, but along the way I learnt lots about the conventions and coding style of `govuk-frontend`, as well as the intricacies of the javascript session storage API which is used to save the open or closed state of each accordion section.

The second contribution I worked on was a rare example of where contributing to a design pattern directly aligned with the aims of the service I was working on. The service was [Ethnicity facts and figures](https://www.ethnicity-facts-figures.service.gov.uk), and a significant issue the service faced is that the data about ethnicity collected by different government services was wildly inconsistent. We did [some research into the different patterns used](https://designnotes.blog.gov.uk/2019/01/29/researching-how-we-ask-users-about-their-ethnicity/), and then worked with the Office for National Statistics to design a more accessible pattern (using radios not dropdowns) which aligned with the national census. This design was later widened out by others to include further questions as part of the [equality information](https://design-system.service.gov.uk/patterns/equality-information/) pattern – a good example, I think, of a pattern which benefits from consistency across services, and which services are unlikely to spend significant amounts of time researching on their own.

Both of these were entirely new patterns or components, but contributions come in lots of different sizes, and so I also talked through 2 smaller contributions.

The first was an option for the checkboxes component, which lets you add [an option for ‘none’](https://design-system.service.gov.uk/components/checkboxes/#add-an-option-for-none), separated by an ‘or’ divider. This came from the observation in user research that users were sometimes uncomfortable leaving all checkbox options unticked, and so an explicit ‘none’ option was helpful, as well as also helping to catch where users accidentally left all options unchecked.

One consideration with this component is that wanted to make sure teams only used this new option appropriately, and we also wrote some guidance and [a blog post](https://designnotes.blog.gov.uk/2021/11/15/letting-users-tick-a-none-checkbox/) which suggested some alternatives that teams also consider, like a filter question.

The second small contribution was some new guidance on the [Date input](https://design-system.service.gov.uk/components/date-input/) to suggest that teams should accept dates where the month is written in words ('aug' or 'august') as well as as a number. This was prompted by data from my service showing common validation errors, which is a great source of research.

### Contributions from other people

As well as talking about my own contributions, I also wanted to give a shout out to others who have contributed to the wider government Design System ecosystem, including here on X-GOVUK.

Paul Lloyd has led 2 super useful plugins for the Prototype Kit. The first, [Prototype filters](https://x-govuk.github.io/govuk-prototype-filters/), is really useful if you are prototyping a service like a case management system which has a lot of data in it. The second, [Prototype components](https://x-govuk.github.io/govuk-prototype-components/), contains a selection of components which are widely used across services, but haven’t yet made their way into the GOV.UK Design System.

Peter Yates has led [GOV.UK Components for Ruby on Rails](https://govuk-components.netlify.app) and [Form Builder for Ruby on Rails](https://govuk-form-builder.netlify.app), 2 Ruby libraries which make it far easier for teams to implement the GOV.UK Design System within the Ruby on Rails framework. These are now depended upon by dozens of services across government departments, including by the new [GOV.UK Forms service](https://www.forms.service.gov.uk) being developed by GDS itself. This is a great example of a cross-government collaboration saving teams from duplicating effort, and I suggested that in future we could look to better integrate this implementation with the Design System itself, as a third option alongside HTML and Nunjucks.

I also mentioned the [header for services using GOV.UK One Login](https://github.com/alphagov/di-govuk-one-login-service-header), which is currently being developed outside of the Design System by a separate team, but which is equally open for contribution and feedback. This header, and the new service navigation design that comes with it, is likely to be one of the biggest changes to an existing GOV.UK design component, so I encourage all teams to engage with it early!

As was hopefully obvious from my talk, I see huge value in contributing to design systems, and encourage others to do so too.

However I’m also painfully aware of how much time and energy it can take up. The contributions I mentioned above took between 5 and 15 months to go live – mainly because I and others involved were working on them alongside our main role working on services.

### How do people feel about contributing?

Ultimately, I think the pay-off of helping to build a collective system which saves us all time is worth it. But I thought I’d ask some other contributors what they thought too.

When asked “Why do you contribute?”, I got a variety of answers:

* Wanting to help others
* A chance to work with other people across government
* Wanting to to make it better
* A peek behind the curtains to see how patterns and components are made
* To be able to point to something I’d contributed to  

The altruistic intent is clear though, as well as the development opportunities that contributing itself affords.

I also asked “What stops you contributing?”. Here’s a selection of answers:

* The effort involved
* Time. It can be a struggle juggling this with other work
* Feeling like I don’t know enough or I’m not ‘experienced’ enough to contribute
* Not all teams accommodate people working on things that aren't directly related to their service

This highlights that time and perceived experience are the main barriers.

Finally, I asked people to hypothesise what would encourage others to contribute. Here are their answers:

* A commitment to publishing
* Describing what is expected and what the process looks like
* Saying what the design system needs more help on
* Workshops – a great way to get people involved
* Make it clear you don’t have to be a designer
* Responsiveness is key

### Alternative contribution models

I also suggested a few ideas around alternative contribution models and processes, some of which are based upon experience from outside government:

* the central design system team can sometimes be structured as more of an internal agency, where they can be commissioned (with cross-charging) to develop new patterns or components
* organisations might encourage people to be temporarily seconded either into a central design system team, or out from a central team into service teams - encouraging more people to develop an understanding of both roles
* design system teams can take more of an active role in engaging with and monitoring the output of teams using their design, suggesting options, learning what the needs are and enforcing more consistency where appropriate
* the community around a design system can be given more ownership of it through a wider network of maintainers - this is more common in open source communities but was also true in the early days of the government design community which relied upon a wiki

The alternative models each come with their downsides, and might not be appropriate for your institution - but I think it’s worth considering the many and varied approaches of maintaining design systems in different contexts.
