import './style.css'
//import './clean-code'; // index
//import './clean-code/clases-typescript/tarea-clases';
// import './code-smells/Singleton';
import './code-smells/bajo-acoplamiento';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

