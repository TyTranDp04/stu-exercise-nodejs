import { Helper } from '../helper/index.js';
import { that } from '../middlewares/Upload.model.js';
import { AlumniSchema } from '../schemas/dpAlumni.js';
import { AlumniService } from '../services/dpAlumni.js';

export const AlumniController = {
  show(req, res, next) {
    AlumniSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  showItem(req, res, next) {
    AlumniSchema.findByIdAndUpdate({ _id: req.params.id })
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  update(req, res, next) {
    const { file, body } = req
    console.log(body, file)
    if (file) {
      that.uploadFileDriver({ shared: true }, file)
        .then(result => {
          const formData = {
            ...body,
            img: result.data.webContentLink
          }
          AlumniSchema.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      AlumniSchema.updateOne({ _id: req.params.id }, body)
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
  },

  delete(req, res, next) {
    AlumniSchema.deleteOne({ _id: req.params.id })
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  upload(req, res, next) {
    const { body, file } = req
    console.log(body, file)
    if (file) {
      that.uploadFileDriver({ shared: true }, file)
        .then(result => {
          const formData = {
            ...body,
            img: result.data.webContentLink
          }
          const courses = new AlumniSchema(formData)
          courses.save()
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      const courses = new AlumniSchema(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }

  }
}