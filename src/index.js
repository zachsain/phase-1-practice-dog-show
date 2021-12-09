// global variables 
const tableBody = document.querySelector('#table-body')



// fetch 

function fetchAndRender() {
    fetch('http://localhost:3000/dogs')
    .then(r => r.json())
    .then(data => loopAndRender(data))
}

// loop and render functions 

function loopAndRender(dogs) {

    dogs.forEach(dog => {

        tableBody.innerHTML += `
    <tr>
        <td>${dog.name}</td>
        <td>${dog.breed}</td>
        <td>${dog.sex}</td>
        <td><button>Edit</button></td>
    </tr>
`




    })

       let editButton = document.querySelector('button')
        console.log(editButton)

        for(btn in editButton){
            btn.addEventListener('click', e => {
                console.log(e)
            })
        }


   
    
    
}

// event listeners 











//DOM Content Loaded 

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRender()
    console.log(tableBody)
})

//deliverables 

// render all the dogs names, sex, and breed in the table columns 
//create click event for to edit the dogs in the edit bar 
