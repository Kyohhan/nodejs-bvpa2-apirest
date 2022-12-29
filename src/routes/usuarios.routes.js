import {Router} from 'express'
import {pool} from "../db/db.js";
import {
     crearUsuarios, listarUsuarios, actualizarUsuarios, eliminarUsuarios,buscarUsuario
} from "../controller/usuarios.controller.js";

const  router = Router();

router.get('/usuarios', listarUsuarios)
router.get('/usuarios/:id', buscarUsuario)
router.post('/usuarios', crearUsuarios)
router.put('/usuarios/:id', actualizarUsuarios)
router.delete('/usuarios', eliminarUsuarios)

export default router;