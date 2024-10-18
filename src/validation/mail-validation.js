import z from 'zod'

export const mv = z.object({
   email: z.string().email("Invalid email address"),
  });
