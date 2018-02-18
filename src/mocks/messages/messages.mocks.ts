import { Message } from "../../models/messages/message.interface";
import { USERS_LIST } from "../profile/profile.mocks";

let userList = USERS_LIST;

const messageList: Message[] = [];

// userList.forEach(user =>
//   messageList.push({
//     user: user,
//     date: new Date(),
//     lastMessage: "Ionic Bond"
//   })
// );

export const MESSAGE_LIST = messageList;
