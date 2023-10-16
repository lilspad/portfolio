import {home} from "./modules/home.js";
import {about} from "./modules/about.js";
import {work} from "./modules/work.js";
import { contact } from "./modules/contact.js";


function getContent(fragmentId, callback){

  var pages = {
    home: home.innerHTML,
    about: about.innerHTML,
    work: work.innerHTML,
    contact: contact.innerHTML
  };

  callback(pages[fragmentId]);
};



function loadContent(){

  const contentDiv = document.getElementById("content");
  let fragmentId = 'home';
  if (location.hash) {
    fragmentId = location.hash.substring(1);
  }
  const bg = document.querySelectorAll('.bg-inner.main')[0];
  getContent(fragmentId, function (content) {
    if (fragmentId === 'home') {
    contentDiv.innerHTML = content;
    } else {
      const panel = document.querySelectorAll('.panel')[0];
      bg.style.animation = 'spotlight-full 0.8s'
      panel.style.opacity = '0';
      setTimeout(() => {
        contentDiv.innerHTML = content;
      }, 700)
    }
  });

};

loadContent();

window.addEventListener("hashchange", loadContent);