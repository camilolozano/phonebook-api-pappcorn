'use strict';

module.exports = function (sequelize, DataTypes) {
  const appUser = sequelize.define(
    'contacts',
    {
      // Personal Information
      idContact: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      number: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      }
    }
  );
  return appUser;
};
