import { useState, useEffect } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // Check if user is already authenticated and set the user state if so
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} onAuth={(user) => setUser(user)} />;
  }
}

export default App;
