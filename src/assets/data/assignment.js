// technology - programming logo
import css from "../technology/css.svg";
import html from "../technology/html.svg";
import github from "../technology/github.svg";
import live from "../technology/live.png";

const assignmentHtml = (i) => {
  return `/Assignment/assignment-${i}/index.html`;
};

const imageName = (i) => {
  return `/Assignment/assignment-${i}/image.png`;
};

export const assignment = [
  {
    title: "Assignment 1",
    description:
      "The web page which will redirect the user to another page automatically. The web page showing the information like keywords, description, and a title",
    image: imageName(1),
    view: {
      liveLink: assignmentHtml(1),
      gitLink: "https://github.com/KiraCode/travel-list",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
    ],
  },
  {
    title: "Assignment 2",
    description:
      "Ta Web page to display the name of six cities with different headings and minimum five sentences for each city",
    image: imageName(2),
    view: {
      liveLink: assignmentHtml(2),
      gitLink: "https://github.com/KiraCode/travel-list",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
    ],
  },
];
