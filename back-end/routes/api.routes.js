import express from 'express';
import Help from '../models/help.module.js';
import auth from '../middleware/auth.js';

const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));

apiRouter.post('/donations', auth, async (req, res) => {
  const limit = parseInt(req.body.limit) || 10;
  try {
    const users = await Help.find({}, 'name context helpType city urgency _id')
      .limit(limit);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default apiRouter;
