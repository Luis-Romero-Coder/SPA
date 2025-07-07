import Home from './home.js';
import About from './about.js';
import NotFound from './notFound.js'
import ApiUi from './apiUi.js';
import Login from './login.js';
import Register from './register.js';

const routes ={
    '/': Login,
    '/about': About,
    '/api-ui': ApiUi,
    '/home':Home,
    '/register':Register
};

export function router(){
    let path = window.location.pathname;

    console.log(path)
    if (path.endsWith('index.html')){
        path = "/"
        console.log("entra")

        history.replaceState(null, null, '/')
    }
    const view = routes[path] || NotFound;

    document.getElementById('app').innerHTML = view();
}