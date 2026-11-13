# INFR3120 Assignment 2 — Express Portfolio

## Overview

This website was created for my Assignment 2 in Web and Script Programming using Node.js, Express, and EJS. It introduces my background and interests, shows five projects I have worked on, and provides a way to contact me.

Website Link: https://infr3120-portfolio-a2.onrender.com
Repository Link: https://github.com/sebastienmarion1/INFR3120-portfolio-a2

## Structure

My website contains four pages:

1. A home page with a short introduction.
2. An About me page with my background, interests, and a portrait.
3. A Projects page that describes five projects I've worked on.
4. A Contact Me page that has a clickable email address that opens an email draft.

Each page includes navigation in the header and links to GitHub and LinkedIn in the footer.

## Bootstrap for Design

I used Bootstrap's container class to give the navigation, main content, and footer a consistent width. With a phone or tablet, the text will use the space it has with padding on the side, then with a desktop, the text is centered. 

The navigation links wrap onto another line if there isn't enough room. On my About Me page, I used the img-fluid class from Bootstrap so my portrait can fit in whatever space is available.

## Sources and Changes

I used Express Generator as instructed to create the starter project with EJS. I used the MEAN Stack Development lecture to understand how Express renders the EJS views.

I referenced the lecture file from Week 3, semantic.html, for a reference on making a clickable link.

I used Bootstrap as explained earlier for the navigation and responsive layout. I also used Font Awesome Free as instructed for the GitHub and LinkedIn icons in the footer.

I reused my own portrait and project descriptions from Assignment 1. I followed the same structure as the starter code to create the About Me, Projects, and Contact Me. I moved the navigation and footer into shared partials so that I could update them in one place and not have to go through every page individually. (To do this I used EJS's include() feature, from the https://ejs.co/docs/#header-and-footer site. )

## Deployment

To run my portfolio and test it on my PC, I used the command npm.cmd start to run the site then went to http://localhost:3000/ in Chrome to see it live. 

I deployed my portfolio to Render as a Node Web Service, connected to the main branch of my GitHub repository.

## Testing

I opened my portfolio on Render and used the navigation to check the Home, About Me, Projects, and Contact Me pages. I made sure they all loaded and were readable.

I checked that both the GitHub and LinkedIn icons appeared in the shared footer and that both links opened the correct profiles. On the Contact Me page, I clicked my email to make sure it opened a draft addressed to me.