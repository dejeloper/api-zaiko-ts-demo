import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";
import PersonsInfoSchema from "./PersonsInfo";

const PersonsSchema = sequelize.define(
  "Persons",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DocumentType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DocumentNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DateBirthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1001,
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
    tableName: "Persons",
  }
);

PersonsSchema.hasOne(PersonsInfoSchema, {
  foreignKey: "Person",
  sourceKey: "Id",
});

PersonsInfoSchema.belongsTo(PersonsSchema, {
  foreignKey: "Person",
  targetKey: "Id",
  as: "Person_PersonInfo_Relation",
});

export default PersonsSchema;
