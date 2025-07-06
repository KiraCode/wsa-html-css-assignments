// technology - programming logo
import css from "../technology/css.svg";
import html from "../technology/html.svg";
import github from "../technology/github.svg";
import live from "../technology/live.png";

// assignment images
import Assignment1 from '/Assignment/assignment-1/image.png';

export const assignment = [
  {
    title: "Assignment 1",
    description:
      "The web page which will redirect the user to another page automatically. The web page showing the information like keywords, description, and a title",
    image: Assignment1,
    view: {
      liveLink: '/Assignment/assignment-1/index.html',
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
