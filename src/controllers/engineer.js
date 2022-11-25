import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { EngineerSchema } from '../schemas/engineer.js';
import { EngineerService } from '../services/engineer.js';

export const EngineerController = {

  get(request, response) {
    EngineerService.get()
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  create(request, response) {
    EngineerService.create({
      _id: mongoose.Types.ObjectId(),
      desc: request.body.desc,
      img: request.body.img,
      name: request.body.name,
    })
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  update(request, response) {
    const id = request.params;
    const updateObj = request.body;
    EngineerService.update({ _id: id }, { $set: updateObj })
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  delete(request, response) {
    const id = request.params;
    EngineerSchema.softDelete({ _id: id })
      .then(() => response.status(200).json({
        statusCode: 200,
        message: "Delete data successfully",
        data: null,
        success: true
      }))
      .catch(() => response.status(404).json({
        success: false,
        message: `Can't find id: ${id._id}.`
      }));
  },

  restore(request, response) {
    const id = request.params;
    EngineerSchema.restore({ _id: id })
      .then(() => response.status(200).json({
        statusCode: 200,
        message: "Restore data successfully",
        success: true
      }))
      .catch(() => response.status(404).json({
        success: false,
        message: `Can't find id: ${id._id}.`
      }));
  }

}
