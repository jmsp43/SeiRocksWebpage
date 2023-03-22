var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");
console.log(mainEl.classList);

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

for (const link of menuLinks) {
  const a = document.createElement("a");
  a.href = link.href;
  a.innerHTML = link.text;
  topMenuEl.append(a);
}

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  if (event.target.className === "active") {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  event.target.classList.add("active");
  const linkObj = menuLinks.find((link) => link.text === event.target.text);
  let subLinksArr = linkObj.subLinks;
  if (linkObj.hasOwnProperty("subLinks") == true) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
  }
  if (showingSubMenu === true) {
    function buildSubMenu(subLinksArr) {
      subMenuEl.innerHTML = "";
      subLinksArr.forEach((linkObj) => {
        const subA = document.createElement("a");
        subA.href = linkObj.href;
        subA.textContent = linkObj.text;
        subMenuEl.appendChild(subA);
      });
    }
    buildSubMenu(subLinksArr);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.textContent);
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove("active");
    }
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
  });
});
