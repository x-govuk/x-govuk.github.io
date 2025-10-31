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

The [GOV.UK formbuilder](https://govuk-form-builder.x-govuk.org) makes it easy for Ruby on Rails developers to build forms that follow the rules set out in the [GOV.UK Design System](https://design-system.service.gov.uk/).

It generates the correct HTML, provides a nice API for customising the fields to meet the needs of your service and takes care of clearly displaying any error messages.

There are, however, some suggestions in the Design System guidance that go beyond the remit of the form builder.

They are often forgotten, we'll go over some simple ways to solve them here.

## Positioning the error summary at the top of the page

In addition to making it clear that something is wrong, we also need to tell the user exactly what happened and how to fix it.

[The guidance says](https://design-system.service.gov.uk/components/error-summary#where-to-put-the-error-summary):

> Put the error summary at the top of the main container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

This is problematic because the form often isn't the first thing on the page but the form builder needs to be responsible for rendering the error summary to ensure the links and targets are consistent.

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

## Prefixing the page title with 'Error:'

When a form submission results in a validation failure we need to make it clear to the user that something is wrong.

[The guidance says](https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors):

> Add ‘Error: ’ to the beginning of the page `<title>` so screen readers read it out as soon as possible

This is a little tricky because we need some logic that can determine whether there's an error on the page, and we set the `<title>` in the document `<head>` before we've rendered the form in the `<body>`.

We can use `content_for` here too to place the title where we need it.

```html
<head>
  <%= tag.title(yield(:page_title)) %>
  <!-- other head content -->
</head>
```

We can use the [GOV.UK Components](https://govuk-components.x-govuk.org/) [title with error prefix helper](https://govuk-components.x-govuk.org/helpers/title-with-error-prefix/) to add the 'Error:' prefix whenever `@object.errors.any?` is `true`, and pass the resulting string into the `page_title` content:

```ruby
<%
  content_for(:page_title) do
    title_with_error_prefix(
      "How many implements can you juggle with?",
      error: @object.errors.any?
    )
  end
%>
```

## Making sure error links to checkboxes and radios work

The form builder comes with two ways to build lists of checkboxes and radio buttons.

The simplest is to use `#govuk_collection_check_boxes` and `#govuk_collection_radio_buttons`, which mimic the behaviour of [their Rails counterparts](https://edgeapi.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html#method-i-collection_checkboxes).

You just pass in the list of options and the form builder will render them. This works for simple lists.

Sometimes, however, the list needs to be customised a little further. For example we might need [a conditionally revealed questions](https://design-system.service.gov.uk/components/checkboxes#conditionally-revealing-a-related-question) or [a divider](https://design-system.service.gov.uk/components/checkboxes/#add-an-option-for-none).

To support this the form builder comes with the more powerful `#govuk_check_boxes_fieldset` and `#govuk_radio_buttons_fieldset` methods which let the developer build the form field by field.

This power comes at a cost. For example you could write something like this. Here, `delete` will only be shown to admins:

```ruby
f.govuk_radio_buttons_fieldset(:close_ticket)) do

  if @user.admin?
    f.govuk_radio_button(
      :close_ticket,
      'delete'
    )
  end

  f.govuk_radio_button(
    :close_ticket,
    'archive'
  )

  # the rest of the options
end
```

This would make it impossible for the error summary to accurately link to the first checkbox or radio button without repeating the logic --- an approach that's going to lead to bugs when it's updated in one place but not the other.

Instead, we have to help the error summary by 'marking' the field we want the error summary to link to with `link_errors: true`. This overrides the ID generation so the link in the error summary will match it.

```ruby
f.govuk_radio_buttons_fieldset(:close_ticket)) do

  if @user.admin?
    f.govuk_radio_button(
      :close_ticket,
      'delete',
      link_errors: true
    )
  end

  f.govuk_radio_button(
    :close_ticket,
    'archive',
    link_errors: @user.regular_user?
  )

  # the rest of the options
end
```

Now when there's a validation error, regardless of whether the user is an admin or not the error summary will link to the first option. It's a good idea to write some tests to ensure future changes don't affect it.

---

These finishing touches will help make sure your forms are usable and accessible.

If you have any feedback or suggestions of other form features commonly missed, [let us know](https://github.com/x-govuk/govuk-form-builder/issues/new).
