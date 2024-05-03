import { Router } from 'express'
import pool from '../database/database.js'

const router = Router()

router.get('/list', async (req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM pelicula')
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
        const {titulo, genero, descripcion} = req.body
        const newPelicula = {
            titulo, genero, descripcion
        }
        await pool.query('INSERT INTO pelicula SET ?', [newPelicula])
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
        const [pelicula] = await pool.query('SELECT * FROM pelicula WHERE id = ?', [id])
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
        await pool.query('UPDATE pelicula SET ? WHERE id = ?', [updatepelicula, id])
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
        await pool.query('DELETE FROM pelicula WHERE id = ?', [id])
        res.redirect('/list')
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }  
})

export default router