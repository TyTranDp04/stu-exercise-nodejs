import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { EngineerSchema } from '../schemas/engineer.js';
import { EngineerService } from '../services/engineer.js';
import {that} from '../middlewares/Upload.model.js'


export const EngineerController = {

  // get(request, response) {
  //   EngineerService.get()
  //     .then((data) => {
  //       Helper.responseJsonHandler(data, null, response)
  //     }).catch((error) => {
  //       Helper.responseJsonHandler(null, error, response)
  //     })
  // },

  get(req, res, next) {
    EngineerSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  // create(request, response) {
  //   EngineerService.create({
  //     _id: mongoose.Types.ObjectId(),
  //     description: request.body.description,
  //     img: request.body.img,
  //     name: request.body.name,
  //   })
  //     .then((data) => {
  //       Helper.responseJsonHandler(data, null, response)
  //     }).catch((error) => {
  //       Helper.responseJsonHandler(null, error, response)
  //     })
  // },

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
  },
  create(req, res) {
    const { body, file } = req
    console.log(body, file)
    if(file){
      that.uploadFileDriver({ shared: true }, file)
      .then(result => {
        const formData = {
          ...body,
          img: result.data.webContentLink
        }
        const courses = new EngineerSchema(formData)
        courses.save()
          .then(() => res.redirect('/'))
          .catch(err => {
          });
      })
    }else{
      const courses = new EngineerSchema(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
    
  }

}
