import createElement from "./create.js";

let projects = [];

for (let i = 0; i < 3; i++) {
  let project = createElement("p", ("project " + i));
  projects.push(project);
}