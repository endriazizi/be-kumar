module.exports = (sequelize, Sequelize) => {
  const DettagliOrdine = sequelize.define("dettagli-ordine", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    qta: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dataOrdine: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    modSpedizione: {
      type: Sequelize.STRING,
      allowNull: false
    },
    modPagamento: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return DettagliOrdine;
};