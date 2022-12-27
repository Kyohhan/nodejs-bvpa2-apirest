import {createPool} from 'mysql2/promise'
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from '../config.js'

export const pool= createPool({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASSWORD,
    port     : DB_PORT,
    database : DB_DATABASE
    })

/*
import mysql from "mysql";

export var pool= mysql.createConnection({
    host : 'localhost',
    database : 'empleados',
    user : 'USUARIO',
    password : 'PASS',
});

pool.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});*/