import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: 'behbnhb3z6khhbmewijj-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'ukomi15wyydpgjwe',
    password: "p91RvZYrRE2PGXw7Irfk",
    database: 'behbnhb3z6khhbmewijj'
})

export default pool
