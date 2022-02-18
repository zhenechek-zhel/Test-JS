const heading = document.getElementById('hello')

const node = document.querySelector('h2') // return only one element
console.dir(node)
// const heading3 = node.nextElementSibling
//  console.log(heading3);


const h2List = document.querySelectorAll('h2')
console.log(h2List);

const heading4 = h2List[h2List.length - 1]
console.log(heading4);

setTimeout(() => {
    addStylesTo(heading, 'JavaScrpt')
}, 2000)

setTimeout(() => {
    addStylesTo(node, 'Just do it', 'yellow', '2rem')
}, 3000)

const a = heading4.querySelector('a')
a.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})
setTimeout(() => {
    addStylesTo(a, 'all is gone', 'blue', '5rem')
}, 4000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}


heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor ='#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor ='#000'
    }
}

heading4.addEventListener('dbclick', () => {
    if (heading4.style.color === 'yellow') {
        heading4.style.color = '#000'
        heading4.style.backgroundColor ='#fff'
    } else {
        heading4.style.color = 'yellow'
        heading4.style.backgroundColor ='#000'
    }
});

