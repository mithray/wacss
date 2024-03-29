<p align="center">
  <img src="./cherry_blossom_72.png" />
</p>

# WaCss

WaCSS is a CSS library designed to work on Semantic HTML5 and ARIA attributes, encouraging developers to practice accessibility and making the web more accesible. Wa is a Japanese word which is described by Wikipedia:

> ...implies a peaceful unity and conformity within a social group in which members prefer the continuation of a harmonious community over their personal interests.
> \- [Wa][]

In the context of this library, the term is intended to mean conformity to Web Standards in such a way that makes the Web a nicer place for all of it's users where we have uniform patterns of describing documents which make it easier for people who rely on Assistive Technology. At the same time, Wa is intended to facilitate the ability of customization of components with importing design systems, thereby actually facilitating production of beaituful designs.

## Contents

1. Design Tokens
2. Components

## Goals

- Beauty. Beautiful output
- Elegance. HTML markup should not require a lot of ugly and long classes. It should be easy to understand.
- Accesible. Should encourage Accessibility, usability, compliance to HTML standards. Should use HTML elements in ways which they are supposed to be used and not try to force elements to do what they shouldn't.
- Expressiveness. Should have functionality for many common components.
- Lightweight. Prefer Low Gzip Size and less Javascript, but accessibility is more important.
- Lines of Code. CSS Codebase should be small

## User Targets

### Summary

Here is a summary of the kinds of users/user agent pairs this library will attempt to support. All interaction types, Keyboard, Mouse and Touch should be supported by this library on all viewports which support them. 

- Without Javascript

|                |Sighted|Unsighted - Static Content|Unsighted - Dynamic Content|
|----------------|-------|--------------------------|---------------------------|
|With Hearing    |yes    |yes                       |no                         |
|Hearing Impaired|yes    |no                        |no                         |

- With Javascript

|                |Sighted|Unsighted - Static Content|Unsighted - Dynamic Content|
|----------------|-------|--------------------------|---------------------------|
|With Hearing    |yes    |yes                       |yes                        |
|Hearing Impaired|yes    |no                        |no                         |

### Concerning Javascript:

Everything should function well with no Javascript first, especially for users who aren't relying on screen readers. However, some dynamic content relies on the ability of Javascript to change ARIA states and lack of Javascript is not considered to be an accessibility issue. There are many limits in what can be done, especially with complex interactions, without Javascript. Without proper support from HTML/CSS it's not possible to provide dynamic content for users who are sight impaired without Javascript. This is not considered problematic by [Accessibility Association][AA]

> "Modern screen readers and other assistive technologies can process the results of JavaScript processes, as long as the JavaScript is coded with accessibility in mind. There are no inherent barriers in the technologies themselves to making JavaScript inaccessible."
> \- [Accessibility Association][WAS]
  
This comes first because any problems that exist when Javascript is enabled can be fixed with Javascript. 
## Categories

### Layout

A `layout` refers to a set of style declarations which specify only the relationship between itself, it's context, it's direct children, and the relationship between it's direct children. Anything which is not intrinsic to the relationship itself, is not part of a layout declaration. A layout should generally have children of the same type, or at least treat them as if they are the same type. This is similar to how in functional languages a List generally contains elements of the same type. Several block elements can effectively be treated as if they are the same type for positioning purposes, but a mix of inline and block elements cannot.

### Component

Description in development.
<!-- 
A `component` refers to a set of style declarations which specify  
--> 

[WAS]: https://www.accessibilityassociation.org/resource/WAS_Certification_FInal_2020_FINAL
[AA]: https://www.accessibilityassociation.org
[Wa]: https://en.wikipedia.org/wiki/Wa_(Japanese_culture)
