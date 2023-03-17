import Newpage from "./homepage";
import "./style.css";
import mcdBg from "./mcd-bg.jpg";
import logo from "./mcd.jpg";

function makeNewHeader() {
  const newHeader = new Newpage().makeheader();
  new Newpage().makeSection();
  const mainLogo = new Image();
  mainLogo.id = "main-logo";
  mainLogo.src = logo;
  newHeader.insertAdjacentElement("afterbegin", mainLogo);
  const menuButton = document.createElement("div");
  menuButton.className = "menu-button";
  for (let i = 0; i < 3; i++) {
    const hamburgerLine = document.createElement("span");
    menuButton.insertAdjacentElement("beforeend", hamburgerLine);
  }
  newHeader.insertAdjacentElement("beforeend", menuButton);

  // const mainPicture = new Image();
  // mainPicture.src = mcdBg;
  // // newHeader.appendChild(mainPicture);
  // const newSection = new Newpage().makeSection();
  // newHeader.appendChild(newSection);
  return newHeader;
}

function makeBody() {
  const newBody = new Newpage().makeSection();
  const mainPicture = new Image();
  mainPicture.src = mcdBg;
  newBody.insertAdjacentElement("afterbegin", mainPicture);
  return newBody;
}

document.body.appendChild(makeNewHeader());
document.body.appendChild(makeBody());
