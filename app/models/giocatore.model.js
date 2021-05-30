module.exports = (sequelize, Sequelize) => {
  const Giocatore = sequelize.define("giocatore", {
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
    ruolo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    altezza: {
      type: Sequelize.INTEGER,
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

  return Giocatore;
};