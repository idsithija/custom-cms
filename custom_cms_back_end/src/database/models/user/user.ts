import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

interface UserAttributes {
  username: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public username!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;