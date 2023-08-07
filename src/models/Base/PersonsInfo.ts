import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";

const PersonsInfoModel = sequelize.define(
  "PersonsInfo",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Person: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Address1: {
      type: DataTypes.STRING(100),
    },
    Address2: {
      type: DataTypes.STRING(100),
    },
    Phone1: {
      type: DataTypes.STRING(20),
    },
    Phone2: {
      type: DataTypes.STRING(20),
    },
    Email1: {
      type: DataTypes.STRING(50),
    },
    Email2: {
      type: DataTypes.STRING(50),
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UserCreated: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    DateUpdate: {
      type: DataTypes.DATE,
    },
    UserUpdate: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
    tableName: "PersonsInfo",
  }
);

export default PersonsInfoModel;
