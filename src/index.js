import Newpage from "./homepage";

document.body.appendChild(new Newpage().makeheader());
document.body.appendChild(new Newpage().makeMenuOptions());
document.body.appendChild(new Newpage().makeRotatingPicturesSection());
document.body.insertAdjacentElement("beforeend", (new Newpage().makeHomepageBody()));
document.body.appendChild(new Newpage().makeFooter());

const menuButton = document.querySelector(".menu-button");
const menuOptions = document.querySelector(".menu-options");
const rotatingPicturesSection = document.querySelector(
  ".rotating-pictures-section"
);
const homepagePicturesSection = document.querySelector(
  ".homepage-pictures-section"
);
// const callToActionSection = document.querySelector(".call-to-action__section");
const footerMainMessage = document.querySelector(".footer-main-message");
const homepageContactInfoSection = document.querySelector(
  ".homepage-contact-info-section"
);
const footer = document.querySelector("footer");

menuButton.addEventListener("click", expandMenuButton);

function expandMenuButton() {
  rotatingPicturesSection.classList.toggle("invisible");
//   callToActionSection.classList.toggle("invisible");
  footerMainMessage.classList.toggle("invisible");
  homepageContactInfoSection.classList.toggle("invisible");
  homepagePicturesSection.classList.toggle("invisible");
  menuOptions.classList.toggle("visible");
  footer.classList.toggle("white-theme");
}
