module.exports = (sequelize, Sequelize) => {
  const Fornitore = sequelize.define("fornitore", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nomeFornitore: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
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

  return Fornitore;
};