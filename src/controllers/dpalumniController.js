import { Helper } from '../helper/index.js';
import { that } from '../middlewares/Upload.model.js';
import { AlumniSchema } from '../schemas/dpAlumni.js';
import { AlumniService } from '../services/dpAlumni.js';

export const AlumniController = {

  get(req, res, next) {
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
  delete(request, response) {
    const id = request.params;
    AlumniSchema.softDelete({ _id: id })
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
    AlumniSchema.restore({ _id: id })
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