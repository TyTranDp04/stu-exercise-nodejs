import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const OurMainSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
OurMainSchema.plugin(softDeletePlugin);
export const DpOurMainSchema = mongoose.model('dp-OurMain', OurMainSchema);