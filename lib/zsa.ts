import { getUser } from "@/actions/user";
import { createServerAction, createServerActionProcedure } from "zsa";

export const action = createServerAction();

const authedProcedure = createServerActionProcedure().handler(async () => {
  try {
    const user = await getUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    return {
      user,
    };
  } catch {
    throw new Error("User not authenticated");
  }
});

export const authedAction = authedProcedure.createServerAction();
