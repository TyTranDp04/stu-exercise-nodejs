import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const DropSchemaEngineer = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
},
  { timestamps: true });
DropSchemaEngineer.plugin(softDeletePlugin);
export const EngineerSchema = mongoose.model('engineer', DropSchemaEngineer); 
