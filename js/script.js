let getCollapse = document.querySelector('.navbtn');
let getNavigation = document.querySelector('.navright');


getCollapse.addEventListener('click', function(){
  
  getNavigation.classList.toggle('shownav');
})