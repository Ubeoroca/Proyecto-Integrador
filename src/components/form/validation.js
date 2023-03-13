const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[0-9])(?=.{6,10})$/



export function validation (userData){
const errors = {};
    if (!regexEmail.test(userData.username)) {
    errors.username = 'el nombre de usuario tiene que ser un email';
    }
    else if (!regexEmail.test(userData.username)) {
        errors.username = 'el nombre de usuario no puede estar vacío';
        }
        else if ((!regexEmail.test(userData.username)).length >35) {
            errors.username = 'el nombre de usuario no puede tener más de 35 caracteres';
            }

    if (!regexPassword.test(userData.password)) errors.password = "la contraseña no es correcta"
return (errors);

}

