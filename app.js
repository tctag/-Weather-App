window.addEventListener('load', (event) => {
  let long;
  let lat;

  if (navigator.geolocation){
   navigator.geolocation.getCurrentPosition(position =>
   {

     console.log(position);
   });

  }

});
