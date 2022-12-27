import {Router} from 'express'
import {pool} from "../db/db.js";
import {getEmployees,putEmployees,postEmployees,deleteEmployees} from "../controller/employees.controller.js";

const  router = Router();

router.get('/employees', getEmployees)
router.post('/employees', postEmployees)
router.put('/employees', putEmployees)
router.delete('/employees', deleteEmployees)

export default router;