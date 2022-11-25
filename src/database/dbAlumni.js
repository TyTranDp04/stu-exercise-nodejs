import { errors } from '../helper/errors.js';
import { AlumniSchema } from '../schemas/dpAlumni.js';

export const AlumniDatabase = {

  get() {
    return new Promise((resolve, reject) => {
      try {
        AlumniSchema.find({}, (error, data) => {
          if (error) {
            errors["002"].reason = error.message || "";
            reject(errors["002"]);
          } else {
            resolve(data);
          }
        })
      } catch (error) {
        errors["003"].reason = error.message;
        reject(errors["003"]);
      }
    })
  },

  create(postobject) {
    return new Promise((resolve, reject) => {
      try {
        AlumniSchema.create(postobject, (error, resposne) => {
          if (error) {
            errors["001"].reason = error.message;
            reject(errors["001"]);
          } else {
            resolve(resposne);
          }
        })
      } catch (error) {
        errors["003"].reason = error.message;
        reject(errors["003"]);
      }
    })
  },

  update(_id, obj) {
    return new Promise((resolve, reject) => {
      try {
        AlumniSchema.findOneAndUpdate(_id, obj, { new: true }, (error, resposne) => {
          if (error) {
            errors["005"].reason = error.message;
            reject(errors["005"]);
          } else {
            resolve(resposne);
          }
        })
      } catch (error) {
        errors["003"].reason = error.message;
        reject(errors["003"]);
      }
    })
  }

}