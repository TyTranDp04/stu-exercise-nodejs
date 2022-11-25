import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { DpConcernsSchema } from '../schemas/dpConcerns.js';
import { DpConcernsService } from '../services/dpConcerns.js';

export const DpConcernsController = {

  get(req, res, next) {
    DpConcernsSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  create(request, response) {
    DpConcernsService.create({
      _id: mongoose.Types.ObjectId(),
      title: request.body.title,
      desc: request.body.desc,
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
    DpConcernsService.update({ _id: id }, { $set: updateObj })
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  delete(request, response) {
    const id = request.params;
    DpConcernsSchema.softDelete({ _id: id })
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
    DpConcernsSchema.restore({ _id: id })
      .then(() => response.status(200).json({
        statusCode: 200,
        message: "Restore data successfully",
        success: true
      }))
      .catch(() => response.status(404).json({
        success: false,
        message: `Can't find id: ${id._id}.`
      }));
  },

  getDeleted(request, response) {
    DpConcernsService.getDeleted()
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  }
}
