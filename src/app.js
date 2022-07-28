import express from 'express'
import indexRoutes from './routes/index.routes.js'
import exphbs from 'express-handlebars'
import path from 'path'

const app = express()

//Handlebars

/* Seteamos las views en la carpeta /views */
app.set('views', path.join(__dirname + '/views'))

/* Avisamos que en la extension .hbs se encuentra express-handlebars */
app.engine('.hbs', exphbs({

    /* Definimos la direccion donde se encuentran los layouts */
    layoutDir: path.join(app.get('views', "layouts")),
    defaultLayout: "main", // Definimos el archivo main
    extname: ".hbs", // Definimos la extension 
    
}))

//Routes
app.use(indexRoutes)

export default app