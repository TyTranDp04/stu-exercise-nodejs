import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const AlumniSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
AlumniSchema.plugin(softDeletePlugin);
export const DpAlumniSchema = mongoose.model('dp-alumnis', AlumniSchema);