import express from 'express'
import indexRoutes from './routes/index.routes.js'
import exphbs from 'express-handlebars'
import path from 'path'

// Solucion a ReferenceError: __dirname is not defined in ES module scope
/* --------------------------- */
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* --------------------------- */


const app = express()

//Handlebars

/* Seteamos las views en la carpeta /views */
app.set('views', path.join(__dirname , 'views'))

/*Avisamos que en la extension .hbs se encuentra express-handlebars */
app.set('.hbs', exphbs.engine({
    // Definimos la direccion donde se encuentran los layouts 
    layoutsDir: path.join(app.get('views'), "layouts"),
    defaultLayout: "main", // Definimos el archivo main
    extname: ".hbs", // Definimos la extension 

}))

//Routes
app.use(indexRoutes)

export default app