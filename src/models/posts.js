const uuid = require('uuid/v4')
const posts = require('../../posts.json')


function create (body) {
  const errors = []
  const title = body.title
  const content = body.content
  const image = body.image

  let response
  if (!title) {
    errors.push('title is required')
    response = { errors }
  } else if (!content) {
    errors.push("no content")
    response = { errors }
  } else if (!image) {
    errors.push("no images, needs visuals")
    response = { errors }
  } else {
    const post = { id: uuid(), title, content, image }
    posts.push(post)
    response = post
  }
  return response
}

function getAll (limit) {
    console.log("in models");
  return limit ? posts.slice(0, limit) : posts
}

function getById (id) {
  console.log(id, "id in models");
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return posts[i]
    }
  }
  return {}
}

function changeDetails (id, body) {
  let result = {}
  posts.find((post, index) => {
    if (post.id === id) {
      post.title = body.title
      post.content = body.content
      post.image = body.image
      result = post
    }
  })
  return result
}

function deletePost(id) {
  let result = {}
  console.log(id, 'id in models deletePost');
  posts.find((post, index) => {
    if (post.id === id) {
      result = post
      console.log(result, index);
      posts.splice(index, 1)
      return result
    }
  })
  console.log(result);
  return result
}


module.exports = {
  getAll,
  create,
  getById,
  changeDetails,
  deletePost
}
