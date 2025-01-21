const { StrategicCoordinator, President, VicePresident, Leader, Member } = require('../models');

exports.createUser = async (req, res) => {
  const { name, email, password, role, student_id, phone, creatorId } = req.body;

  if (!name || !email || !password || !role || !student_id || !phone) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ message: "El número de teléfono debe tener 10 dígitos numéricos" });
  }

  try {
    const coordinator = await StrategicCoordinator.findById(creatorId);
    if (coordinator && coordinator.canCreateUsers) {
      let newUser;
      switch (role) {
        case 'president':
          newUser = new President({ name, email, password, role, student_id, phone });
          coordinator.assignedPresidents.push(newUser._id);
          break;
        case 'vice_president':
          newUser = new VicePresident({ name, email, password, role, student_id, phone });
          break;
        case 'leader':
          newUser = new Leader({ name, email, password, role, student_id, phone });
          break;
        case 'member':
          newUser = new Member({ name, email, password, role, student_id, phone });
          break;
        default:
          return res.status(400).json({ message: "Rol no válido" });
      }

      await newUser.save();
      await coordinator.save();
      return res.status(201).json({ message: `${role} creado exitosamente`, user: newUser });
    }

    return res.status(403).json({ message: "No tienes permisos para crear este usuario" });

  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};
