import {home} from "./modules/home.js";
import {about} from "./modules/about.js";
import {work} from "./modules/work.js";


function getContent(fragmentId, callback){

  var pages = {
    home: home.innerHTML,
    about: about.innerHTML,
    work: work.innerHTML,
    contact: "Contact me on this page if you have any questions"
  };

  callback(pages[fragmentId]);
};



function loadContent(){

  const contentDiv = document.getElementById("content");
  let fragmentId = 'home';
  if (location.hash) {
    fragmentId = location.hash.substring(1);
  }

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

};

loadContent();

window.addEventListener("hashchange", loadContent);