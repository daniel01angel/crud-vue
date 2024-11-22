import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que el enrutador esté configurado.

import './style.css'; // Importa estilos globales si los tienes.

const app = createApp(App);

app.use(router); // Registra el enrutador.
app.mount('#app'); // Monta la aplicación en el contenedor con ID "app".
