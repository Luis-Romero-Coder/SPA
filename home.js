export default function Home(){
    return `
    <h1>Pagina de Inicio</h1>
    <p>Bienvenido a la SPA con Vanilla JS.</p>
    <nav>
        <a href="/" data-link>Loggin</a>
        <a href="/home">Home</a>
        <a href="/about" data-link>Acerca de</a>
        <a href="/api-ui" data-link>API-UI</a>
        <a href="/no-existe" data-link>404</a>
    </nav>
    `;
}