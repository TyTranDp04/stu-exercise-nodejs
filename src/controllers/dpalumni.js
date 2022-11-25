import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { DpAlumniSchema } from '../schemas/dpalumni.js';
import { DpAlumniService } from '../services/dpalumni.js';

export const DpAlumniController = {

  // get(req, res, next) {
  //   // DpAlumniService.get()
  //   //   .then((data) => {
  //   //     Helper.responseJsonHandler(data, null, response)
  //   //   }).catch((error) => {
  //   //     Helper.responseJsonHandler(null, error, response)
  //   //   })
  //   DpAlumniSchema.find({})
  //     .then(course => {
  //       res.json(course)
  //     })
  //     .catch(next)
  // },
  get(req, res, next) {
    DpAlumniSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  create(request, response) {
    DpAlumniService.create({
      _id: mongoose.Types.ObjectId(),
      icon:request.body.icon,
      text:request.body.text,
      avatar:request.body.avatar,
      name:request.body.name,
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
    DpAlumniService.update({ _id: id }, { $set: updateObj })
      .then((data) => {
        Helper.responseJsonHandler(data, null, response)
      }).catch((error) => {
        Helper.responseJsonHandler(null, error, response)
      })
  },

  delete(request, response) {
    const id = request.params;
    DpAlumniSchema.softDelete({ _id: id })
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
    DpAlumniSchema.restore({ _id: id })
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
