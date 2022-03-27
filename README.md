# Random Password Generator

This project is written in vanilla JavaScript with HTML and CSS markup.

It allows the user to generate a random unique password and copy it to the clipboard.

## The site consists of eight total Components:

* **App**, which renders all other components in React Router
* **Header**, **Footer**, and **ContactBar** which persist through all routes when viewed in desktop (ContactBar is not visible in mobile unless the user opens it).
     - Header contains links to the three main pages; the currently active link will appear in bold
    - ContactBar contains four active links (email opens the users email client, phone opens the users phone dialer on mobile, Linkedin and GitHub are active links to my respective profiles on those sites).
* Three main pages (**BusinessCard** which is the home page, **Portfolio** containing links to other projects, and **About** which offers some background info on myself).
* **ContactForm**, which is accessible by clicking the 'Contact:' heading in the ContactBar

## The site is designed to be responsive to screen size (desktop vs mobile) in three ways:
   * **`CSS flexbox styling`** adapts the layout to display eye-appealing flow in any screen size, orientation, or aspect ratio.  You can test this by adjusting your browser window to any size, or by visiting the site on mobile side-by-side with desktop.
   * **`CSS media queries`**  change the CSS properties of some elements based on screen size
   * **`A custom React hook`**  "listens" for the size of the browser window and conditionally renders elements based on that size.  This hook mimics the classic media query, but is written in JavaScript, making it more powerful and able to render items conditionally based on screen size match.

All links are styled to flow with the theme of the site (default blue color and underline are removed); all links behave consistently with one another, with styling that responds to mouse hover, becomes bold when clicked (active), and returns to the original state when not active.  There is one 'Easter Egg' link:  clicking on my name in the center of the home page takes the user to the About page.
