module.exports = (sequelize, Sequelize) => {
  const Squadra = sequelize.define("squadra", {
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
    record: {
      type: Sequelize.STRING,
      allowNull: false
    },
    coach: {
      type: Sequelize.STRING,
      allowNull: false
    },
    executive: {
      type: Sequelize.STRING,
      allowNull: false
    },
    puntiPartita: {
      type: Sequelize.STRING,
      allowNull: false
    },

  });

  return Squadra;
};