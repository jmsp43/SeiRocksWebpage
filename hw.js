var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
]

// In the Intro to the DOM we selected, manipulated and created DOM elements - this lab provides practice doing the same.

// This is the first of a two-part lab that builds a menu bar with a slide-down submenu.


// Tasks


// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main')

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)'


// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

// mainEl.textContent = '<h1>SEI Rocks!</h1>'
//textContent shows the entire string
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
//innerHTML shows inside the tags themselves

// Task 1.3
// Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList.add('flex-ctr')
console.log(mainEl.classList)


// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector('#top-menu')


// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = '100%'



// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'


// Task 2.3
// Add a class of flex-aroundto topMenuEl.

topMenuEl.classList.add('flex-around')



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
    const a = document.createElement('a')
    a.href = link.href
    a.innerHTML = link.text
    topMenuEl.append(a)
}




