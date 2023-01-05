import { Helper } from '../helper/index.js';
import { that } from '../middlewares/Upload.model.js';
import { EngineerSchema } from '../schemas/engineer.js';
import { EngineerService } from '../services/engineer.js';


export const EngineerController = {

  get(req, res, next) {
    EngineerSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  showItem(req, res, next) {
    EngineerSchema.findByIdAndUpdate({ _id: req.params.id })
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
          EngineerSchema.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      EngineerSchema.updateOne({ _id: req.params.id }, body)
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
  },

  
  delete(req, res, next) {
    EngineerSchema.deleteOne({ _id: req.params.id })
      .then(course => {
        res.json(course)
      })
      .catch(next)
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
    if (file) {
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
    } else {
      const courses = new EngineerSchema(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }

  }

}
