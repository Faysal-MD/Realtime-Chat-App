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
