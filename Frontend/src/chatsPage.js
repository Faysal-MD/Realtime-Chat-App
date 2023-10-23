// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <PrettyChatWindow
//         projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;


// // logout implementation
// import React from "react";
// import { PrettyChatWindow } from "react-chat-engine-pretty";
// import "./index.css"

// const ChatsPage = (props) => {
//   const handleLogout = () => {
//     window.location.href = "/login";
//   };

//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <button onClick={handleLogout} className="logout">Logout</button>
//       <PrettyChatWindow
//         projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;


// reload implementation
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const handleLogout = () => {
    // Remove user data from localStorage and reset the user state
    localStorage.removeItem("user");
    props.onAuth(null);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;


// // remove username and secret
// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   const handleLogout = () => {
//     // Remove user data from localStorage and reset the user state
//     localStorage.removeItem("user");
//     props.onAuth(null);
//   };

//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <button onClick={handleLogout} className="logout">
//         Logout
//       </button>
//       <PrettyChatWindow
//         projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
//         email={props.user.email} // Use email instead of username
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;
