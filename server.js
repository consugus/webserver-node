const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public/' ) );


//Template Engine HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//helpers
require('./hbs/helper');
//No es necesario importar los helpers con una variable porque cada helper se
//registra en la variable hbs que también está definida en éste archivo y ya
//se pueden utilizar en éste archivo js


const port = process.env.port || 3000;
//la configuración del puerto es necearia porque localmente yo puedo especificar
//un puerto, pero cuando se sube a un servidor, como Heroku, desconocemos en qué
//puerto se servirá. De esa forma, cuando se ejecute localmente, la variable de
//entorno "process.env.port" no existirá, y la constante port tomará el valor de 3000

app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // res.send(salida);
    res.render ('home',{
        name: 'Gustavo Jorge',
    });
});

app.get('/about', (req, res) => {

    res.render ('about', {});
});

app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${ port }`);
});
