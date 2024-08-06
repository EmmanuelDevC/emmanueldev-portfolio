document.addEventListener('DOMContentLoaded', function () {
   const navbarBtn = document.getElementById('navbar-btn');
   const cancelBtn = document.getElementById('cancel-btn');
   const navbarTwo = document.getElementById('navbar-two');

   navbarBtn.addEventListener('click', function () {
       navbarTwo.style.right = '0';

   });

   cancelBtn.addEventListener('click', function () {
       navbarTwo.style.right = '-200%';

       
   });

   const contSec = document.querySelectorAll('.cont-sec');
   contSec.forEach(box => {
       box.addEventListener('mouseover', function () {
           box.style.backgroundColor = "#198754";
       });

       box.addEventListener('mouseout', function () {
           box.style.backgroundColor = "black";
       });
   });
});
