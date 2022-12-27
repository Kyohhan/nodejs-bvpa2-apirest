
import express from 'express'
import z_tradesRoutes from './routes/z_trades.routes.js'
import employeesRoutes from "./routes/employees.routes.js";

const app = express();
app.use(z_tradesRoutes)
app.use(employeesRoutes)

export default app  ;