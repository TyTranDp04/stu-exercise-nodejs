import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const DropSchemaAlumni = new mongoose.Schema( {
    content: {
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
    desc: {
        type: String,
        require: true,
      },
  },
  { timestamps: true });
  DropSchemaAlumni.plugin(softDeletePlugin);
export const AlumniSchema = mongoose.model('dp-alumni',DropSchemaAlumni); 