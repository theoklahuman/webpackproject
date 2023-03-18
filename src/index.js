import Newpage from "./homepage";

document.body.appendChild(new Newpage().makeheader());
document.body.appendChild(new Newpage().makeMenuOptions());
document.body.appendChild(new Newpage().makeRotatingPicturesSection());
document.body.insertAdjacentElement("beforeend", (new Newpage().makeHomepageBody()));
document.body.appendChild(new Newpage().makeFooter());