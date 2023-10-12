import createElement from "./create.js";

const text1 = "";
const text2 = "";

const heading1 = createElement("h2", "A LITTLE BIT ABOUT ME", [["class", "heading"]]);
const content1 = createElement("p", text1);

const heading2 = createElement("h2", "A LITTLE BIT ABOUT CODE", [["class", "heading"]]);
const content2 = createElement("p", text2);

const card1 = createElement("div", "", [["id", "about"]], [heading1, content1]);
const card2 = createElement("div", "", [["id", "about"]], [heading2, content2]);

export const about = createElement("div", "", [["id", "about"]], [card1, card2]);