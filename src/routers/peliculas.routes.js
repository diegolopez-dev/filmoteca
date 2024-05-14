import { Router } from 'express'
import pool from '../database/database.js'

const router = Router()

await pool.execute(`
  CREATE TABLE IF NOT EXISTS pelicula (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    genero TEXT NOT NULL,
    descripcion TEXT NOT NULL
  )
`);

router.get('/list', async (req, res) => {
    try{
        const result = await pool.execute('SELECT * FROM pelicula')
        res.render('pelicula/list', { peliculas: result })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/add', (req, res) => {
    res.render('pelicula/add')
})

router.post('/add', async (req, res) => {
    try{
        let result
        const { titulo, genero, descripcion } = req.body
        result = await pool.execute({
            sql: "INSERT INTO pelicula (titulo, genero, descripcion) VALUES (:titulo, :genero, :descripcion)",
            args: { titulo, genero, descripcion },
        });
        res.redirect('/list')
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/edit/:id', async (req, res) => {
    try{
        const {id} = req.params
        const [pelicula] = await pool.execute('SELECT * FROM pelicula WHERE id = ?', [id])
        const updatepelicula = pelicula[0]
        res.render('pelicula/edit', {pelicula: updatepelicula})
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }  
})

router.post('/edit/:id', async (req, res) => {
    try{
        const {titulo, genero, descripcion} = req.body
        const {id} = req.params
        const updatepelicula = {titulo, genero, descripcion}
        await pool.execute('UPDATE pelicula SET ? WHERE id = ?', [updatepelicula, id])
        res.redirect('/list')
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }  
})

router.get('/delete/:id', async (req, res) => {
    try{
        const {id} = req.params
        await pool.execute('DELETE FROM pelicula WHERE id = ?', [id])
        res.redirect('/list')
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }  
})

export default router