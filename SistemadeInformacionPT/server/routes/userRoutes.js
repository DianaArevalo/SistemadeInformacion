import express from 'express'

import { createUsuarios, deleteUsuarios, getAllUsuarios, getUsuarios, updateUsuarios } from '../controller/userController.js'

const router = express.Router();

router.get('/', getAllUsuarios)
router.get('/:id', getUsuarios)
router.post('/', createUsuarios)
router.put('/:id', updateUsuarios)
router.delete('/:id', deleteUsuarios)

export default router