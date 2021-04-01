const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: 'userId',
      })
    }
  };
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Informar Nome",
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Informar Email",
        },
        isEmail: { 
          msg: "Email inválido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Informar Senha",
        },
        len: {
          args: [6,20], 
          msg: "Senha deve conter no mínimo 6 dígitos"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Informar Função",
        }
      }
    },
    restaurant: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Informar Restaurante",
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};