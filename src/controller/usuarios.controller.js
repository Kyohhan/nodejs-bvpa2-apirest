import {pool_efdb}  from '../db/db.js'

export const listarUsuarios =  async (req,res) => {

    try {
        //const query="CALL `sp_ef_listarUsuarios`()";
        const query="select *from usuarios";
        const [result] = await pool_efdb.query(query,

        );
        res.json(result);

    }catch (error){
        return res.status(500).json({
            message: error
        })
    }
}
export const buscarUsuario =  async (req,res) => {

    const id= req.params.id;
    try {
        const query="CALL `sp_ef_buscarUsuario`(?)";
        const [result] = await pool_efdb.query(query,[id]);
        res.json(result);

    }catch (error){
        return res.status(500).json({
            message: "algo resulto mal "
        })
    }


}

export const crearUsuarios = async (req,res) => {

    try {
        const {nombre, usuario, contrasena} = req.body;
        const query = "CALL `sp_ef_agregarUsuario`(?,?,?)";
        const [rows] = await pool_efdb.query(query, [nombre, usuario, contrasena]);
        res.send({
            id: rows.insertId,
            nombre,
            usuario,
            contrasena
        });
    }catch (error){
        return res.status(500).json({
            message: "algo resulto mal "
        })
    }
}

export const actualizarUsuarios = async (req,res) => {

    try {
        const {id} = req.params;
        const {nombre, usuario, contrasena} = req.body;
        const query = "CALL `sp_ef_actualizarUsuario`(?,?,?,?)";
        const [result] = await pool_efdb.query(query, [id, nombre, usuario, contrasena]);

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'usuario no encontrado'
        })

        const query2 = "CALL `sp_ef_buscarUsuario`(?)";
        const [row] = await pool_efdb.query(query2, [id]);
        res.json(row[0])


    }catch (error){
        return res.status(500).json({
            message: "algo resulto mal "
        })
    }
}

export const eliminarUsuarios = async (req,res) => {

    try {
        const {usuario} = req.body;
        const query = "CALL `sp_ef_eliminarUsuario`(?)";
        const [result] = await pool_efdb.query(query, [usuario]);
        res.send({result});
    }catch (error){
        return res.status(500).json({
            message: "algo resulto mal "
        })
    }
}