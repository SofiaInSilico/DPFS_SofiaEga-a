const db = require("../models");
const User = db.User;

// REGISTRO
const userList = async (req, res) => {
  try {
    const { count, rows} = await User.findAndCountAll();
    res.json({
      "totalUsers": count,
      users: rows
    });
  } catch {
    res.status(500).json({ error: "Problemas con la base de datos" });
  }
};


// Eliminar usuario
const userDestroy = async (req, res) => {
  try {
    const deletedRows = await User.destroy({ where: { id: req.params.id } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch {
    res.status(500).json({ error: "No se pudo eliminar al usuario" });
  }
};



module.exports = {
  userList,
  userDestroy
};
