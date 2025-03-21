import { z } from 'zod';

export const createMemberSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10).max(10, 'Phone number must be 10 digits'),
    membershipType: z.enum(['Basic', 'Premium'], {
      errorMap: () => ({
        message: 'Membership type must be either Basic or Premium',
      }),
    }),
  }),
});

export type CreateMemberInput = z.TypeOf<typeof createMemberSchema>['body'];

export const memberIdSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
