module.exports = (sequelize, Sequelize) => {
  const Prodotto = sequelize.define("prodotto", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nomeProdotto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dettaglio: {
      type: Sequelize.STRING,
      allowNull: false
    },
    prezzo: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    qta: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return Prodotto;
};