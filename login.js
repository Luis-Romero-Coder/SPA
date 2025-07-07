export default function Login(){
    return `
    <form id="loginForm">
        <label for="user">User</label>
        <input type="text" id="user" name="user" required placeholder="User">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required placeholder="Password">
        <button id="botonEnvio"type="submit"></button>
    </form>
    `;
}
const form = document.getElementById('loginFrom');

form.addEventListener('submit',function(event){
    event.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    const datos ={
        user:user,
        password:password
    };
    
});

