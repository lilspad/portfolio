import createElement from "./create.js";

const text1 = "Hi! 👋 I'm Lily, a software engineer learning, creating and enjoying life in London. As any good escapist I love films, games and music, but I also have an abnormal creativity level which leads me to make... well, anything from bread to knitwear to websites. I've worked in the coffee industry for almost 7 years, so I can also make a great pick-me-up in a mug. However, I decided to finally leave hospitality to pursue a career in tech.";

const text2 = "I first came face-to-face with coding in school, where I did extracurricular computer science. I learned Python basics I still remember to this day. Then I began a self-study journey in 2021, with many disruptions due to work-life (un)balance. Using resources across the web I learned how to build websites using HTML, CSS and JavaScript, as well as their many extensions, libraries and frameworks. <br><br>I then completed a bootcamp with OpenClassrooms, where I learnt to make my code more efficient and maintainable. Now I'm building new projects and improving on my skills while looking for my first professional role in the industry.";

const links = [
  {bootcamp: "../../media/credentials/proof-of-completion.pdf"}, 
  {courses: "https://www.linkedin.com/in/lily-paczesniak/details/certifications/"}, 
  {resume: "../../media/credentials/01LilyPaczesniak_CVNew.pdf"}
  ];

const linkElements = [];

links.forEach((link) => {
  let name = Object.keys(link).toString();
  name = name[0].toUpperCase() + name.slice(1); // Capitalize first letter

  const src = Object.values(link).toString();

  const linkElement = createElement("a", (name + " ➭"), [["class", "btn bw hover-bw"], ["href", src], ["target", "_blank"]]);
  linkElements.push(linkElement);
})

const heading1 = createElement("h2", "A LITTLE BIT ABOUT ME", [["class", "heading"]]);
const content1 = createElement("p", text1);

const heading2 = createElement("h2", "A LITTLE BIT ABOUT CODE", [["class", "heading"]]);
const content2 = createElement("p", text2);

const heading3 = createElement("h2", "CREDENTIALS", [["class", "heading"]]);
const content3 = createElement("div", "", [["class", "flex g-10"]], linkElements);
console.log(content3)

const headings = [heading1, heading2, heading3];
const content = [content1, content2, content3];

const cards = [];

for (let i = 0; i < headings.length; i++) {
  const card = createElement("div", "", [["class", "card"]], [headings[i], content[i]]);
  cards.push(card);
}

export const about = createElement("div", "", [["id", "about"]], cards);