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
        // Almacenar el token en localStorage
        localStorage.setItem('token', data.token);
        // Redireccionar a principal
        window.location.href = 'http://localhost:5173/Homepage';
      } else {

        // setError('Usuario o contraseña incorrectos');
        // document.getElementsByName('usuario')[0].value='';
        // document.getElementsByName('contrasena')[0].value='';
      }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
  };


