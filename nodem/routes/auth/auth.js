import express from 'express';
import { register,deleteUserById, updateByUserId, getAllUsers,} from '../../controllers/auth/authcontroller.js';
const router = express.Router();

router.post('/register', register);
router.put('/users/:_id', updateByUserId);
router.delete('/users/:_id',deleteUserById);
router.get('/',getAllUsers);
export default router;  