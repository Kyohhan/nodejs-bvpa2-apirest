//permite agruparlas rutas y colocarle un nombre
import {Router} from "express";
import {getz_trades} from "../controller/z_trades.controller.js";

//se crea el enrutador
const  router = Router();

router.get('/transacciones', getz_trades  );


export default router