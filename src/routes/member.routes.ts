import { Router } from 'express';
import {
  createMember,
  getMember,
  getAllMembers,
} from '../controllers/member.controller';
import { validate } from '../middleware/validate';
import { createMemberSchema, memberIdSchema } from '../schemas/member.schema';

const router = Router();

router.post('/', validate(createMemberSchema), createMember);
router.get('/:id', validate(memberIdSchema), getMember);
router.get('/', getAllMembers);

export default router;
