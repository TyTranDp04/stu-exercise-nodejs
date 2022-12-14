import { UserSchema } from "../schemas/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { fail } from "assert";

let refreshTokens = [];

export const authController = {
  // REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Create new user
      const newUser = await new UserSchema({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });
      //Save user to DB
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Function
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "1d" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },
  //LOGIN
  loginUser: async (req, res) => {
    try {
      const user = await UserSchema.findOne({ username: req.body.username });

      if (user == "") {
        return res.status(402).json({
          statusCode: "402",
          message: "UserName is empty. UserName required",
          data: null,
          success: flase,
        });
      }
      if (!user) {
        return res.status(400).json({
          statusCode: "400",
          message: "Incorrect UserName",
          data: null,
          success: false,
        });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword == "") {
        return res.status(402).json({
          statusCode: "402",
          message: "Password is empty. Password required",
          data: null,
          success: flase,
        });
      }
      if (!validPassword) {
        return res.status(400).json({
          statusCode: "400",
          message: "Incorrect Password",
          data: null,
          success: false,
        });
      }
      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        return res.status(200).json({
          statusCode: "200",
          message: "Login Success",
          data: {
            accessToken: accessToken,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          },
          success: true,
        });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },


  //log out
  userLogout: async (req, res) => {
    res.clearCookie("accessToken");
    return res.status(200).json("logOut!")
  }
};



