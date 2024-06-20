const registerForm = document.getElementById('registerForm');
const logInForm = document.getElementById('logInForm');

// Coneccion con el backend para registrar un usuario
const registerDataBase = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error('Error al registrar usuario');
        }
        const resData = await res.json();
        return resData;
    } catch (error) {
        console.log(error);
    }
}

// Capturando los datos del formulario a través del evento submit
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const userName = formData.get('usuario');
    const email = formData.get('email');
    const password = formData.get('contraseña');
    const data = { userName, email, password };
    const res = await registerDataBase(data);
    if (res) {
        alert('Usuario creado correctamente!');
        return registerForm.reset();
    }
    alert('El usuario ya existe!');
});

// Conexion con el backend para loguear un usuario
const logInDataBase = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error('Error al loguear usuario');
        }
        const resData = await res.json();
        return resData;
    } catch (error) {
        console.log(error);
    }
}

// Si las credenciales son correctas, se redirige al usuario a la página principal
logInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(logInForm);
    const email = formData.get('email');
    const password = formData.get('contraseña');
    const data = { email, password };
    const res = await logInDataBase(data);
    if (res) {
        alert('Usuario logueado correctamente!');
        return window.location.replace('http://localhost:5500/client/public/index.html');
    }
    alert('Usuario o contraseña incorrectos!');
});