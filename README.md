# Monaki NFT - [Live Project](https://monakinft.vercel.app/)

This project is based on the prototype from [Nickelfox Design](https://www.figma.com/@nickelfox), and here are the references: [link 1](https://www.figma.com/community/file/1185470845735224187) and [link 2](https://www.figma.com/community/file/1176545097659272549).

![Frames](https://res.cloudinary.com/frank2021/image/upload/v1673965406/group8-imgery/Frames_ckq30q.png)

## Introduction

This project was developed in order to achieve the learning outcomes for the course, The First Single-Page App, from Hyper Island.\
 We have a received a prototype from the industry leader, in which we had to re-create and add some functionality using a [React](https://reactjs.org/) application. Thou we have used a [NextJS](https://nextjs.org/) for this project, it still runs on react with some extra functionality out of the box, including SEO optimization and other cool features.

### What is React?

A JavaScript library for building user interfaces, that uses a component based structure that works in a DECLARATIVE way, making the process of building applications a lot easier and seamless.

### What is NextJS?

Next.js is a flexible (React framework) that gives you building blocks to create fast web applications, which provides a bunch of features out of the box.

## ES7 Syntax

In this project we have made use of several modern JavaScript syntax elements, such as arrow functions, components, props and so on.

## NPM Packages

### What is NPM?

NPM or Node Package Manager is used in a development environment to add extra packages to your application.\
NPM is also used to manage React applications, for example: spinning the development server or building your project for production. It's a very useful tool managed and created by the NODE team.

### Packages used in this project:

- [Ant Design](https://ant.design/)\
  It provides some stable and highly reusable UI components, making the development phase smoother.

- [sass](https://sass-lang.com/)\
  Sass is a CSS pre-processor. Sass reduces repetition of CSS and therefore saves time. (You can nest CSS styles as well)

- [react-responsive-carousel](http://react-responsive-carousel.js.org/)\
  Powerful, lightweight and fully customizable carousel component for React applications.

- [hamburger-react](https://hamburger-react.netlify.app/)\
  Hamburger menu icons for React, with CSS-driven transitions. Created to be as elegant as possible. This means no JavaScript animations, no transitions on non-cheap properties and a small size.

- [react-simple-typewriter](https://react-simple-typewriter.vercel.app/?path=/story/introduction--page)\
  A simple react component for adding a nice typewriter effect to your project

- [react-timer-hook](https://github.com/amrlabib/react-timer-hook#readme)\
  React timer hook is a custom react hook, built to handle timer, stopwatch, and time logic/state in your react component.
  - `useTimer`: Timers (countdown timer)
  - `useStopwatch`: Stopwatch (count up timer)
  - `useTime`: Time (return current time)

## Local Development Server - [localhost:3000](http://localhost:3000/)

A server stores, sends, and receives data. In essence, it "serves" something else and exists to provide services.\
In React, while in development, the local development server simulates the production application in the developer's
browser to provide auto updating whenever changes are made, and it can be brought up by running the command `npm start` in React or `npm run dev` in NextJS.

## Component Lifecycle

Lifecycle methods are custom functionality that gets executed during the different phases of a component.\
 There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.\
 We can achieve the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` using the `useEffect()` hook. \
 In the example below, the useEffect hook, monitors the changes in the state of a variable, and executes an specific block of coding according to the variable's state.\
 ![useEffect](https://res.cloudinary.com/frank2021/image/upload/v1674036000/group8-imgery/useEffect_ok2jj9.png)

## SPAs - Single Page applications

An SPA (Single-page application) is a web app implementation that loads only a `single web document`, and then updates the body content of that single document via `JavaScript`.\
This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some trade off disadvantages such as SEO.\
This SPA we have implemented uses a framework called NextJS, which comes with some features that doesn't present on a pure React application. Therefore, [SEO](#seo-search-engine-optimization) has not been an issue.

## SEO-Search Engine Optimization

SEO (Search Engine Optimization) is the process of making a website more visible in search results, also termed improving search rankings.

Search engines crawl the web, following links from page to page, and index the content found. When you search, the search engine displays the indexed content. Crawlers follow rules. If you follow those rules closely when doing SEO for a website, you give the site the best chances of showing up among the first results, increasing traffic and possibly revenue.

In our application, we have used NextJS to render the project content statically, meaning it uses SSR, Server Side Rendering, to pre fetch it's content,
making the application more SEO friendly.

NextJS:

![NextJS_source_code](https://res.cloudinary.com/frank2021/image/upload/v1674038118/group8-imgery/next_source_t8zhtl.png)

Pure React:

![React_source_code](https://res.cloudinary.com/frank2021/image/upload/v1674038118/group8-imgery/react_source_jpriqd.png)

To optimize SEO, we have added in the `<head>` section to our page, including the basic necessary meta tags.

![head_section](https://res.cloudinary.com/frank2021/image/upload/v1674038793/group8-imgery/head_tags_d2k9jr.png)

## Naming Conventions

Names of components start with upper case. Use pascal case for component names. A component as well as file names in React should always be with pascal case.

## Deployment

> Know how to publishing websites.

We deployed to [Vercel](https://monakinft.vercel.app/)

## GitHub

## Description of Course Goals

Understand and know how to utilize modern JavaScript Syntax.
(component, arrow function, de-structuring ...)

Understand and know how to utilize Node Package Manager NPM and how to install 3rd party libraries.

Understand what a server is and know how to set up a local development server.

Understand the Component life cycle in React.

Understand what is a Single-Page Application.

Understanding the benefits of naming conventions.

Know how to use Search Engine Optimisation in a single-page application.

Know how to publishing websites.
