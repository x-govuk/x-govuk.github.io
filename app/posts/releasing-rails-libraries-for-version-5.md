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

Without these and other projects like it, teams working on GOV.UK services would need to implement all the patterns and behaviour described in the design system themselves. This would be huge a waste of effort and slow down delivery to a crawl.

> Time spent on [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) is time spent not focussing on user needs.

When working on anything that's used by lots of teams, like [referring serious teacher misconduct](https://refer-serious-misconduct.education.gov.uk), [whistleblowing at a company](https://make-a-business-whistleblower-report.service.gov.uk/) or even [GOV.UK forms itself](https://www.forms.service.gov.uk/), there's a great deal of pressure not to break anything. This responsibility forces us to make changes with a degree of caution and to rigorously test and review.

There are two main reasons for us making changes:

* **following upstream changes** --- like adding a new GOV.UK component or adding support for a new version of Ruby or Rails
* **improvements we feel make the library better** --- like adding features, tidying code or making the tests run faster

Conveniently, the two main updates in version 5 fit squarely into these categories.

## The task list

The [GOV.UK design system task list component](https://design-system.service.gov.uk/components/task-list/) has been a long time in the making, with discussions [stretching back to 2018](https://github.com/alphagov/govuk-design-system-backlog/issues/72), but thanks to Frankie Roberto and the GOV.UK design system team's tireless efforts, [the PR](https://github.com/alphagov/govuk-frontend/pull/2261) was approved and merged in June.

Task lists are intended to help users manage many tasks, especially when the user:

* might not be able to do them all in one sitting
* is able to complete them in any order

Like with the other components, the Rails implementation borrows heavily from the GOV.UK design system reference, but translates it into an syntax that will be immediately familiar to Ruby on Rails developers.

```erb
<h2 class="govuk-heading-m">Confirm your identity</h2>

<%=
  govuk_task_list(id_prefix: "about-you") do |task_list|
    task_list.with_item do |item|
      item.with_title(text: "Personal details")
      item.with_status do
        govuk_tag(text: "Complete", colour: "green")
      end
    end
    task_list.with_item do |item|
      item.with_title(text: "Contact details")
      item.with_status do
        govuk_tag(text: "Not started yet", colour: "Red")
      end
    end
    task_list.with_item(cannot_start_yet: true) do |item|
      item.with_title(
        text: "Identity check",
        hint: <<~HINT
          We need your personal and contact details in order
          to begin confirming your identity
        HINT
      )
      item.with_status(text: "Cannot start")
    end
  end
%>
```

The above snippet will render this task list:

![A GOV.UK design system task list with entries for personal and contact details, and a greyed out identity check task that cannot yet be started](/assets/posts/releasing-rails-libraries-for-version-5/rendered-task-list.png)


## New link helpers

I tried adding [a feature](https://github.com/x-govuk/govuk-components/pull/363) in November 2022 that lets developers create links that open in new tabs, but [had to remove it](https://github.com/x-govuk/govuk-components/pull/399) shortly after because our pre-release testing showed it caused problems by trying to mix different kinds of arguments.

The old link helpers support all of Rails' functionality, even the archaic old stuff that's no longer recommended in the official documentation. They've not really changed much since they were introduced in 2004.


Their role is to simply take `some text` and `#a-hyperlink` and generate a link, so:

```erb
<%= govuk_link_to("some text", "#a-hyperlink") %>

<!-- or -->

<%= govuk_link_to("#a-hyperlink") do %>
  some text
<% end %>

<!-- becomes -->

<a class="govuk-link" href="#a-hyperlink">some text</a>
```

Links and buttons in the GOV.UK design have lots additional classes that change how they look and act.

Unfortunately, in those years since Rails added link helpers, Ruby has changed. A lot. It gained [keyword arguments in 2013](https://www.ruby-lang.org/en/news/2013/02/24/ruby-2-0-0-p0-is-released/), which make methods easier to understand, work with and document.

Not being able to use them in the link helpers because they break things nobody really uses any more means maintaining code that's hard, or impossible, to cleanly improve.

I decided to give up on supporting everything that Rails does in favour of supporting what most developers use most of the time.

In the new version, all of the GOV.UK Design System options for links and buttons are represented by keyword arguments. They allow us to [support a large number of options](https://govuk-components.netlify.app/helpers/link/) while keeping the code clean and succinct.

Now developers can reliably build complex link markup with ease:

```erb
<%= govuk_link_to(
  "View",
  "#my-profile",
  visually_hidden_suffix: "my profile",
  new_tab: true,
  no_visited_state: true
) %>

<!-- becomes -->

<a class="govuk-link govuk-link--no-visited-state" target="_blank" rel="noreferrer noopener">
  View<span class="govuk-visually-hidden"> my profile</span>
</a>
```
