# moveable div
a library for making moveable divs in js. I suppose you could use it for games or something.
# <a href="moveablediv-lib.js">Download</a>
<h2>Usage</h2>
Create a DIV using `mydiv = new moveablediv(WIDTH, HEIGHT, CX, CY, ANGLE, CSS_UNIT_TYPE);` and use `HTMLElement.appendChild` to add it to the DOM. Make sure the parent element has position fixed, absolute, or relative. Use `mydiv.x`, `mydiv.y`, `mydiv.width`, `mydiv.height` or `mydiv.angle` to set or read the properties of the DIV. Angles are in radians.