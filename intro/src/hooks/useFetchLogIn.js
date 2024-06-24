export const useFetchLogIn = (user, password) => {

    fetch('http://eventoriumbackend.test/api/user/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:5173/Homepage';
      } else {

        setError('Incorrecto user or password');
        document.getElementsByName('user')[0].value='';
        document.getElementsByName('password')[0].value='';
      }
    })
    .catch(error => console.error('Log In failed:', error));
  };


