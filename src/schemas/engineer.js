import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const DropSchemaEngineer = new mongoose.Schema({
  Description: {
    type: String,
    require: true,


  },
  Images: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
},
  { timestamps: true });
DropSchemaEngineer.plugin(softDeletePlugin);
export const EngineerSchema = mongoose.model('engineer', DropSchemaEngineer); 
