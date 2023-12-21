import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marianmrva.com", // replace this with your deployed domain
  author: "Marian Mrva",
  desc: "Marian Mrva - Software Engineer and Consultant. Enhancing the world through quality software and building outstanding products for individuals and companies. Blog featuring insights on JavaScript, Typescript, React, NextJS, and architecture. Explore my thoughts on technology.",
  title: "Marian Mrva",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/surfer19",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marianmrva/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:info@marianmrva.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
