document.addEventListener('DOMContentLoaded', () => {
  console.log('TESTTTT');
  movieDetails = document.getElementById("rtw"),
    fetch('https://63eca9a132a08117239f4c48.mockapi.io/products')
      .then(response => response.json())

      .then(object => {
        console.log(object);


        object.forEach(el => {


          movieDetails.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img src="${el.thumbnail}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text">${el.description}</p>
            <a href="#" class="btn btn-primary" >Go somewhere</a>
            
            
              </div>
            </div>
            
          </div>  
      </div>
      `
        });


      })
      .catch(error => {
        console.log(error);
        document.getElementById("rtw").innerText = ` <br> ${error}. Please check your connection, refresh the page and try again.`
      })

  const formE1 = document.querySelector('.form')
  formE1.addEventListener('submit', event => {

    event.preventDefault()
title=document.getElementById('title').value
console.log(formE1.elements['title'].value);
console.log(formE1.elements['stock'].value);
console.log(formE1.elements[0].value);
    const formdata = new FormData(formE1);
    const data = Object.fromEntries(formdata);
    console.log(data)
    fetch('https://63eca9a132a08117239f4c48.mockapi.io/products', { method: 'POST', body: (data) })
      .then(response => response.json())

  })

})