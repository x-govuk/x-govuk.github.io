---
title: Releasing the Rails libraries for version 5 of the GOV.UK Design System
description: Notes on how the Rails libraries for the GOV.UK Design System are developed and the work required to support version 5
date: 2023-12-29
author:
  name: Peter Yates
  url: https://github.com/peteryates
---

Version 5 of the GOV.UK Design System was released on December 8th 2023. Half an hour later, we released version 5 of the x-govuk [form builder](https://govuk-form-builder.netlify.app/) and [components](https://govuk-components.netlify.app/) libraries.

The short turnaround time might suggest it was a quick job, but work on the included features started in May and we've made some significant improvements since then.

For the uninitiated, the form builder and components libraries are implementations of the [GOV.UK Design System](https://design-system.service.gov.uk/) for [Ruby on Rails](https://rubyonrails.org/), one of the most popular web frameworks used across government.

Without these libraries, teams working on GOV.UK services would need to implement all the markup and behaviour described in the design system themselves. This would be huge a waste of effort.

Time spent on [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) is time not spent focussing on user needs.

## How it began

I joined the [School Experience](https://schoolexperience.education.gov.uk/) team in 2019 and it was my first role in a government department. Our first challenge was to work out how to build a multi-page form and I was surprised there wasn't already an easy way to do it - there wasn't even a [Simple Form](https://github.com/heartcombo/simple_form) config.

Despite only having worked in DfE Digital for a few weeks I'd seen how important collaboration was. I remember how refreshing it was that working collaboratively was the default, and that was reinforced by [point 13 of The GOV.UK Service Manual](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns).

> If you develop your own patterns or components, share them publicly so others can use them.

I'd found a gap. Something I thought should exist but didn't. Something I was certain others would find useful. Something I thought I could do.

I decided to have a go at building and sharing a form builder and spent my free time over the next month building it. I announced it [via a very nervous-sounding YouTube screencast](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns) and, thankfully, it was well received.

It was my first time building and publishing a library before, but having used plenty I had a good idea of what to prioritise if I wanted to make it useful for others:

### 1. Active development 

Unmaintained repositories are likely to become a burden, and might even hold you back from upgrading your application. It's a huge red flag.

### 2. A responsive maintainer

Knowing there's someone who will respond to queries on Slack, fix bugs and keep the library up to date and in sync with the design system is a must.

### 3. An intuitive design

There was already a reference implementation written in [Nunjucks](https://mozilla.github.io/nunjucks/) that would provide inspiration but this had to feel like Rails. We use blocks instead of strings of HTML, we use `snake_case` instead of `camelCase`. If the ergonomics weren't right developers wouldn't use it.

### 4. Proper documentation

Good documentation is probably the best way to give projects an air of legitimacy. A user guide with copyable code snippets and fully rendered examples is a worthwhile investment, especially when it has fantastic artwork on the homepage.

<!-- TODO: screenshots of the guide homepages? -->

### 5. Going the extra mile

While the upstream Nunjucks macros are a great starting point, I took every opportunity to make the developer experience a bit smoother. Being able to make a [tag](https://design-system.service.gov.uk/components/tag/) blue with `colour: blue` instead of passing in `classes: "govuk-tag--blue"` or open a link in a new tab with `new_tab: true` rather than `rel="noreferrer noopener" target="_blank"` are small improvements, but they add up.

### 6. Encouraging contributions

This is a big one, but no library author is able to predict what teams will need. Ensuring the codebase is clean, tidy and well tested makes the process of contributing easier.

Contributions aren't always fully-fledged pull requests, feature requests count too and they've helped make the libraries more useful for everyone.

So far, nearly all suggestions made have been accommodated.

### 7. Getting real users

I was incredibly lucky that the team building [Apply for teacher training](https://www.gov.uk/apply-for-teacher-training) were just getting started when I launched the form builder.

Being one of the Department for Education's flagship projects and I'm positive them being listed as users gave others the confidence to give it a try.

Real users find real bugs and limitations, it's crucial in taking your hobby project to the next level.

## What happened next

In the months after the form builder's release it saw a significant number of teams begin using it. Shortly after we began work on the components library and it followed suit.

Now they're the go-to libaries for developing GOV.UK applications in Rails and between them are used in about 125 services.

## Version 5
