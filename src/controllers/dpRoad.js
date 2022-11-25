import mongoose from 'mongoose';
import { Helper } from '../helper/index.js';
import { DpRoadSchema } from '../schemas/dpRoad.js';
import { DpRoadService } from '../services/dpRoad.js';

export const DpRoadController = {

  // get(request, response) {
  //   DpRoadService.get()
  //     .then((data) => {
  //       Helper.responseJsonHandler(data, null, response)
  //     }).catch((error) => {
  //       Helper.responseJsonHandler(null, error, response)
  //     })
  // },
  get(req, res, next) {
    DpRoadSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  create(request, response) {
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

  // create(req, res) {
  //   const { body, file } = req
  //   console.log(body, file)
  //   if(file){
  //     that.uploadFileDriver({ shared: true }, file)
  //     .then(result => {
  //       const formData = {
  //         ...body,
  //         img: result.data.webContentLink
  //       }
  //       const courses = new DpRoadSchema(formData)
  //       courses.save()
  //         .then(() => res.redirect('/'))
  //         .catch(err => {
  //         });
  //     })
  //   }else{
  //     const courses = new DpRoadSchema(body)
  //     // console.log(body);
  //     console.log(coursess)
  //     courses.save()
  //       .then(() => res.redirect('/'))
  //       .catch(err => {
  //       });
  //   }
    
  // },

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
