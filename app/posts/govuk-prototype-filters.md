---
title: Rapidly prototype with data using this set of helpful template filters
description: Introducing a plugin for the GOV.UK Prototype Kit that adds a helpful collection of Nunjucks template filters. Rapidly modify and transform data while ensuring it follows the GOV.UK style guide.
date: 2023-05-24
author:
  name: Paul Lloyd
  url: https://github.com/paulrobertlloyd
image:
  src: /assets/posts/govuk-prototype-filters/govuk-prototype-filters.png
  alt: Illustration of an interface with checkboxes and radio buttons being generated from code, floating above a laptop.
  opengraphImage: true
---

One of the most exciting features included in version 13 of the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) is its new plugin system.

It means you can now use components, styles and other features, either from within your own organisation or developed by the wider cross-government community, in your own prototypes.

One feature plugins can provide is template filters. A feature of the Nunjucks templating language, filters are functions that allow you to modify variables. Separated by a pipe symbol (`|`), they can be chained together, with the output of one filter passed on to the next.

For example, `{% raw %}{{ "<p>GOV.UK</p>" | striptags | lower }}{% endraw %}` will remove the HTML tags, lower-case the remaining string and output `gov.uk`.

Both `striptags` and `lower` are examples of [filters builtin to Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters). While it’s always been possible to add your own filters to the Prototype Kit, it can be time-consuming, if not entirely frustrating at times.

## Introducing GOV.UK Prototype Filters

The [GOV.UK Prototype Filters](https://x-govuk.github.io/govuk-prototype-filters/) plugin provides a set of helpful filters, built specifically for users of the GOV.UK Prototype Kit.

For example, it can be difficult to take dates entered into the `govukDateInput` component and then display them correctly on another page such as ‘Check your answers’. Even if you use a date library like Luxon, you still have to remember which formatting tokens to use.

GOV.UK Prototype Filters provides several date filters that can help.

Let’s say we have a single page in our prototype that uses the `govukDateInput` component to collect a date:

```njk
{% raw %}{{ govukDateInput({
  id: "issued",
  namePrefix: "issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  }
}) }}{% endraw %}
```

Submitting a page with this component would add the following values to session data:

```js
{
  'issued-day': '1',
  'issued-month': '2',
  'issued-year': '2003',
}
```

To display this date on our ‘Check your answers’ page, we can now use the `isoDateFromDateInput` filter:

```njk
{% raw %}{{ data | isoDateFromDateInput("issued") }}{% endraw %}
```

This will output the following ISO 8601 formatted date:

```html
2003-02-01
```

This isn’t very readable and doesn’t follow [the GOV.UK style guide for dates](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#dates). However, we can use it in tandem with the `govukDate` filter:

```njk
{% raw %}{{ data | isoDateFromDateInput("issued") | govukDate }}{% endraw %}
```

Now we have a correctly formatted, human readable date:

```html
1 February 2003
```

The `govukTime` filter behaves similarly. [The GOV.UK style guide for times](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#times) recommends using am and pm suffixes, and midday and midnight instead of 12:00pm and 12:00am.

Using the `govukTime` filter means times will always be displayed in the correct format. For example:

```njk
{% raw %}{{ "2021-08-17T00:00:31" | govukTime }}
{{ "2021-08-17T12:00:59" | govukTime }}
{{ "2021-08-17T18:30:00" | govukTime }}
{{ "08:15" | govukTime }}{% endraw %}
```

will output:

```html
midnight
midday
6:30pm
8:15am
```

As an aside, providing either `"now"` or `"today"` to `govukDate` and `govukTime` filters will output the current date or time, also formatted correctly.

## The initial collection

The first version of this plugin includes 21 filters grouped into 5 categories:

[Array filters](https://x-govuk.github.io/govuk-prototype-filters/array/)
: `formatList`, `isArray`, `rejectFromArray`, `selectFromArray` and `uniqueFromArray`.

[Date filters](https://x-govuk.github.io/govuk-prototype-filters/date/)
: `duration`, `govukDate`, `govukTime`, `isoDateFromDateInput` and `monthName`.

[Number filters](https://x-govuk.github.io/govuk-prototype-filters/number/)
: `currency`, `isNumber`, `ordinal` and `plural`.

[Object filters](https://x-govuk.github.io/govuk-prototype-filters/object/)
: `isObject`, `objectToArray`.

[String filters](https://x-govuk.github.io/govuk-prototype-filters/string/)
: `govukMarkdown`, `isString`, `noOrphans`, `slugify` and `startsWith`.

## Installation

To use this plugin with the Prototype Kit, go to your terminal and type the following:

```bash
npm i @x-govuk/govuk-prototype-filters
```

That’s it! If you start your prototype, and go to the ‘Plugins’ section of ‘Manage your prototype’ (<http://localhost:3000/manage-prototype>), you’ll see ‘GOVUK Prototype Filters’ listed as an installed plugin. You can use these filters in your templates straight away.

## Contribute

Combining the extensibility of the Prototype Kit’s plugin system with community-led projects like this, means designers can spend more time prototyping brilliant government services, instead of wrestling JavaScript.

This project already includes contributions from colleagues across government.

Just this month, Chris Barrett at Defra [added the `duration`](https://github.com/x-govuk/govuk-prototype-filters/pull/11) and [`uniqueFromArray`](https://github.com/x-govuk/govuk-prototype-filters/pull/4) filters, while Tom Mearns at UK Export Finance suggested improvements to the previous `sterling` filter so that it could be used to format foreign currencies.

If you have an idea for a filter or have any feedback about the initial collection, please [create an issue on the project’s GitHub repository](https://github.com/x-govuk/govuk-prototype-filters/issues).
