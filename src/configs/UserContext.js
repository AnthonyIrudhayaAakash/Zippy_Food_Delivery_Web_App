import { createContext } from "react";

// Create the UserContext
const UserContext = createContext({
  isLogin: false,
  userName: "Foodie",
  logState:"Sign Up",
  id:1232959
});

export default UserContext;
