import { RightMenuSchema } from '../schemas/RightMenu.js'
import { that } from '../middlewares/Upload.model.js'
export const RightMenuController = {
  // [GET]
  show(req, res, next) {
    RightMenuSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  update(req, res, next) {
    RightMenuSchema.find({})
      .then(course => {
        res.json(course)
      })
      .catch(next)
  },
  delete(req, res, next) {
    RightMenuSchema.find({})
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
          const courses = new RightMenuSchema(formData)
          courses.save()
            .then(() => res.redirect('/'))
            .catch(err => {
            });
        })
    } else {
      const courses = new RightMenuSchema(body)
      console.log(courses)
      courses.save()
        .then(() => res.redirect('/'))
        .catch(err => {
        });
    }

  }
}

