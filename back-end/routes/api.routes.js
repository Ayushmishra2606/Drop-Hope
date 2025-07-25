import express from 'express';
import Help from '../models/help.module.js';
import Cmp from '../models/campain.module.js';
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

apiRouter.post('/campaigns', auth, async (req, res) => {
  const limit = parseInt(req.body.limit) || 10;
  const page = parseInt(req.body.page) || 1;

  const skip = (page - 1) * limit;

  try {
    const users = await Cmp.find({}, 'name title city desc target image')
      .skip(skip)
      .limit(limit);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

apiRouter.post('/mycampaigns', auth, async (req, res) => {
  const userId = req.user.id; 
  try {
    const myCmp = await Cmp.find(
      { user_id: userId }, 
      'name title city desc target image' 
    );

    res.json(myCmp);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Not Found' });
  }
});

apiRouter.post('/myRequests', auth, async (req, res) => {
  const userId = req.user.id; 

  try {
    const myReq = await Help.find(
      { user_id: userId }, 
      'name context city helpType urgency' 
    );

    res.json(myReq);
  } catch (error) {
    res.status(500).json({ error: 'Not Found' });
  }
});

apiRouter.delete('/deleteReq/:id', auth, async (req, res) => {

  try {
     await Help.findByIdAndDelete(req.params.id)
    res.json({message: 'campaign delete'});
  } catch (error) {
    res.status(500).json({ error: 'Server Error , Try again Later' });
  }
});

apiRouter.delete('/deleteCmp/:id', auth, async (req, res) => {

  try {
     await Cmp.findByIdAndDelete(req.params.id)
    res.json({message: 'campaign delete'});
  } catch (error) {
    res.status(500).json({ error: 'Server Error , Try again Later' });
  }
});




export default apiRouter;
