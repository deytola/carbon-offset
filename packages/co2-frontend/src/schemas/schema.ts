import { z } from 'zod';

export const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: 'First name must be more than 1 character' }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: 'Last name must be more than 1 character' }),
  email: z.string().trim().email(),
});
