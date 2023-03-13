const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

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


    if (!regexPassword.test(userData.password)) {
    errors.password = 'la contraseña tiene que tener al menos un número';
    }
    else if ((userData.password).length < 6 && (userData.password).length >=10) {
        errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres';
        }
return (errors);

}

