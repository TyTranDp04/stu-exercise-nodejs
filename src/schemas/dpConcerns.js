import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const ConcernsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
ConcernsSchema.plugin(softDeletePlugin);
export const DpConcernsSchema = mongoose.model('dp-concerns', ConcernsSchema);