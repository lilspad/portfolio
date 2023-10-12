import createElement from "./create.js";

const head1 = createElement('h1', 'LILY PACZESNIAK', [['class', 'heading huge']]);
const head3 = createElement('h3', 'Web Dev', [['class', 'txt-right']]);

export const home = createElement('div', '', [], [head1, head3])