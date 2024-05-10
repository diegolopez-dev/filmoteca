// import { createPool } from 'mysql2/promise'

// const pool = createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     database: 'Peliculas'
// })

// export default pool

import { config } from "dotenv";
import pg  from "pg";

const pool = new pg.Pool({
    connectionString: process.env.DB_URL,
    ssl: true
})

export default pool