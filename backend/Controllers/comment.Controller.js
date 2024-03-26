
const commentService = require('../Service/comment.service')

module.exports = {
  getComments: async (req, res) => {
    try {
      const comments = await commentService.connectAndFetchComment();
      console.log(comments);
      res.json(comments [0]);
    } catch (err) {
      console.log(err)
      
    }
  }
};
