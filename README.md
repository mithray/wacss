<p align="center">
  <img src="./cherry_blossom_72.png" />
</p>

# WaCss

WaCSS is a CSS library designed to work on Semantic HTML5 and ARIA attributes, encouraging developers to practice accessibility and making the web more accesible.

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

The order of testing goes like this:

1. No Javascript. It should function well with no Javascript first, because any problems that exist when Javascript is enabled can be fixed with Javascript.
2. *Interaction types*. Keyboard, Mouse, Touch
3. *Sensory types*. With/without Sighted.
4. *Sensory types*. With/without Hearing.
5. Various Viewport Sizes
6. With Javascript improving the UX of all.

## Categories

### Layout

A `layout` refers to a set of style declarations which specify only the relationship between itself, it's context, it's direct children, and the relationship between it's direct children. Anything which is not intrinsic to the relationship itself, is not part of a layout declaration. A layout should generally have children of the same type, or at least treat them as if they are the same type. This is similar to how in functional languages a List generally contains elements of the same type. Several block elements can effectively be treated as if they are the same type for positioning purposes, but a mix of inline and block elements cannot.

<!-- 
### Component
A `component` refers to a set of style declarations which specify  
--> 
