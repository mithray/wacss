# material_nd

#### Standards
*The Following standards will be perused, but not necessarliy followed completely, we will specify in each case the extent to which it is followed*

We have some unique ideas about styling that we have not yet been implemented or even crystalized in our own minds. In a word, it's about applying mathematics and the science of perception to Material Design, and the concept of an n-dimensional visual space. We will seek to study and understand the following style guides, and if possible, we will be a superset of these standards, applying these rules and more.

1. [Google](https://material.io/).
2. [U.S. Web Design System](https://github.com/uswds/uswds)
3. We are still looking for good resources to include to apply the Mathematics :-)

[Style](my custom url for my new standard based on MD). We are working on a new Standard which extends Googles Material Design that adds more algorithmic exactness to color and distance css generation based on the science of perception, as well as an n-dimensional concept of webpages. 3 for Space, 1 for Time, and an extra n - 4 dimensions for data that changes upon clicks or other interactive activity. 

For example, an interactive webpage where clicks provide interactivity, will be 5 dimensional. As its behaviour is defined by 3 space dimensions, 1 time dimension, and the user interaction defined by a click.
Generic elements like div should be used as much as possible only for styling. More specific and semantic elements should be used as much as possible. Custom elements are encouraged to use these HTML tags, custom html elements should be named semantically.

a templating engine like jade or perhaps even yaml, will give you the opportunity to quickly write website with custom elements. Pug should work very well, and it could use the mixin syntax to add custom elements, this way we can get custom elements by prepending + to a custom element-name. Otherwise, they could just be treated as a replacement for the mixin syntax, this might be preferable, as it would probably make it more portable. One suggested naming convention for your components is to have the designer name, framework, or organization as the first word, and the top-level Tag of your custom component as the second word. For example, [materialize](http://materializecss.com/navbar.html) might decide to make a custom component like so:
