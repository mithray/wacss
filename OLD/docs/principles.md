# Principles

Motivated by the things I hate about the web.

- Too heavy.
- Ugly Code, bespoke naming and classes.
- Hardly anybody uses Semantic Markup which makes usability and web scraping harder. 
- Too many trackers
- Almost universally not interoperable. These issues lead to huge financial failures in interoperability and in the medical field, [even death][]. If every business and website operated on open standards the speed of financial and scientific innovation would catapult us quickly 10 years into the future technologically and usher in a new era of global prosperity.

Basically, the idea behind this CSS is that a webpage is an HTML document, which describes some information that somebody wants to publicize. I wish the Server would justsend that information, and let the client decide how to render it. This is often a preferred usecase for myself and many others, and it already is the case for blind and some other access impaired users. This library is designed to be the kind of generic CSS that can style an HTML document client side without accepting any CSS from the server. This will only really work if people use proper HTML! I don't really expect this way of doing things to become the primary way to use the web any time soon, but I think it *is* preferable for many users, who will often have their own stylesheets or nightmode, or print the document because it's easier to read off screen.

## Design Goals

- Universal. Interoperable with different frameworks. Accessible in different languages. Accessible for various devices and disabilities. Generalized naming principles.
- Classless. 
- Fast. Less Javascript. Javascript may be [used sometimes][Javascript Requirements] to improve the fluidity of animations or enhance accessibility.
- Traditional Modular HTML / CSS structure. HTML represents State. CSS provides a view of that state. Javascript (and/or following hyperlinks) - is used to modify state.

## Desired Usability

I intend this library to be able to display many of the modern looking components that are common on the web today. However because I intend this to be generic and usable on a client without any display clues from the server, it is necessary to use very standard HTML5 and Schema markup without classes, as only these can be expected to be generic. Class names are never generic, but this is precisely the intent of HTML5 and Schema.

It is easy to find a standard way to represent the most common HTML elements, just use the correct HTML5 elements like `input`, `button`, `form` etc( still designers and libraries seem to not use these!). However more complex components, such as image galleries, do not have standardized HTML representations. For these components, we have tried to find HTML/Schema interpretations that are consistent with standards, and when these are followed, the CSS interprets the HTML as being this component and the markup is applied. 

More than likely, to understand you probably just need to see how it is used.
