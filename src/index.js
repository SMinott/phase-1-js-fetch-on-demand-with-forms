// const init = () => {
//     const form = document.querySelector('form')

//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         // console.log(event)
//         event.target.children[1].value
//         console.log(children[1].value);
//     })
    
// }

// document.addEventListener('DOMContentLoaded', init);

// function fetchMovie(){
//     fetch('http://localhost:3000/movies')
//     .then(res => res.json())
//     .then(data => init(data))
// } 


const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);