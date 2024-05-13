import express from 'express'
import { engine } from 'express-handlebars'
import morgan from 'morgan'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import personasRoutes from './routers/peliculas.routes.js'
import pool from '../database/database.js'

//Inicializacion
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//Configuracion
const PORT = process.env.PORT ?? 3000
app.set('views', join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layout'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routers 
app.get('/', (req, res) => {
  res.render('index.hbs')
})
app.use(personasRoutes)

app.get('/', async (req, res) => {
  try{
      await pool.query('CREATE DATABASE Peliculas'),
        res.render('index.hbs')
  }
  catch(err){
      res.status(500).json({
          message: err.message
      })
  }
})

//Archivos public
app.use(express.static(join(__dirname, 'public')))

//Correr el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
})