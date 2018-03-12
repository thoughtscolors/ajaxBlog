const uuid = require('uuid/v4')
const posts = require('../../posts.json')

function create (body) {
  const errors = []
  const name = body.name
  const content = body.content
  const image = body.image

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else if (!content) {
    errors.push("no content")
    response = { errors }
  } else if (!image) {
    errors.push("no images, needs visuals")
    response = { errors }
  } else {
    const post = { id: uuid(), name, content, image }
    posts.push(post)
    response = post
  }
  return response
}

function getAll (limit) {
  return limit ? posts.slice(0, limit) : posts
}

function getById (id) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return posts[i]
    }
  }
  return {}
}

function changeDetails (id, body) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      const name = !body.name ? posts[i].name : body.name
      const content = !body.content ? posts[i].content : body.content
      const image = !body.image ? posts[i].image : body.image
        return posts[i]
      } else return {}
  }
}

function deletePost(id) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      let deletedPost = posts[i]
      posts.splice(i, 1)
        return deletedPost
      }
        return {}
  }
}


module.exports = {
  getAll,
  create,
  getById,
  changeDetails,
  deletePost
}
