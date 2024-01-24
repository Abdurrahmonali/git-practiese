// const phone = 'Xiaomi X3';
// const phoneColor = 'blue';
// const phoneModel = 128;
// console.log(phone);
// console.log(phoneColor);
// console.log(phoneModel);


// const newTitle = ('boshqalar');
// const elFooter = document.querySelector('.footer');
// elFooter.textContent = 'bir narsalarga';

// const elDarkMode = document.querySelector('.site-header-dark');
// const elLightMode = document.querySelector('.site-header-light');
// elLightMode.addEventListener('click', function() {
//   // console.log('ishladi');
//   elFooter.textContent = 'tezroq ishla';
// });
// elDarkMode.addEventListener('click', function() {
//   elFooter.textContent = newTitle;
// });
const elLightModeButton = document.querySelector('.site-header-light');
const elDarkModeButton = document.querySelector('.site-header-dark');
elDarkModeButton.addEventListener('click', function(){
document.body.classlist.add('dark-mode');
});
elLightModeButton.addEventListener('click', function(){
document.body.classList.remove('dark-mode');
});