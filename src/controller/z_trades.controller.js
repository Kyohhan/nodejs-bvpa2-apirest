import {pool} from "../db/db.js";

export const getz_trades =  async (req,res) => {

    try {
        const fecha = "20220825"
        const  query = "SELECT folio,fecha,time,instrumento,precio,fp,cantidad,lp,comprador,vendedor,mercado,valor,moneda FROM z_trades where fecha >= "+fecha+" order by folio ASC";
        const [result] = await pool.query(query);
        res.json(result)

    }catch (error) {
        return res.status(500).json({
            message: "algo  z resulto mal "
        })
    }

};
