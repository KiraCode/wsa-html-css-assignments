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
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 7,
    description: `Create the navbar as shown below`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 8,
    description: `Create the paragraph as depicted below and apply the css using pseudo classes.`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 9,
    description: `Create the navbar as depicted in the below image using pseudo elements. Create the line separator using pseudo elements. Required image is provided in the google drive link.`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 10,
    description: `Create the webpage shown in the below image using proper margin, padding and box-sizing if required. Make use of float and clear property. Completion requirements`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 11,
    description: `Create the following page using background property`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 12,
    description: `Create the following responsive webpage as shown in the below image. Required images are provided in drive.`,
    fileNames: ["index.html", "style.css"],
  },
  {
    id: 13,
    description: `Create the following layout using grid.`,
    fileNames: ["index.html", "style.css"],
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
