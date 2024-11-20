import { fetchAuthSession } from "aws-amplify/auth";

export const getSessionAws = async () => {
  let value = null;
  try {
    const { tokens } = await fetchAuthSession();
    value = tokens;
  } catch (error) {
    console.log(error);
  }
  return value;
}