import User from '../models/User';

/**
 * Get a single user's profile
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  User.findOne({ _id: req.body.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}
