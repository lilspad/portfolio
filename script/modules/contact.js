import createElement from "./create.js";
import { form } from "./contact-form.js";
import { homeButton } from "./home-button.js";

const panel = createElement(
    'div',
    '',
    [['class', 'panel panel-contact flex jus-c ag-c']],
    [form]
)

export const contact = createElement(
    'div',
    '',
    [],
    [homeButton.cloneNode(true), panel]
)