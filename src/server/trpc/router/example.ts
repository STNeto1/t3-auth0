import { z } from "zod";

import { protectedProcedure, publicProcedure, router } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  secretMessage: protectedProcedure.query(({ ctx }) => {
    return {
      message: `Hello ${ctx.session.user.name} from TRPC`,
    };
  }),
});
