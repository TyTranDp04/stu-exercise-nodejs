import { Helper } from '../helper/index.js';
import { that } from '../middlewares/Upload.model.js';
import { OurmainSchema } from '../schemas/dpOurmain.js';
import { OurmainService } from '../services/dpOurmain.js';


export const OurmainController = {

  get(req, res, next) {
    OurmainSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },

  showItem(req, res, next) {
    OurmainSchema.findByIdAndUpdate({ _id: req.params.id })
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
          OurmainSchema.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      OurmainSchema.updateOne({ _id: req.params.id }, body)
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }
  },

  delete(request, response) {
    const id = request.params;
    OurmainSchema.softDelete({ _id: id })
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
    OurmainSchema.restore({ _id: id })
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
          const courses = new OurmainSchema(formData)
          courses.save()
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      const courses = new OurmainSchema(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }

  }

}