import { z } from "zod";

export const propmtFormSchema = z.object({
  prompt: z.string(),
  chatId: z.string().nullish(),
});
