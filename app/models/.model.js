module.exports = (sequelize, Sequelize) => {
  const Edizione = sequelize.define("edizione", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    annoEdizione: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return Edizione;
};