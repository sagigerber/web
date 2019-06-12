let h1Element = document.querySelector('h1');

function getDate() {
  let date = new Date();
  h1Element.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

let dateInterval = setInterval(getDate, 1000);


setTimeout(() => {
  clearInterval(dateInterval);
}, 10000);

