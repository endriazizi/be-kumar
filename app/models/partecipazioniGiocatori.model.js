module.exports = (sequelize, Sequelize) => {
  const PartecipazioniGiocatori = sequelize.define("partecipazioni_giocatori", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return PartecipazioniGiocatori;
};