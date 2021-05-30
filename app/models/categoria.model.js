module.exports = (sequelize, Sequelize) => {
  const Categoria = sequelize.define("categoria", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nomeCategoria: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Categoria;
};