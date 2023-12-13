import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marianmrva-com.pages.dev/", // replace this with your deployed domain
  author: "Marian Mrva",
  desc: "TODO:",
  title: "TODO:",
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
