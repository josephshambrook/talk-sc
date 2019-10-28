# Persuading a CSS developer to use CSS-in-JS

Source code for my talk about being persuaded to use Styled Components.

## Talk description

The talk was my true story about my experiences of becoming more open to the concept of CSS-in-JS. [Here's a link to the slides](https://docs.google.com/presentation/d/1ETrJJ49IDHMVXT5OOFDYLBRvZlOEwgC_yXpho3tCMM0/edit?usp=sharing).

## What's here

I built several demos of Styled Components, to demonstrate how typical elements created with HTML+SCSS can be converted to Styled Components. The demo I ultimately settled on and polished is Layout, found in `src/Layout`. I made sure to use modern CSS tech such as Grid and Custom Properties, since I had no browser limitations.

The Layout demo shows how to create a standard website layout (header, main content area, sidebar and footer) using Styled Components. It's not fully representative of how a real-world application would look (I'd split each element into its own file for one thing), but it shows concepts such as style inheritance.

## Tricks whilst talking

This was a live demo, which can go horribly wrong in many ways, so I had a few backup strategies ready:

-   I wrote a guide in Markdown, found at `src/Layout/guide.md`, which served as a step-by-step guide to running the demo. I wrote this up in my physical notebook once it was finalised.
-   I added custom VS Code snippets (found in `.vscode/cheating.code-snippets`), which invoke helpful code snippets at key times, especially when the syntax is fiddly. Each snippet has a unique `prefix`, which is then referenced in the guide as to when they should be used. To use them, type `SC`, and select the snippet you want to paste (certain snippets only appear if the cursor is within the correct "context" - i.e. can only use `SC07` if cursor is in a block of CSS code)
-   I created a `cheating` folder, which contained copies of the `Layout.js` file as it would look at the end of each Part in the guide.

## Running locally

> I was running Node v11.15.0. If your version is different, you may encounter issues with installation or running the app
>
> I ran the demo in Chrome. Your experience may vary if you use a different browser, but modern browsers as of Oct 2019 should render the site just fine.

1.  Clone the repo and `cd` into it
2.  Install the dependencies; I used `yarn`, but you can use `npm i` if you want
3.  To run locally, run `yarn start`. The browser should open the site at `localhost:3000`
