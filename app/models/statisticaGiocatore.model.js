module.exports = (sequelize, Sequelize) => {
  const StatisticaGiocatore = sequelize.define("statistica-giocatore", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    partiteGiocate: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    puntitotali: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    assist: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rimbalzi: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    stoppate: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

  });

  return StatisticaGiocatore;
};