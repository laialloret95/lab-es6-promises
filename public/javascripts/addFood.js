/* CALL THIS FUNCTION FROM OTHER FILES LIKE */

/****** DO NOT TOUCH vvv *****/

function addFood(step, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector(id).innerHTML += `<li>${step}</li`;
      resolve(step);
      callback ? callback() : ''; // For iteration one
    }, Math.floor(Math.random() * 1000));
  });
}
/***** ^^^ DO NOT TOUCH *****/

function addImg(src, id) { 
	let img = document.createElement('img'); 
    img.src = src; 
	document.getElementById(id).appendChild(img);
}