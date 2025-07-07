export default function Register(){
    return `
   <form id="loginForm">
        <label for="user">User</label>
        <input type="text" id="user" name="user" required placeholder="User">
        <label for="userConfirm">Confirm User</label>
        <input type="text" id="userConfirm" name="userConfirm" required placeholder="Confirm User">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required placeholder="Password">
        <label for="passwordConfirm">Confirm Password</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" required placeholder="Confrim Password">
        <button id="botonEnvio"type="submit"></button>
    </form>
    `;
}
function validPassword(user,userC,password,passwordC){
    if (user === userC && password===passwordC) {
        return {user, password}
    }
    else{
        alert("The data does not match")
        return null;
    };
}
class User{
    constructor(user,password){
        this.user = user;
        this.password = password;
    }   
}
const form = document.getElementById('loginFrom');

form.addEventListener('submit', async function(event){
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const userConfirm = document.getElementById('userConfirm').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    
    const datos = validPassword(user,userConfirm,password,passwordConfirm);
    
    if (datos){
        const newUser = new User(datos.user, datos.password);
        try {
            const response = await fetch("http://localhost:3000/Users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Usuario guardado correctamente:", result);
                alert("Usuario registrado exitosamente");
            } else {
                console.error("Error al guardar el usuario");
                alert("No se pudo guardar el usuario");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error al conectar con el servidor");
        }
    }
});

