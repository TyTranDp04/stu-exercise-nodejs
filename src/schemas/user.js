import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const RoadSchemaUser = new mongoose.Schema( {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
  },
  { timestamps: true });
  RoadSchemaUser.plugin(softDeletePlugin);
export const UserSchema = mongoose.model('users', RoadSchemaUser);