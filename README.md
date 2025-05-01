# Frontend Mentor - QR code component solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Improved with](#improved-with)
  - [Tested with](#tested-with)
  - [Iterations](#iterations)
    - [Iteration 1](#iteration-1)
    - [Iteration 2](#iteration-2)
    - [Iteration 3](#iteration-3)
  - [What I learned](#what-i-learned)
    - [Touchscreen devices and sticky hover](#touchscreen-devices-and-sticky-hover)
  - [Useful resources](#useful-resources)

# Overview

## Screenshot

## Links

- Solution URL: [TODO - On Frontend Mentor](#)
- Live Site URL: [TODO - On Github Pages](https://radkr.github.io/browser-extensions-manager-ui/)

# My process

## Built with

- Semantic HTML5 markup
- CSS custom properties, Grid, Flexbox
- Mobile-first workflow
- Responsive design (media query)
- Next.js + React.js

## Improved with

- TODO - Autoprefixer to increase browser coverage

## Tested with

- TODO - WAVE Web Accessibility Evaluation Tool
- Jest + React Testing Library + User Event Testing Library

## Iterations

### Iteration 1

See the styled page on my mobile device.

### Iteration 2

See the styled page on my desktop device.

### Iteration 3

See the styled page on my tablet device.

## What I learned

### Touchscreen devices and sticky hover

_"[...] when the user interacts with this element on a touchscreen: after the tap has been done, the hover effect is stuck on the element. This also occurs when the element is not even activated by the tapping, for instance if it was touched during scrolling."_ [Finally, a CSS only solution to :hover on touchscreens](https://itnext.io/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c)

_"The `hover` media query allows us to detect the user’s primary input mechanism can hover over elements. It can have two values:_

- _`none` detects when the primary input mechanism can’t hover or can’t conveniently hover, like most cellphones and tablets._
- _`hover` detects when the primary input mechanism can hover over elements (for example, desktop computers, laptops, and smartphones with a stylus)."_

[A Guide To Hover And Pointer Media Queries](https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/)

_"The `pointer` media query helps us to detect how accurate the primary pointer device is. This media query has three values:_

- _`none` detects when the main input mechanism doesn’t have a pointer device (for example cellphones);_
- _`coarse` detects when the main input mechanism has a pointer device with limited accuracy (like the remote control of a Smart TV or some video game consoles);_
- _`fine` detects when the primary input mechanism has an accurate pointer device (like a mouse, touchpads, or stylus)."_

[A Guide To Hover And Pointer Media Queries](https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/)

_"[Implementing an interactive element with relative small size] fine for desktop computers or laptops, even for a stylus device, but if you need to use your fingers, you’ll find choosing an option can be bothersome — you could select an option you don’t want because of that."_ [A Guide To Hover And Pointer Media Queries](https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/)

Desktop Environments with Touchscreens: Modern operating systems and hardware allow for desktop and laptop computers with touchscreens. These devices do have the capability to "hover" with a mouse or trackpad, even though they also support touch input. Therefore, `@media (hover: hover)` would evaluate to true on these devices, even though the user might primarily interact with them via touch. This could lead to a desktop-optimized interface being served when a touch-optimized one would be more appropriate.

`@media (hover: hover) and (pointer: fine)`: This combination reliably identifies those devices that has touchscreen but used by pointing device or stylus at the moment.

Example media query I finally used in my design for hover states:

```css
/* Enable hover only on non-touch devices */
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: var(--neutral-600);
    cursor: pointer;
  }
}
```

## Useful resources

**Sticky hover:**

- [Finally, a CSS only solution to :hover on touchscreens](https://itnext.io/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c)
- [Solving Sticky Hover States with @media (hover: hover)](https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/)
- [A Guide To Hover And Pointer Media Queries](https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/)
