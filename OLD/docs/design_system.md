# Wacss Design System

## Contents
- Design Tokens - Global. Color Palettes, ratios and values with little semantic meaning. Likely to be *Universal* Tokens, which can be brought in easily from another design system.
- Design Tokens - Common(Alias). Semantic tokens such as "theme color" which references the Global Tokens. Can easily point the common tokens to different global values without modifying the globals, to get a new theme.
- Design Tokens - Components. Component Specifications for the various components. The Component Design Tokens for this library will be the defaults set within the components themselves. But consumers of the library will be able to change these design tokens without changing the internal code within the Components themselves.
- Components. The Code for the components themselves comprised of HTML + SCSS + Javascript.
