console.log('Main script is running');

function submit() {
  console.log('submit');
  this.makeHttpRequest();
}

function makeHttpRequest() {
  fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((result) => {
      console.log('result =', result);
    });
}
