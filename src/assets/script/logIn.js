const registerForm = document.getElementById('registerForm');

// Coneccion con el backend para registrar un usuario
const registerDataBase = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
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
    const usuario = formData.get('usuario');
    const email = formData.get('email');
    const contraseña = formData.get('contraseña');
    const data = { usuario, email, contraseña };
    const res = await registerDataBase(data);
    if (res) {
        alert('Usuario creado correctamente!');
        return registerForm.reset();
    }
    alert('Error al crear el usuario');
});