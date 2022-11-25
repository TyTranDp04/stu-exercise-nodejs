import { AlumniDatabase } from '../controllers/dbAlumni.js';

export const AlumniService = {

  get() {
    return new Promise((resolve, reject) => {
      AlumniDatabase.get()
        .then((response) => {
          resolve({
            statusCode: 200,
            message: "Get list data successfully",
            data: response,
            success: true,
          });
        }).catch((error) => {
          reject(error);
        })

    })
  },

  create(body) {
    let newPostObj = body;
    return new Promise((resolve, reject) => {
      AlumniDatabase.create(newPostObj)
        .then((response) => {
          resolve({
            statusCode: 200,
            message: "New data created successfully",
            data: response,
            success: true,
          });
        }).catch((error) => {
          reject({
            statusCode: 404,
            message: error.reason,
            data: null,
            success: false,
          });
        })

    })
  },

  update(param, obj) {
    return new Promise((resolve, reject) => {
      const _id = param._id;
      //  document id and obj is required
      if (_id && obj) {
        AlumniDatabase.update(_id, obj)
          .then((response) => {
            resolve({
              statusCode: 200,
              message: "Data updated successfully",
              data: response,
              success: true,
            });
          }).catch((error) => {
            reject(error);
            console.log("error:", error);
          })
      }
    })
  }

}