const formElem = document.querySelector('.login-form');

// console.log('formElem created');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();
  // console.log('test');

  const user = {
    email: 'test@gmail.com',
    name: 'Liza',
    password: '123',
  };

  console.log(JSON.stringify(user));

  // fetch
  // input: url(string), options
  // output: promise

  // then
  // input: callback, callback(optional)
  // output: promise

  // callback
  // input: result of previous promise
  // output: Any - will be wrapped in the promise

  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      console.log('response is here');

      // json()
      // input: none
      // output: promise
      return response.json();
    })
    .then(body => {
      console.log('body is read');
      console.log(body);

      // alert
      // input: string
      // output: undefined
      alert(JSON.stringify(body));
    });
}

formElem.addEventListener('submit', createUserHandler);

// console.log('listener added');
