# front-end-bookmarks

<https://www.frontendbookmarks.com/>

A collection of articles and talks about HTML, CSS and JS, grouped by elements, attributes, properties, selectors, methods, and expressions.

## Running locally

```
npm install 
npm run start
```

Then visit `http://localhost:8080`

## Contributing

The easiest way to contribute is adding a comment in [this issue](https://github.com/matuzo/front-end-bookmarks/issues/21) with links you'd like to add.

The preferred way is to fork this repository and add the bookmarks yourself.

## Adding links to existing pages

If a page already exists, e.g. [meter.md](src/languages/html/elements/meter.md), find the corresponding JSON file in [/src/_data/entries/](/src/_data/entries/), e.g. [meter.json](/src/_data/entries/html/meter.json), and add an object with only an unique `id` and `url`.
Then run `node getUrlData.js` on the command line to fetch the title, description, metadata, and image.

```json
[
  {
    "id": "existinglink",
    "url": "https://...",
    "title": "Existing Link",
    "processed": true
  },
  {
    "id": "newlink",
    "url": "https://this-is-the-new-link.com"
  }
]
```

After running the command successfully, you'll see fields added to the object.

```json
[
  {
    "id": "existinglink",
    "url": "https://...",
    "title": "Existing Link",
    "processed": true
  },
  {
    "id": "newlink",
    "title": "New link title",
    "url": "https://this-is-the-new-link.com",
    "description": "Meta description",
    "date": "2020-02-10T19:10:03.175Z",
    "image": "/image.png",
    "processed": true
  }
]
```

## Adding a page

If you want to add a new page, create a JSON file in one of the subfolders in [/src/_data/entries/](/src/_data/entries/) and add an array of link objects.

```json
[
  {
    "id": "link",
    "url": "https://this-is-the-link.com"
  },
    {
    "id": "anotherlink",
    "url": "https://this-is-the-another-link.com"
  },
]
```

Then run `node getUrlData.js` on the command line to fetch the title, description, meta data, and image.

Now copy one of the `.md` files in one of the subfolders in [/src/languages](/src/languages), rename it and edit the following fields:

* `title` (name of the property, element, etc.)
* `short_desc` (Short defintion)
* `definition` (Official defintion)
* `links` (name of the JSON file)

...and change the code sample at the bottom.

```
---
title: ":nth-child()"
short_desc: "Represents an element that has an+b-1 siblings before it in the document tree."
tags:
  - css
  - selectors
  - entry
permalink: css/selectors/{{ title | slug }}/index.html
definition:
  text: "The :nth-child(an+b) pseudo-class notation represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n."
  cite:
    text: "6.6.5.2. :nth-child() pseudo-class"
    url: https://www.w3.org/TR/selectors-3/#nth-child-pseudo
links: "nthchild"
---

<h2 class="h3"><span>Code sample</span></h2>

```css
li:nth-child(2n) {
  border: 5px solid fuchsia;
}
```
