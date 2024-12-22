---
title: Finishing touches for forms
date: 2025-01-05
description: Some tips on making sure forms written in Ruby on Rails are accessible
author:
  name: Peter Yates
  url: https://github.com/peteryates
image:
  src: /assets/posts/finishing-touches-for-forms/illustration.png
  alt: Illustration of somebody straightening a picture frame on a wall which says ‘form sweet form’.
  opengraphImage: true
---

The [GOV.UK formbuilder](https://govuk-form-builder.netlify.app) makes it easy for Ruby on Rails developers to build forms that follow the rules set out in the [GOV.UK design system](https://design-system.service.gov.uk/).

It generates the correct HTML, provides a nice API for customising the fields to meet the needs of your service and takes care of clearly displaying any error messages.

There are, however, some suggestions in the design system guidance that go beyond the remit of the form builder.

They are often forgotten, we'll go over some simple ways to solve them here.

## Positioning the error summary at the top of the page

In addition to making it clear that something is wrong, we also need to tell the user exactly what happened and how to fix it.

[The guidance says](https://design-system.service.gov.uk/components/error-summary#where-to-put-the-error-summary):

> Put the error summary at the top of the main container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

This causes a few problems.

The GOV.UK design system includes some complex rules around linking to fields from the error summary. For example, errors on checkbox or radio button fields should link to the first checkbox or radio button.

Rails doesn't support this and for it to work the hyperlinks and targets need to be consistent. Because forms can contain custom logic, it's vital that the form builder is responsible for generating both.

We could solve the problem by wrapping the whole page in a `<form>` element, which would allow us to place the error summary wherever we like, but it's a hack. It isn't semantically correct and is likely to lead to other problems.

Thankfully, Rails has our backs. We can use [`content_for`](https://guides.rubyonrails.org/layouts_and_rendering.html#using-the-content-for-method) to insert content into a named block in our layout. If we add a named block called `top_of_main` at the top of our `<main>` element, like this:

```html
<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content">
    <%= yield :top_of_main %>
    <h1 class="govuk-heading-xl">Default page template</h1>

    <!-- the rest of our page -->
```

We can send our error summary from the form to it, like this:

```html
<%= form_with(model: @object, url: some_path) do |form| %>
  <%= content_for(:top_of_main) { form.govuk_error_summary } %>

  <%= form.govuk_text_field(:how_many_juggling_items) %>
<% end %>
```

And now our error summary is in the right spot.

![Two screenshots side by side showing a form with errors. The left one has the error summary after the h1 and the right one has the error summary first](/assets/posts/finishing-touches-for-forms/error-summary-side-by-side.png)

## Prefixing the page title with `Error:`

When a form submission results in a validation failure we need to make it clear to the user that something is wrong.

[The guidance says](https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors):

> Add ‘Error: ’ to the beginning of the page `<title>` so screen readers read it out as soon as possible

This is a little tricky because we need a some logic that can determine whether there's an error on the page, and we set the `<title>` in the document `<head>` before we've rendered the form in the `<body>`.

We can use `content_for` to our advantage here, too.

First, we set page titles using a [helper method](https://www.rubyguides.com/2020/01/rails-helpers/) and pass in the text and value that represents whether or not there are any errors on the page:

```html
<%
  page_title(
    "How many implements can you juggle with?",
    error: @object.errors.any?
  )
%>
```

If there are errors we can add the 'Error:' prefix:

```ruby
def page_title(text, error: false)
  title_content = if error
                    "Error: #{text}"
                  else
                    text
                  end

  content_for(:page_title) { title_content }
end
```

And so long as we have a corresponding `yield(:page_title)` in the layout, our titles will now be prefixed with 'Error:' whenever something's wrong.

```html
<head>
  <%= tag.title(yield(:page_title)) %>
  <!-- other head content -->
</head>
```
