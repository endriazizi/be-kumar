module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
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

    indirizzo: {
      type: Sequelize.STRING,
      allowNull: false
    },  
    civico: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    citta: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return User;
};