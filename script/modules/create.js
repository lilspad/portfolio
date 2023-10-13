export default function createElement(tag, inner='', attr=[], children=[]) {
  const element = document.createElement(tag);

  if (inner) {
    element.innerHTML = inner;
  }
  
  if (attr) {
    attr.forEach((a) => {
      element.setAttribute(a[0], a[1]);
    })
  }

  if (children) {
    children.forEach((c) => {
      element.appendChild(c);
    })
  }
  
  return element;
}