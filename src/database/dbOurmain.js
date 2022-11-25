import { errors } from '../helper/errors.js';
import { OurmainSchema } from '../schemas/dpOurmain.js';

export const OurmainDatabase = {

  get() {
    return new Promise((resolve, reject) => {
      try {
        OurmainSchema.find({}, (error, data) => {
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
        OurmainSchema.create(postobject, (error, resposne) => {
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
        OurmainSchema.findOneAndUpdate(_id, obj, { new: true }, (error, resposne) => {
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