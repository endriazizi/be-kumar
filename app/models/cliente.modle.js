module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("cliente", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cognome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    nazionalita: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Cliente;
};