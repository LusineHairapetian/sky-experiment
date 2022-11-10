module.exports = {

  async getAgreement({ body }, res) {
    try {
      let poll = null;

      await user.populate('agreement').execPopulate();

      if (user.poll) {
        poll = user.poll;
      } else {
        poll = new Poll();

        user.poll = poll;
      }

      poll.question = body.question;
      await poll.syncOptions(body.options);

      poll.save();
      user.save();

      await poll.populate('options').execPopulate();

      return res.json(poll);
    } catch(e) {
      console.log('error', e);
      res.json({});
    }
  },

  async createAgreement({user, body}, res) {
    try {
      let poll = null;

      await user.populate('poll').execPopulate();

      if (user.poll) {
        poll = user.poll;
      } else {
        poll = new Poll();

        user.poll = poll;
      }

      poll.question = body.question;
      await poll.syncOptions(body.options);

      poll.save();
      user.save();

      await poll.populate('options').execPopulate();

      return res.json(poll);
    } catch(e) {
      console.log('error', e);
      res.json({});
    }
  },
}