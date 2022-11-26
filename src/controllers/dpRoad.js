import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { DpRoadSchema } from '../schemas/dpRoad.js';
import { DpRoadService } from '../services/dpRoad.js';
import { that } from '../middlewares/Upload.model.js';
export const DpRoadController = {

  get(req, res, next) {
    DpRoadSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  showItem(req, res, next) {
    DpRoadSchema.findByIdAndUpdate({ _id: req.params.id })
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  
  create(request, response) {
    console.log(request)
    DpRoadService.create({
      _id: mongoose.Types.ObjectId(),
      number: request.body.number,
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
    DpRoadService.update({ _id: id }, { $set: updateObj })
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  delete(request, response) {
    const id = request.params;
    DpRoadSchema.softDelete({ _id: id })
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
    DpRoadSchema.restore({ _id: id })
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
    DpRoadService.getDeleted()
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  }
}
