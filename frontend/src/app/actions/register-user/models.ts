import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4).max(8),
});
