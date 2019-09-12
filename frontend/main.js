console.log('Main script is running');

function submit() {
  console.log('submit');
  this.makeHttpRequest();
}

function makeHttpRequest() {
  const body = JSON.stringify({
    login: 'Vitalii_Kotliar@epam.com',
    psw: '123'
  });
  fetch('http://localhost:3000/login', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('result =', result);
    });
}
