import bcrypt from "bcrypt";

//Mock password only for testing
const mockPassword = "mock124";

const hash = bcrypt.hash(mockPassword, 10);

//Checks if user's hash password matches system hass password
export const isMatch = async () => {
  return bcrypt.compare("mock124", await hash);
};

console.log(isMatch);
