// import { createPool } from 'mysql2/promise'
// import { config } from "dotenv"
// config()

// const pool = createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     database: 'Peliculas'
// })

// 

import pg  from "pg";
import { DB_URL, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from '../config.js'

export const pool = new pg.Pool({
    connectionString: DB_URL,
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

export default pool

// import { createPool } from 'mysql2/promise'
// import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from '../config.js'

// const pool = createPool({
//   user: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: DB_PORT,
//   database: DB_NAME
// })

// export default pool