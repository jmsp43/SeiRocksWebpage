// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
// ]

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

// In the Intro to the DOM we selected, manipulated and created DOM elements - this lab provides practice doing the same.

// This is the first of a two-part lab that builds a menu bar with a slide-down submenu.

// Tasks

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

// mainEl.textContent = '<h1>SEI Rocks!</h1>'
//textContent shows the entire string
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//innerHTML shows inside the tags themselves

// Task 1.3
// Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList.add("flex-ctr");
console.log(mainEl.classList);

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector("#top-menu");

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-aroundto topMenuEl.

topMenuEl.classList.add("flex-around");

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

//previous attempt
// for (let i = 0; i < menuLinks.length; i++){
//     const a = document.createElement('a')
//     a.setAttribute('href', menuLinks[i].href)
//     //element.setAttribute('name', 'value')
//     //name of attribute, new attribute value
//     a.textContent = menuLinks[i].text
//     topMenuEl.appendChild(a)
// }

//for in loop did not work because for in is
//referencing index
for (const link of menuLinks) {
  const a = document.createElement("a");
  a.href = link.href;
  a.innerHTML = link.text;
  topMenuEl.append(a);
}

///////////
//part 2 of HW

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.querySelector("#sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.

subMenuEl.classList.add("flex-around");

//Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.top = "0";

// Task 5.0
// Update the menuLinksarray in script.js.
//done

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
// Declare a global showingSubMenuvariable and initialize it to false;

const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
//delegated = bubbling
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.

// topMenuEl.addEventListener('click', function (event) {
//     // Attach a delegated 'click' event listener to topMenuEl.
//     //delegated = bubbling
//     event.preventDefault()
//     // The first line of code of the event listener function should call the event object's preventDefault()method.
//     if (event.target.tagName !== 'A') {
//         return
//     }
//     //tamara to the rescue showed me that 'a' needs to be capitalized bc its a tag name
//     // The second line of code function should immediately return if the element clicked was not an <a>element.
//     console.log(event.target.innerHTML)
//     // console.logthe content of the <a>to verify the handler is working.
//     //console.log(event.target.innerText) spits out ACCOUNT, ORDERS, etc
//     // whereas console.log(event.target.innerHTML)
//     //spits out account, orders, etc.
// })

// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
// Clicking anywhere other than on a link should do nothing.

// Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:
// Remove the activeclass from the clicked <a>element.
// Set the showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// returnto exit the handler.

// topMenuEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     if (event.target.tagName !== 'A') {
//         return
//     }
//     console.log(event.target.innerHTML)
//     // Next in the event listener, if the clicked <a>link has a class of active:
//     if (event.target.className === ('active')) {
//         target.classList.remove('active')
//         //remove active class from clicked <a> element
//         showingSubMenu = false
//         // Set the showingSubMenuto false.
//         subMenuEl.style.top = '0'
//         // Set the CSS topproperty of subMenuElto 0.
//         return
//         // return to exit the handler.
//     }
//     console.log(event.target.classList)
//     //how to check if class list has active in it??
// })

// Task 5.4
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

// topMenuEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     if (event.target.tagName !== 'A') {
//         return
//     }
//     //console.log('clicked')
//     //console.log(event.target.innerHTML)
//     //console.log(topMenuLinks)
//     if (event.target.className === ('active')) {
//         target.classList.remove('active')
//         showingSubMenu = false
//         subMenuEl.style.top = '0'
//         console.log(target.classList)
//         return
//     }
//     //why is childElementCount not working
//     //idk, but length works
//     for (let i = 0; i < topMenuLinks.length; i++) {
//         topMenuLinks[i].classList.remove('active')
//         console.log('hello')
//     }
//     // Next, the event listener should remove a class name of active from each <a> element in topMenuLinks- whether the activeclass exists or not.
//     // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
// })

// Task 5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked.

// topMenuEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     if (event.target.tagName !== 'A') {
//         return
//     }
//     //console.log(event.target.innerHTML)
//     if (event.target.className === 'active') {
//         target.classList.remove('active')
//         showingSubMenu = false
//         subMenuEl.style.top = '0'
//         return
//     }
//     for (let i = 0; i < topMenuLinks.length; i++) {
//         topMenuLinks[i].classList.remove('active')
//     }
//     event.target.classList.add('active')
//     // Next, the event listener should add a class name of activeto the <a>element that was clicked.
// })

// Task 5.6
// Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

// topMenuEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     if (event.target.tagName !== 'A') {
//         return
//     }
//     //console.log(event.target.innerHTML)
//     if (event.target.className === 'active') {
//         event.target.classList.remove('active')
//         showingSubMenu = false
//         subMenuEl.style.top = '0'
//         return
//     }
//     for (let i = 0; i < topMenuLinks.length; i++) {
//         topMenuLinks[i].classList.remove('active')
//     }
//     event.target.classList.add('active')
// // Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
//     //event.target prints <a> element itself
//     //event.target.href prints link of page itself

//     const linkObj = menuLinks.find(link => link.text === event.target.text)
//     //originally did menuLinks.find(link => link.hasOwnProperty('subLinks')) but that just gave me the FIRST one that was true for (aka catalog) so I had to check if the text of what I was clicking matched first and then i could check if it has the subLinks property
//     //console.log(linkObj)
//     if (linkObj.hasOwnProperty('subLinks') == true) {
//         showingSubMenu = true
//         //console.log('hello')
//         //get 3 hellos (when clicking catalog, orders, and account)
//     } else {
//         showingSubMenu = false
//         //console.log('hey')
//         //get 1 hey (when clicking about)
//     }
// })
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

// Progress Check
// Clicking any of the links should make that link "active" and clear the others:
// Clicking an "active" link should clear that link.

// Task 5.7
// Next in the event listener...
// If showingSubMenuis true:
// Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
// Set the CSS topproperty of subMenuElto 100%.
// Otherwise (showingSubMenuis false):
// Set the CSS topproperty of subMenuElto 0.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   //console.log(event.target.innerHTML)
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   //console.log(subLinksArr)
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu() {
//       //pass subLinksArr into here
//       // Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
//     }
//     subMenuEl.style.top = "100%";
//     // Set the CSS topproperty of subMenuElto 100%.
//   } else {
//     subMenuEl.style.top = "0";
//     // Set the CSS topproperty of subMenuElto 0.
//   }
// });

// Task 5.8
// Code the buildSubMenufunction so that it:
// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       // Clears the contents of subMenuEl.
//       subLinksArr.forEach(linkObj => {
//         // Iterates over the subLinksarray passed as an argument; and for each "link" object:
//         const subA = document.createElement("a");
//         // Create an <a>element.
//         subA.href = linkObj.href;
//         // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
//         subA.textContent = linkObj.text;
//         // Set the new element's content to the value of the textproperty of the "link" object.
//         subMenuEl.appendChild(subA);
//         // Append the new element to the subMenuElelement.
//       });
//       }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }
// });

// Progress Check
// Take the menu for a test drive!

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       subLinksArr.forEach((linkObj) => {
//         const subA = document.createElement("a");
//         subA.href = linkObj.href;
//         subA.textContent = linkObj.text;
//         subMenuEl.appendChild(subA);
//       });
//     }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }

//     // Attach a delegated 'click' event listener to subMenuEl.

//     subMenuEl.addEventListener('click', function (event) {
//             // The first line of code of the event listener function should call the event object's preventDefault()method.
//         event.preventDefault()
//             // The second line of code function should immediately return if the element clicked was not an <a>element.
//         if (event.target.tagName !== "A") {
//             return
//         }
//         console.log(event.target.textContent)
//             // console.logthe content of the <a>to verify the handler is working.

//   })

// });

// Task 6.1
// Next, the event listener should:
// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       subLinksArr.forEach((linkObj) => {
//         const subA = document.createElement("a");
//         subA.href = linkObj.href;
//         subA.textContent = linkObj.text;
//         subMenuEl.appendChild(subA);
//       });
//     }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }

//   subMenuEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.tagName !== "A") {
//       return;
//     }
//       console.log(event.target.textContent);
//       // Next, the event listener should:
//       showingSubMenu = false
//       subMenuEl.style.top = '0'
//     // Set showingSubMenuto false.
//     // Set the CSS topproperty of subMenuElto 0.
//   });
// });

// Task 6.2
// Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       subLinksArr.forEach((linkObj) => {
//         const subA = document.createElement("a");
//         subA.href = linkObj.href;
//         subA.textContent = linkObj.text;
//         subMenuEl.appendChild(subA);
//       });
//     }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }

//   subMenuEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.tagName !== "A") {
//       return;
//     }
//     console.log(event.target.textContent);
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     for (let i = 0; i < topMenuLinks.length; i++) {
//         topMenuLinks[i].classList.remove("active");
//     }
//       // Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
//   });
// });

// Task 6.3
// Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName !== "A") {
//     return;
//   }
//   if (event.target.className === "active") {
//     event.target.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
//   for (let i = 0; i < topMenuLinks.length; i++) {
//     topMenuLinks[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
//   const linkObj = menuLinks.find((link) => link.text === event.target.text);
//   let subLinksArr = linkObj.subLinks;
//   if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       subLinksArr.forEach((linkObj) => {
//         const subA = document.createElement("a");
//         subA.href = linkObj.href;
//         subA.textContent = linkObj.text;
//         subMenuEl.appendChild(subA);
//       });
//     }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }

//   subMenuEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.tagName !== "A") {
//       return;
//     }
//     console.log(event.target.textContent);
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     for (let i = 0; i < topMenuLinks.length; i++) {
//       topMenuLinks[i].classList.remove("active");
//     }
//     // Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.
//     mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
//   });
// });

// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

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
    // If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
    // if (event.target.innerText === "about") {
    //   mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
    // }
  });
});

// Congrats!
