import "./style.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import logo from "./mcd.jpg";

export default class Newpage {
  constructor(name) {
    this.name = name;
  }

  makeheader() {
    const header = document.createElement("header");
    const headerDiv = document.createElement("div");
    headerDiv.id = "main-heading";
    const headerMain = document.createElement("h4");
    headerMain.textContent = "T-Stone company";
    const headerMainAboutInfo = document.createElement("p");
    headerMainAboutInfo.textContent =
      "This is some text about the company here and will update as needed";
    headerDiv.insertAdjacentElement("afterbegin", headerMain);
    headerDiv.insertAdjacentElement("beforeend", headerMainAboutInfo);
    header.appendChild(headerDiv);
    const mainLogo = new Image();
    mainLogo.id = "main-logo";
    mainLogo.src = logo;
    mainLogo.alt = "business logo";
    header.insertAdjacentElement("afterbegin", mainLogo);
    const menuButton = document.createElement("div");
    menuButton.className = "menu-button";
    for (let i = 0; i < 3; i++) {
      const hamburgerLine = document.createElement("span");
      menuButton.insertAdjacentElement("beforeend", hamburgerLine);
    }
    header.insertAdjacentElement("beforeend", menuButton);
    return header;
  }

  makeMenuOptions() {
    const menuOptionsSection = document.createElement("section");
    menuOptionsSection.className = "menu-options";
    const ulForMenuOptions = document.createElement("ul");
    const menuOptionsItems = [
      "Home",
      "About",
      "Community",
      "Store Locations",
      "Employment",
      "Contact",
    ];
    for (const item of menuOptionsItems) {
      const UlForMenuOptionsLi = document.createElement("li");
      const ulForMenuOptionsA = document.createElement("a");
      ulForMenuOptionsA.href = "#";
      UlForMenuOptionsLi.textContent = item;
      ulForMenuOptionsA.appendChild(UlForMenuOptionsLi);
      ulForMenuOptions.insertAdjacentElement("beforeend", ulForMenuOptionsA);
    }

    menuOptionsSection.appendChild(ulForMenuOptions);
    return menuOptionsSection;
  }

  makeRotatingPicturesSection() {
    const rotatingPicturesSection = document.createElement("section");
    rotatingPicturesSection.className = "rotating-pictures-section";
    rotatingPicturesSection.textContent = "Do you want a message here?";
    return rotatingPicturesSection;
  }

  makeHomepageBody() {
    const homepageBodySectionImages = document.createElement("main");
    homepageBodySectionImages.className = "homepage-pictures-section";
    const imagesForHomepageBodySection = [
      "homepage image1",
      "homepage image2",
      "homepage image3",
      "homepage image4",
      "homepage image5",
      "homepage image6",
    ];
    for (const images of imagesForHomepageBodySection) {
      const imageForHomepageBodySection = document.createElement("img");
      imageForHomepageBodySection.href = "#";
      imageForHomepageBodySection.alt = images;
      homepageBodySectionImages.insertAdjacentElement(
        "beforeend",
        imageForHomepageBodySection
      );
    }
    return homepageBodySectionImages;
  }

  makeFooter() {
    const facebookLogo = new Image();
    facebookLogo.src = facebook;
    facebookLogo.alt = "facebook logo";
    facebookLogo.className = "footer-logos";
    const instagramLogo = new Image();
    instagramLogo.src = instagram;
    instagramLogo.alt = "instagram logo";
    instagramLogo.className = "footer-logos";
    const twitterLogo = new Image();
    twitterLogo.src = twitter;
    twitterLogo.alt = "twitter logo";
    twitterLogo.className = "footer-logos";
    const homepageFooter = document.createElement("footer");
    const homepageFooterParagraph = document.createElement("p");
    homepageFooterParagraph.className = "footer-main-message";
    homepageFooterParagraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis. Ultrices vitae auctor eu augue. Vulputate eu scelerisque felis imperdiet proin fermentum. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Et magnis dis parturient montes nascetur ridiculus mus mauris.`;
    homepageFooter.appendChild(homepageFooterParagraph);
    const socialMediaLinksContainer = document.createElement("div");
    socialMediaLinksContainer.class = "social-media__links";
    const socialMediaLogos = [facebookLogo, instagramLogo, twitterLogo];
    for (const images of socialMediaLogos) {
      socialMediaLinksContainer.insertAdjacentElement("beforeend", images);
    }

    homepageFooter.insertAdjacentElement(
      "beforeend",
      socialMediaLinksContainer
    );
    const contactInfoSection = document.createElement("section");
    const contactInfoSectionContent = [
      "Phone: 405123456",
      "Mobile: 405654321",
      "Email: info@thisisjustatest.com",
    ];
    for (const info of contactInfoSectionContent) {
      const contactInfoDiv = document.createElement("div");
      contactInfoDiv.textContent = info;
      contactInfoSection.appendChild(contactInfoDiv);
    }
    homepageFooter.appendChild(contactInfoSection);
    return homepageFooter;
  }
}
