// import React, { useState } from "react";
// import MessengersUI from "./chapter-2/widgets/messagers/components/MessegersUI";
// import { MyFriend, Messegers } from "./widgets/constantas/DataChat";
// import { ContactUI } from "./widgets/contacts";

// export function ChapterTwo() {
// const myprofile ={id: '0419029203', name:'Febry'}; 
// const [selectedUser, setSelectedUser] = useState(0); 
// const [selectedChat, setSelectedChat] = useState([]); 

// const HandlerSelectedChat = (data) => { 
//   setSelectedUser(data); 
//   const the_msg = [...Messegers] 
//   const findChatByUserID = the_msg.find(item => item.user_id === 
// data.user_id) 
//   if (findChatByUserID) { 
//     setSelectedChat(findChatByUserID.messages); 
//   } else { 
//     setSelectedChat([]); 
//   } 
// }
//   return (
//     <div id="chapter-2">
//       <h1 className="text-white mb-5">
//         Chapter two: The Authentications and Messegers
//       </h1>
//       <div className="px-3">
//         <div className="row">
//           <div className="col-2 col-lg-3 col-xxl-4 px-0">
//             {/* (Daftar kontak disini) */}
//             {myprofile ? (
//               <ContactUI 
//               my_account={myprofile} 
//               friends={MyFriend} 
//               selectedUser={selectedUser}
//               HandlerSelectedChat={HandlerSelectedChat}
//               />
              
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="col-10 col-lg-9 col-xxl-8 px-0">
//             {/* (Messeging disini) */}
//        { myprofile ? ( 
//       <MessengersUI 
//        profile={myprofile} 
//        selectedUser={selectedUser} 
//        selectedChat={selectedChat} 
//       /> 
//      ) : ""} 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
