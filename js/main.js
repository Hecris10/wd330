const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html"
  }
];


function indexLoad(){
  const ol = document.querySelector("#linksList");

  links.forEach(Link => {
    const link = document.createElement('li');
    const href = document.createElement("a");
    href.setAttribute('href',Link.url);
    href.innerText = Link.label;

   link.appendChild(href);
   ol.appendChild(link);
  })
}