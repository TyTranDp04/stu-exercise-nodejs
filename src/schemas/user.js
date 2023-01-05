import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const RoadSchemaUser = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
},
  { timestamps: true });
RoadSchemaUser.plugin(softDeletePlugin);
export const UserSchema = mongoose.model('users', RoadSchemaUser);