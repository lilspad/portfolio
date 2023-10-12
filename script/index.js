import {home} from "./modules/home.js";
import {about} from "./modules/about.js";


function getContent(fragmentId, callback){

  var pages = {
    home: home.innerHTML,
    about: about.innerHTML,
    work: "This page will describe what my site is about",
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