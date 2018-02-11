import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
  {
    firstName: "Vijay",
    lastName: "Deepak",
    email: "VijayDeepak@email.com",
    avatar: "assets/imgs/Male.png",
    dateOfBirth: new Date
  },
  {
    firstName: "Prince",
    lastName: "Deepak",
    email: "PrinceDeepak@email.com",
    avatar: "assets/imgs/Male.png",
    dateOfBirth: new Date
  },
  {
    firstName: "Vishnu",
    lastName: "Vardhan",
    email: "VishnuVardhan@email.com",
    avatar: "assets/imgs/Male.png",
    dateOfBirth: new Date
  },
  {
    firstName: "Radha",
    lastName: "Krishna",
    email: "RadhaKrishna@email.com",
    avatar: "assets/imgs/Male.png",
    dateOfBirth: new Date
  }
];

export const USERS_LIST = userList;
