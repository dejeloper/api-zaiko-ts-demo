import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";
import PersonsInfoModel from "./PersonsInfo";

const PersonsModel = sequelize.define(
  "Persons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    documentType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documentNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    dateBirthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1001,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    dateCreated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userCreated: {
      type: DataTypes.STRING(50),
      defaultValue: "Admin",
    },
    dateUpdate: {
      type: DataTypes.DATE,
    },
    userUpdate: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
    tableName: "Persons",
  }
);

// PersonsSchema.hasOne(PersonsInfoSchema, {
//   foreignKey: "Person",
//   sourceKey: "Id",
// });

// PersonsInfoSchema.belongsTo(PersonsSchema, {
//   foreignKey: "Person",
//   targetKey: "Id",
//   as: "Person_PersonInfo_Relation",
// });

export { PersonsModel };
