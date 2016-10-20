import express from 'express';
const router = express.Router();
import request from 'request';
import {getGymList} from '../controllers/yelp';

router.route('/')
	.post((req, res) => {
		const {location} = req.body;
		getGymList(location)
			.then(list => res.send(list))
			.catch(err => res.status(200).send(err));
	})

module.exports = router;