import { Request, Response } from 'express';
import { Member } from '../models/member.model';
import { CreateMemberInput } from '../schemas/member.schema';

export const createMember = async (
  req: Request<{}, {}, CreateMemberInput>,
  res: Response
) => {
  try {
    const member = await Member.create(req.body);
    return res.status(201).json(member);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMember = async (req: Request, res: Response) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    return res.json(member);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllMembers = async (_req: Request, res: Response) => {
  try {
    const members = await Member.find();
    return res.json(members);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
