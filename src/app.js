
import express from 'express'
import z_tradesRoutes from './routes/z_trades.routes.js'
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

//recibe los datos y los convierte a json y luego se le pasara a las rutas
app.use(express.json())

//rutas a buscar
app.use('/api',z_tradesRoutes)
app.use('/api',usuariosRoutes)


// si no encuentra o coincide alguna ruta devuelve esta informacion
app.use((req ,res,next) => {
  res.status(404).json({
      message: "endpoint not found"
  })
})

export default app  ;