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
      UlForMenuOptionsLi.textContent = item;
      ulForMenuOptionsA.appendChild(UlForMenuOptionsLi);
      ulForMenuOptions.insertAdjacentElement("beforeend", ulForMenuOptionsA);
    }

    menuOptionsSection.appendChild(ulForMenuOptions);
    return menuOptionsSection;
  }

  makeFooter() {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis. Ultrices vitae auctor eu augue. Vulputate eu scelerisque felis imperdiet proin fermentum. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Et magnis dis parturient montes nascetur ridiculus mus mauris.`;
    section.appendChild(paragraph);
    return section;
  }
}
