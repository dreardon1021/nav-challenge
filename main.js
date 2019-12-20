var coursesButton = document.querySelector('.course-button');
var collectionsButton = document.querySelector('.collections-button');
var wishListButton = document.querySelector('.wishlist-button');
var archivedButton = document.querySelector('.archived-button');
var courseContent = document.querySelector('.all-courses-content');
var collectionsContent = document.querySelector('.collections-content');
var wishlistContent = document.querySelector('.wishlist-contnet');
var archivedContent = document.querySelector('.archived-content');

coursesButton.addEventListener('click', function() {
  courseContent.style.display = 'flex';
  collectionsContent.style.display = 'none'
  wishlistContent.style.display = 'none'
  archivedContent.style.display = 'none'
});

collectionsButton.addEventListener('click', function() {
  courseContent.style.display = 'none';
  collectionsContent.style.display = 'flex'
  wishlistContent.style.display = 'none'
  archivedContent.style.display = 'none'
});

wishListButton.addEventListener('click', function(){
  courseContent.style.display = 'none';
  collectionsContent.style.display = 'none'
  wishlistContent.style.display = 'flex'
  archivedContent.style.display = 'none'
});

archivedButton.addEventListener('click', function (){
  courseContent.style.display = 'none';
  collectionsContent.style.display = 'none'
  wishlistContent.style.display = 'none'
  archivedContent.style.display = 'flex'
});
