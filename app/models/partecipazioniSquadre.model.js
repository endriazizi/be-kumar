module.exports = (sequelize, Sequelize) => {
  const PartecipazioniSquadre = sequelize.define("partecipazioni_squadre", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return PartecipazioniSquadre;
};