import express from 'express'
import { addSocial, addSocialController, deleteSocialController, getByIdSocial, getByIdSocialController, getSocial, getSocialController, updateSocialController } from '../controllers/social.controller';

const socialRoutes = express.Router();

socialRoutes.post('/create', addSocialController);
socialRoutes.get('/get', getSocialController);
socialRoutes.get('/get/:id', getByIdSocialController);
socialRoutes.put('/update/:id', updateSocialController);
socialRoutes.delete('/delete/:id', deleteSocialController);








