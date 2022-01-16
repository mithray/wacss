# Regulacss
*Semantic, Classless, Componentized Css*

[DISCLAIMER: nothing here actually works. I'm just saving stuff here.]

## Introduction

This is a CSS framework designed to work well with no classes, as long as you use proper Semantic HTML5! 

## Design Goals

- International
  - Utilizing global standards.
  - Language tagging with translation hooks
  - Easy to learn. No parochial class names. Just widely accepted HTML and Schema.
- Accessible.
  - Colorblind users
  - Blind users
  - Keyboard users
  - Robots users
  - Poorly connected users("developing world")
- Standardized
- Fast
  - Less Javascript
  - Pure CSS wherever possible
- Traditional Modular HTML / CSS structure.
  - HTML represents State
  - CSS is used for display
  - Javascript and/or following hyperlinks is used to change state.

## Motivation

Motivated by the things I hate about the web.

- Too much Javascript
- Ugly HTML
- Non Standard HTML5
- Hardly anybody uses Semantic Markup which makes usability and web scraping harder
- Too many trackers
- Webpages are too heavy
- "Web Apps" instead of "Webpages". I want to read a blog, not download an app. Actually, I would rather read this with lynx. I don't want to sign up to your emailing list or hookup with local singles 5 miles from my location. Why do you even know my location? This is sketchy! I'm out of here!

Basically, the idea behind this CSS is that a webpage is an HTML document, which describes some information that somebody wants to publicize. I wish the Server would justsend that information, and let the client decide how to render it. This is often a preferred usecase for myself and many others, and it already is the case for blind and some other access impaired users. This library is designed to be the kind of generic CSS that can style an HTML document client side without accepting any CSS from the server. This will only really work if people use proper HTML! I don't really expect this way of doing things to become the primary way to use the web any time soon, but I think it *is* preferable for many users, who will often have their own stylesheets or nightmode, or print the document because it's easier to read off screen.

## Desired Usability

I intend this library to be able to display many of the modern looking components that are common on the web today. However because I intend this to be generic and usable on a client without any display clues from the server, it is necessary to use very standard HTML5 and Schema markup without classes, as only these can be expected to be generic. Class names are never generic, but this is precisely the intent of HTML5 and Schema.

It is easy to find a standard way to represent the most common HTML elements, just use the correct HTML5 elements like `input`, `button`, `form` etc( still designers and libraries seem to not use these!). However more complex components, such as image galleries, do not have standardized HTML representations. For these components, we have tried to find HTML/Schema interpretations that are consistent with standards, and when these are followed, the CSS interprets the HTML as being this component and the markup is applied. 

More than likely, to understand you probably just need to see how it is used.


## Contents

1. Atoms
  - Button
  - Chip
  - Code
  - Input. Should be able to pass it a JSON Schema and an input field is created.
  	- Text
  	- Various Types
  	- Combo box (select, multiple)
  	- Checkbox ()
  	- File
  	- Search
  	- Select (with optgroup)
    - Slider
  - Link
  - List
  - Title

2. Molecules
  - Accordion
  - Breadcrumb
  - Card(Tile)
  - Form
  - Notification
  - Pagination
  - Table
  - Tabs
  - Tooltip(Can be seen as a more advanced "title" attribute)
  - Various Schema.org or other Objects

3. Cells
  - Footer
  - Grid
  - Header
  - Hero
  - Navbar

4. Globals
  - Typography
  - Color
  - Media

## Dimensionality and UX

We seek to create interfaces which are as much as possible globally accessible with high usability by creating interfaces which mimic the real multidimensional world in aspects such as motion to represent state change, shadows, lighting to represent page depth, and color to present meaning, interact with shadows, and show page depth, provide easy use with sufficient contrast. In order to meet these goals we seek to understand well the science and mathematics of color, lighting, movement, etc. We raise the concept of an n-dimensional data space with spatial, time, and data dimensions.

A piece of paper is 2-dimensional. The Material Design specs draw an important point to our attention however. That is, that depth on a page is important, and they offer built-in classes for an easier presentation of depth and shadow. This spec treats html documents as essentially 3dimensional. However, the aspect of time can also be thought of as a dimension in a dynamic web page, as elements might change and slide shows might switch elements in and out. Thus, it is helpful to be aware that we actually already think of a dynamic, material design web page as varying along the four coordinates x,y,z,t. With dynamic data or various interaction methods, we can think of a web page having more than 4 dimensions. Each 

When html/css/javascript is written, it is written along these four dimensions. A javascript array of n-depth can represent n dimensional data. When applied to a certain element. It increases the dimension of that element by n dimensions.

A text document at any point of time is only 2 dimensions, there is no depth to pure text files, and they only change in time as we edit them. We represent the 4+dimensions on a page by including tags within tags and with multidimensional arrays. 
Below is what a typical abstraction of an html page might be. A letter is added for each element subsetted from its parent, and a letter is changed between siblings. 

-A
    - AA
        - AAA
        - AAB
    - AB
        - ABA
        - ABB
-B
    - BA
        - BAA
        - BAB
    - BB
        - BBA
        - BBB

This can also be represented by the following array, which looks very similar to a JSON document.

(A(AA(AAA,AAB),AB(ABA,ABB)),B(BA(BAA,BAB),BB(BBA,BBB)))

The structured nature of this hopefully also demonstrates how an abstract data structure of arbitrary depth could be turned into a visual component. :smile:

### References

- [Creating Usability With Motion](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc)
- [App Animations](www.appanimations.com)
