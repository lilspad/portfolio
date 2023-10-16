import createElement from "./create.js";

const head1 = createElement('h1', "I'm Lily.", [['class', 'heading huge off']]);
const head2 = createElement('div', '<span>A De</span><div class="wrapper"><div class="orbit"><p class="v">v</p></div></div>eloper', [['class', 'heading huge flex']]);
const head3 = createElement('h2', 'and an <span class="head-sh-g">artist</span>.', [['class', 'txt-right head-art']]);

const link = createElement("a", ("HAVE A LOOK"), [["class", "btn home-btn m-auto fs-2 thin"], ["href", "#work"]]);

const div = createElement('div', '', [['class', 'heads']], [head1, head2, head3])

const inner = createElement('div', '', [['class', 'inner flex col ag-c jus-between']], [div, link])

const panel = createElement('div', '', [['class', 'panel panel-home flex col ag-c jus-c bg-spot']], [inner, createElement('div', '', [['class', 'bg-inner']])])

export const home = createElement('div', '', [], [panel, createElement('div', '', [['class', 'bg-inner main reverse']])])