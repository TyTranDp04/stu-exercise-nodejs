import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const DpSchemaOurmain = new mongoose.Schema({
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
DpSchemaOurmain.plugin(softDeletePlugin);
export const OurmainSchema = mongoose.model('dp-ourmain', DpSchemaOurmain); 
