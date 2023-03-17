export default class Newpage {
  constructor(name) {
    this.name = name;
  }

  makeheader() {
    const header = document.createElement("header");
    header.innerHTML = "Ts Stone Company";
    return header;
  }

  makeSection() {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis. Ultrices vitae auctor eu augue. Vulputate eu scelerisque felis imperdiet proin fermentum. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Et magnis dis parturient montes nascetur ridiculus mus mauris.`;
    section.appendChild(paragraph);
    return section;
  }
}
