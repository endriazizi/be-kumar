module.exports = (sequelize, Sequelize) => {
  const Ordine = sequelize.define("ordine", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return Ordine;
};