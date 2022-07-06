const title = document.querySelector("div.title:first-child h1");

function handleTitleClick(){
  const currentColor = title.style.color;
  let newColor;
  if (title.style.color === "blue"){
    title.style.color = "pink";
  }else {
    title.style.color = "blue";
  }
  title.style.color = newColor;
};
function handleMouseEnter(){
  title.innerText="Mouse is here!"
};
function handleMouseLeave(){
  title.innerText="Mouse is gone"
};
function handleWindowResize(){
  document.body.style.backgroundColor= "pink"
}
function handleWindowCopy(){
  alert("you are copier!!!")
};
function hadleWindowOffline(){
  alert("SOS no WIFI");
};
function hadleWindowOnline(){
  alert("ONLINE!!")
};
//자바스크립트는 항상 듣고있는다.

title.addEventListener("click",handleTitleClick);
//밑에처럼 addEventListener와 ("click")을 생략하고 바로 onclick으로 실행 할 수 있다.
title.onmouseenter=handleMouseEnter;
title.addEventListener("mouseleave",handleMouseLeave);
//function 실행시 handleTitleClick 뒤에 ()를 붙이지 않고 그냥 쓴다.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",hadleWindowOffline);
window.addEventListener("online",hadleWindowOnline);
