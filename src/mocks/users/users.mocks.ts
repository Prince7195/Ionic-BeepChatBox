import { User } from "../../models/user/user.interface";

const userList: User[] = [
  {
    firstName: "Vijay",
    lastName: "Deepak",
    email: "VijayDeepak@email.com",
    avatar: "assets/imgs/Male.png"
  },
  {
    firstName: "Prince",
    lastName: "Deepak",
    email: "PrinceDeepak@email.com",
    avatar: "assets/imgs/Male.png"
  },
  {
    firstName: "Vishnu",
    lastName: "Vardhan",
    email: "VishnuVardhan@email.com",
    avatar: "assets/imgs/Male.png"
  },
  {
    firstName: "Radha",
    lastName: "Krishna",
    email: "RadhaKrishna@email.com",
    avatar: "assets/imgs/Male.png"
  }
];

export const USERS_LIST = userList;
