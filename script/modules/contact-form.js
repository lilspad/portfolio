import createElement from './create.js';

const divDeets = createElement(
    'div',
    '<label for="name">Your name:</label>' +
    '<input autocomplete="on" type="text" name="name" placeholder="Full Name" id="name">' +
    '<label for="email">Your email address:</label>' +
    '<input autocomplete="on" type="email" name="email" placeholder="Email address" id="email">' +
    '<label for="subject">Subject:</label>' +
    '<input type="text" name="subject" placeholder="Subject" id="subject">',
    [['class', 'flex g-10 col form-div']],
    []
)

const divText = createElement(
    'div',
    '<label for="message">Your message:</label>' +
    '<textarea name="message" type="text" placeholder="Message" id="message"></textarea>',
    [['class', 'flex g-10 col form-div']],
    []
)

const submit = createElement(
    'div',
    '<input type="submit" value="SEND" id="submit"> ',
    [['class', 'btn g hover-g']]
)

export const form = createElement(
    'form',
    '', 
    [['method', 'post'],
    ['name', 'contact-form'], 
    ['action', 'https://formspree.io/f/xyyajgol'],
    ['class', 'card flex g-20 col ag-c jus-c bg-w pad-30 rounded-reg'],
    ['id', 'contact-form']],
    [divDeets, divText, submit]
    );

