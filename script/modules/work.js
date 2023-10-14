import createElement from "./create.js";

const projects = [
  {
    type: "e-commerce site",
    name: 'Modest',
    techStack: [
      'React',
      'node',
      'express.js',
      'Sass',
      'Stripe API'
      ],
    src: "https://modestskincare.netlify.app/" 
  },
  {
    type: "food app model",
    name: 'OhMyFood',
    techStack: [
      'Mock-up',
      'Animations',
      'Sass',
      'Responsive Design'
    ],
    src: "https://lilspad.github.io/Paczesniak_Lily_2_16-08-23_A/" 
  },
  {
    type: "drawing app",
    name: 'Doodle',
    techStack: [
      'HTML Canvas',
      'Vite',
      'Vanilla JS',
      'Tailwind'
    ],
    src: "https://a-drawing-app-lilspad.vercel.app/"
  },
  {
    type: "company website",
    name: 'Capricious',
    techStack: [
      'SQL',
      'node',
      'Widgets',
      'Vanilla HTML, CSS and JS'
    ],
    src: "https://capricious.netlify.app/src/html/plants/plants.html"
  }
]

const other = [
  {
    name: 'This portfolio',
    src: ''
  },
  {
    name: 'PyTree " CLI',
    src: '',
  },
  {
    name: 'Booki | Mock-up',
    src: ''
  },
  {
    name: 'Flickr | Clone Site',
    src: ''
  },
  {
    name: 'KoiBoi | Tiny Game',
    src: ''
  },
  {
    name: 'Repositories ➭',
    src: '',
    class: 'lib'
  },
  {
    name: 'Pens ➭',
    src: '',
    class: 'lib'
  }
]

const createStack = (list) => {
  const accumulator = [];
  for (let i = 0; i < list.length; i++) {
    const   item = createElement('li', list[i], [["class", "tech fs-1"]]);
    accumulator.push(item);
  }
  return accumulator;
}

const createLinks = (objArr) => {
  const otherList = createElement('ul', '', [['class', 'flex wrap g-10 pad-30']]);
  const libs = createElement('ul', '', [['class', 'flex wrap g-10 pad-30']]);
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].class) {
      const item = createElement('a', objArr[i].name, [['href', objArr[i].src], ['target', '_blank'], ['class', 'btn bw hover-bw fs-1 other-link']])
      libs.append(item);
    } else {
      const item = createElement('a', objArr[i].name, [['href', objArr[i].src], ['target', '_blank'], ['class', 'btn bw hover-bw fs-1 other-link']])
      otherList.append(item);
    }
    
  }
  return [otherList, libs];
}

const createProjectCard = (p) => {
  const head1 = createElement('h3', p.type, [['class', 'fs-n8']]);
  const head2 = createElement('h2', p.name, [['class', 'heading big']]);
  const caption = createElement('div', '', [['class', 'caption']], [head1, head2]);
  const list = createElement('ul', '', [['class', 'flex wrap g-10 m-top-20']], createStack(p.techStack));
  const link = createElement('a', 'See more ➭', [['href', p.src], ['target', '_blank'], ['class', 'btn fs-1 demo']])

  const project = createElement('div', '', [['class', 'card project flex col pos-rel rounded-reg']], [caption, list, link]);
  return project;
}

const otherCard = createElement('div', '<h3 class="caption fs-1">Other projects</h2>', [['class', 'card project other flex col jus-between pos-rel rounded-reg']], createLinks(other))

const panel = createElement('div', '', [['class', 'panel panel-work flex wrap g-20 ag-c jus-c']]);

for (let i = 0; i < projects.length; i++) {
  const project = createProjectCard(projects[i])
  panel.append(project);
}
panel.append(otherCard);

export const work = createElement('div', '', [], [panel]);