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

const details = [
  {
    id: 1,
    description:
      "The web page which will redirect the user to another page automatically. The web page showing the information like keywords, description, and a title",
    fileNames: ["index.html", "redirected.html"],
  },
  {
    id: 2,
    description:
      "To Web page to display the name of six cities with different headings and minimum five sentences for each city",
    fileNames: ["index.html"],
  },
  {
    id: 3,
    description:
      "For this HTML classwork, you need to create a webpage where each image serves as a clickable area. When a user clicks on an image(HTML,CSS,JS), it should open a different webpage related to that image.",
    fileNames: ["index.html"],
  },
  {
    id: 4,
    description:
      "pre tag : Create a basic HTML code structure using the <code> tag.",
    fileNames: ["index.html"],
  },
  {
    id: 5,
    description: `Create a recipe page using HTML and CSS based on the provided template.`,
    fileNames: ["index.html"],
  },
  {
    id: 6,
    description: `Write the form as depicted in the below image`,
    fileNames: ["index.html",'style.css'],
  },
];

export const assignment = details.map(({ id, description, fileNames }) => ({
  id,
  title: "Assignment ",
  image: imageName(id),
  description,
  view: {
    liveLink: assignmentHtml(id),
    gitLink: assignmentHtml(id),
    gitIcon: github,
    liveIcon: live,
  },
  fileNames,
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
}));
