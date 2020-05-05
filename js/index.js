// Your code goes here

function get (selector){
    return document.querySelector(selector)
}



//Event 1 - Click

navContainer = get('.main-navigation')

navContainer.addEventListener('click', (event) =>  {
    navContainer.style.backgroundColor = 'pink'
})


//Event 2 - Mouseover

navTexts = document.querySelectorAll('.nav-link')
navTexts.forEach(item => {

    item.addEventListener('mouseover', (event) => {
         item.style.color = 'white'
    })
   
})

//Event 3 - Keydown

const body = get('body')
console.log(body)

body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        body.style.backgroundColor = 'teal'
    }
})

//Event 4 - Load

//window.addEventListener('load', (event) => {
    //gsap.to('.logo-heading', {duration: 4, rotation: 360});
//});

//Event 4a - Click 

logo = get('.logo-heading')
logo.addEventListener('click', (event) => {
    gsap.to('.logo-heading', {duration: 4, x: 1000});
})

//Event 5 - Copy

homeText = get('.home')
console.log(homeText)

homeText.addEventListener('copy', (event) => {
    homeText.style.color = 'red'
})

//Event 6 - Drag End

function dragStuff(event){
    alert('What a drag!')
}

window.addEventListener('dragend', dragStuff);


//Event 7 - 


