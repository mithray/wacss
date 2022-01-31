# Dimensionality and UX

We seek to create interfaces which are as much as possible globally accessible with high usability by creating interfaces which mimic the real multidimensional world in aspects such as motion to represent state change, shadows, lighting to represent page depth, and color to present meaning, interact with shadows, and show page depth, provide easy use with sufficient contrast. In order to meet these goals we seek to understand well the science and mathematics of color, lighting, movement, etc. We raise the concept of an n-dimensional data space with spatial, time, and data dimensions.

A piece of paper is 2-dimensional. The Material Design specs draw an important point to our attention however. That is, that depth on a page is important, and they offer built-in classes for an easier presentation of depth and shadow. This spec treats html documents as essentially 3dimensional. However, the aspect of time can also be thought of as a dimension in a dynamic web page, as elements might change and slide shows might switch elements in and out. Thus, it is helpful to be aware that we actually already think of a dynamic, material design web page as varying along the four coordinates x,y,z,t. With dynamic data or various interaction methods, we can think of a web page having more than 4 dimensions.

When html/css/javascript is written, it is written along these four dimensions. A javascript array of n-depth can represent n dimensional data. When applied to a certain element. It increases the dimension of that element by n dimensions.

A text document at any point of time is only 2 dimensions, there is no depth to pure text files, and they only change in time as we edit them. We represent the 4+dimensions on a page by including tags within tags and with multidimensional arrays. 
Below is what a typical abstraction of an html page might be. A letter is added for each element subsetted from its parent, and a letter is changed between siblings. 

- A
  - AA
    - AAA
    - AAB
  - AB
    - ABA
    - ABB
- B
  - BA
    - BAA
    - BAB
  - BB
    - BBA
    - BBB

This can also be represented by the following array, which looks very similar to a JSON document.

(A(AA(AAA,AAB),AB(ABA,ABB)),B(BA(BAA,BAB),BB(BBA,BBB)))

The structured nature of this hopefully also demonstrates how an abstract data structure of arbitrary depth could be turned into a visual component. :smile:
