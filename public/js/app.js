console.log('This is my JS');

const getWeather = (location) => {
   // http://api.darksky.net/forecast/14a39c5de90df704c069f9080f71e0c8/17.920000,77.519722
   fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
      response.json().then(data => {
         console.log('wether Data ', data);
      })
   });
}

const weatherForm = document.querySelector('form');
let inpSearch = document.querySelector('input');


weatherForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const location = inpSearch.value;

   getWeather(location);
   console.log(location);
});