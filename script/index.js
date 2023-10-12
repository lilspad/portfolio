import {about} from "./modules/about.js";


function getContent(fragmentId, callback){

  var pages = {
    about: about.innerHTML,
    work: "This page will describe what my site is about",
    contact: "Contact me on this page if you have any questions"
  };

  callback(pages[fragmentId]);
};



function loadContent(){

  var contentDiv = document.getElementById("app"),
      fragmentId = location.hash.substring(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

};

loadContent();

window.addEventListener("hashchange", loadContent);