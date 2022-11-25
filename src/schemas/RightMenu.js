import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import {softDeletePlugin} from 'soft-delete-plugin-mongoose'
mongoose.Promise = global.Promise;
const RightMenu = new Schema({
  description: {type: String},
  img: {type: Array},
},{ timestamps: true});
RightMenu.plugin(softDeletePlugin);
export const RightMenuSchema = mongoose.model('db-right-menu', RightMenu);
