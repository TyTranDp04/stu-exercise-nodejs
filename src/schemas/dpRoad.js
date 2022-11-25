import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

mongoose.Promise = global.Promise;

const RoadSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  number: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
RoadSchema.plugin(softDeletePlugin);
export const DpRoadSchema = mongoose.model('dp-roads', RoadSchema);