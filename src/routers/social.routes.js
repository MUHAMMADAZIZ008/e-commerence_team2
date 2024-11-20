import express from 'express'
import { addSocial, addSocialController, deleteSocialController, getByIdSocial, getByIdSocialController, getSocial, getSocialController, updateSocialController } from '../controllers/social.controller';

const socialRoutes = express.Router();

socialRoutes.post('/', addSocialController);
socialRoutes.get('/', getSocialController);
socialRoutes.get('/:id', getByIdSocialController);
socialRoutes.put('/:id', updateSocialController);
socialRoutes.delete('/:id', deleteSocialController);








