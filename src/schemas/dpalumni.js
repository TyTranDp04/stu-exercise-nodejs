import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const DropSchemaAlumni = new mongoose.Schema({
  content: {
    type: String,
  },
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
},
  { timestamps: true });
DropSchemaAlumni.plugin(softDeletePlugin);
export const AlumniSchema = mongoose.model('dp-alumni', DropSchemaAlumni); 