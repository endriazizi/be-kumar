module.exports = (sequelize, Sequelize) => {
  const Fornitura = sequelize.define("fornitura", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    qta: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });

  return Fornitura;
};