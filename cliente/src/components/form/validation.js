const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);

export function validation (userData){
const errors = {};
    if (!regexEmail.test(userData.username)) {
        errors.username = 'el nombre de usuario debe ser un email';
    }
    if (!regexEmail.test(userData.username)) {
        errors.username = 'el nombre de usuario no puede estar vacío';
    }
    if ((!regexEmail.test(userData.username)).length >35) {
        errors.username = 'el nombre de usuario no puede tener más de 35 caracteres';
    }
    if (!regexPassword.test(userData.password)) {
        errors.password = "la contraseña no es correcta";
    }
return (errors);
}

