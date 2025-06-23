const db = require("../models");
const User = db.User;

// Registrar nuevo usuario
const register = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    address,
    password,
    confirmPassword,
    role,
  } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Las contraseñas no coinciden." });
  }
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El email ya se encuentra registrado" });
    }

    const createdUser = await User.create({
      first_name,
      last_name,
      email,
      address,
      password,
      role: 'user'
    });
    res.status(201).json({ message: "Usuario creado, felicitaciones!" });
  } catch(error) {
   console.error('Error al crear usuario:', error);
  res.status(500).json({ error: error.message });
  }
};


// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if ( !user || user.password !== password  ) {
      return res.status(400).json({ message: "Correo o contraseña incorrectos" });
    }
    
    req.session.user = user;
    res.status(200).json({message: 'ingreso de usuario exitoso', user: { id: user.id, name: user.first_name + ' ' + user.last_name, role: user.role}});
  } catch (error) {
     console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  register,
  login
};
