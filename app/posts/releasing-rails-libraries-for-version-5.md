---
title: Releasing the Rails libraries for version 5 of the GOV.UK Design System
description: Notes on how the Rails libraries for the GOV.UK Design System are developed and the work required to support version 5
date: 2024-01-10
author:
  name: Peter Yates
  url: https://github.com/peteryates
image:
  src: /assets/posts/releasing-rails-libraries-for-version-5/illustration.png
  alt: Numeral 5, with a background of coloured stripes based on the shape of the number.
  opengraphImage: true
---

Version 5 of the GOV.UK Design System was released on 8 December 2023. Half an hour later, we released version 5 of the x-govuk [form builder](https://govuk-form-builder.x-govuk.org/) and [components](https://govuk-components.x-govuk.org/) libraries.

The short turnaround time might suggest it was a quick job, but work on the included features started in May and we've made some significant improvements since then.

The form builder and components libraries are implementations of the [GOV.UK Design System](https://design-system.service.gov.uk/) for [Ruby on Rails](https://rubyonrails.org/), one of the most popular web frameworks used across government.

Without these and other projects like it, teams working on GOV.UK services would need to implement all the patterns and behaviour described in the design system themselves. This would be huge a waste of effort and slow down delivery to a crawl.

> Time spent on [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) is time spent not focussing on user needs.

The form builder and components libraries are used by more than 100 live services and some form building platforms use them too, including [GOV.UK Forms](https://www.forms.service.gov.uk/) and [Ministry of Justice Forms](https://moj-forms.service.justice.gov.uk/).

Given the serious nature of things they're used for and the large number of users, there's a great deal of pressure not to break anything. This responsibility forces us to make changes with a degree of caution and to rigorously test and review.

There are two main reasons for us making changes:

- **following upstream changes** — like adding a new GOV.UK component or adding support for a new version of Ruby or Rails
- **improvements we feel make the library better** — like adding features, tidying code or making the tests run faster

Conveniently, the two main updates in version 5 fit squarely into these categories.

## The task list

The [GOV.UK Design System task list component](https://design-system.service.gov.uk/components/task-list/) has been a long time in the making with discussions [stretching back to 2018](https://github.com/alphagov/govuk-design-system-backlog/issues/72). However, thanks to Frankie Roberto and the GOV.UK Design System team's tireless efforts, [the pull request](https://github.com/alphagov/govuk-frontend/pull/2261) was finally approved and merged in June.

Task lists are intended to help users manage many tasks, especially when the user:

- might not be able to do them all in one sitting
- is able to complete them in any order

Like with the other components, the Rails implementation borrows heavily from the GOV.UK Design System reference, but translates it into syntax that will be immediately familiar to Ruby on Rails developers.

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

## New link and button helpers

The govuk-components link and button helpers are probably the most widely used feature offered by the gem.

Their role is to take `some text` and `/a-link` and generate a link with design system classes like `govuk-link`, so:

```erb
<%= govuk_link_to("some text", "/a-link") %>

<!-- or -->

<%= govuk_link_to("/a-link") do %>
  some text
<% end %>

<!-- becomes -->

<a class="govuk-link" href="/a-link">some text</a>
```

In November 2022 [I tried to add a new feature](https://github.com/x-govuk/govuk-components/pull/363) to `govuk_link_to` which allowed developers to call it with `new_tab: true`, and the resulting link would open pages in a new tab.

Unfortunately [I had to revert the change shortly afterwards](https://github.com/x-govuk/govuk-components/pull/399) because mixing new Ruby positional keyword arguments (added in 2019) with old Rails link helpers (unchanged since 2004) caused lots of problems.

Thankfully we uncovered the problems in our pre-release testing so didn't break anything important.

Still, opening links in a new tab was something I wanted to address. It's more complicated than the other modifiers like `no_underline` because it adds multiple new attributes to links. Developers often forget the `rel` attribute, leaving users open to [reverse tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing). We can provide real value for users by supporting this feature.

In the new version, all of the design system options for links and buttons are represented by keyword arguments. They allow us to [support a large number of parameters](https://govuk-components.x-govuk.org/helpers/link/) while keeping [the code](https://github.com/x-govuk/govuk-components/blob/main/app/helpers/govuk_link_helper.rb) clean and succinct.

Now developers can reliably build complex link markup with confidence:

```erb
<%= govuk_link_to(
  "View",
  "/my-profile",
  visually_hidden_suffix: "my profile",
  new_tab: true,
  no_visited_state: true
) %>

<!-- becomes -->

<a class="govuk-link govuk-link--no-visited-state" target="_blank" rel="noreferrer noopener">
  View<span class="govuk-visually-hidden"> my profile</span>
</a>
```

## What's next

Now version 5 is released we'll slow the pace for a while and let the dust settle. This should give developers the opportunity to try out the new features and provide feedback or report bugs.
