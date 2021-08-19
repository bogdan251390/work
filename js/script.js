


// js

window.addEventListener('DOMContentLoaded', () => {

   let currentFloor = 2;

   let floors = document.querySelectorAll('.home-image path');
   let counter = document.querySelector('.counter');
   let counterUp = document.querySelector('.counter-up');
   let counterDown = document.querySelector('.counter-down');

   // Обнуляет классы для каждого этажа

   function removeClass() {
      floors.forEach(floor => {
         floor.classList.remove('current-floor');
      });
   }

   // Если не больше 10

   function notMoreFloor() {
      counter.innerHTML = `0${currentFloor}`;
      let usCurrentFloor = document.querySelector(`[data-floor="0${currentFloor}"]`);
      usCurrentFloor.classList.toggle('current-floor');
   }

   // Если  больше 10

   function moreFloor() {
      counter.innerHTML = `${currentFloor}`;
      let usCurrentFloor = document.querySelector(`[data-floor="${currentFloor}"]`);
      usCurrentFloor.classList.toggle('current-floor');
   }

   floors.forEach(floor => {
      floor.addEventListener('mouseover', function (e) {
         removeClass();
         let currentFloor = floor.getAttribute('data-floor');
         counter.innerHTML = `${currentFloor}`;
      })
   });

   counterUp.addEventListener('click', function (e) {
      if (currentFloor <= floors.length) {
         currentFloor++;
         removeClass();
      } if (currentFloor < 10) {
         notMoreFloor();
      } else {
         moreFloor();
      }
   });

   counterDown.addEventListener('click', function (e) {
      if (currentFloor > 2) {
         currentFloor--;
         removeClass();
      } if (currentFloor < 10) {
         notMoreFloor();
      } else {
         moreFloor();
      }
   });

});