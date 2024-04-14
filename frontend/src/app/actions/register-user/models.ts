import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(4).max(8),
});
