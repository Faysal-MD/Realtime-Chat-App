// import { useState } from "react";
// import axios from "axios";
// import "./index.css"

// const AuthPage = (props) => {
//   const [username, setUsername] = useState();
//   const [secret, setSecret] = useState();
//   const [email, setEmail] = useState();
//   const [first_name, setFirstName] = useState();
//   const [last_name, setLastName] = useState();

//   const onLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/login", { username, secret })
//       .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
//       .catch((e) => console.log(JSON.stringify(e.response.data)));
//   };

//   const onSignup = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/signup", {
//         username,
//         secret,
//         email,
//         first_name,
//         last_name,
//       })
//       .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
//       .catch((e) => console.log(JSON.stringify(e.response.data)));
//   };

//   return (
//     <div className="login-page">
//       <div className="card">
//         {/* Login Form */}
//         <form onSubmit={onLogin}>
//           <div className="title">Login</div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             name="secret"
//             placeholder="Password"
//             onChange={(e) => setSecret(e.target.value)}
//           />
//           <button className="submit" type="submit">LOG IN</button>
//         </form>

//         {/* Sign Up Form */}
//         <form onSubmit={onSignup}>
//           <div className="title">or Sign Up</div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="text"
//             name="first_name"
//             placeholder="First name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Last name"
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             name="secret"
//             placeholder="Password"
//             onChange={(e) => setSecret(e.target.value)}
//           />
//           <button className="submit" type="submit">SIGN UP</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;


// reload implementation
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  useEffect(() => {
    // Check if user is already authenticated and set the user state if so
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      props.onAuth(storedUser);
    }
  }, [props]);

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => {
        const user = { ...r.data, secret };
        props.onAuth(user);
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => {
        const user = { ...r.data, secret };
        props.onAuth(user);
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="card">
        {/* Login Form */}
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button className="submit" type="submit">
            LOG IN
          </button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button className="submit" type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;


// // remove username and secret
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./index.css";

// const AuthPage = (props) => {
//   const [email, setEmail] = useState();
//   const [first_name, setFirstName] = useState();
//   const [last_name, setLastName] = useState();

//   useEffect(() => {
//     // Check if the user is already authenticated and set the user state if so
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       props.onAuth(storedUser);
//     }
//   }, [props]);

//   const onLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/login", { email })
//       .then((r) => {
//         const user = { ...r.data, email };
//         props.onAuth(user);
//         // Store user data in localStorage
//         localStorage.setItem("user", JSON.stringify(user));
//       })
//       .catch((e) => console.log(JSON.stringify(e.response.data)));
//   };

//   const onSignup = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/signup", {
//         email,
//         first_name,
//         last_name,
//       })
//       .then((r) => {
//         const user = { ...r.data, email };
//         props.onAuth(user);
//         // Store user data in localStorage
//         localStorage.setItem("user", JSON.stringify(user));
//       })
//       .catch((e) => console.log(JSON.stringify(e.response.data)));
//   };

//   return (
//     <div className="login-page">
//       <div className="card">
//         {/* Login Form */}
//         <form onSubmit={onLogin}>
//           <div className="title">Login</div>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button className="submit" type="submit">
//             LOG IN
//           </button>
//         </form>

//         {/* Sign Up Form */}
//         <form onSubmit={onSignup}>
//           <div className="title">or Sign Up</div>
//           <input
//             type="text"
//             name="first_name"
//             placeholder="First name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Last name"
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button className="submit" type="submit">
//             SIGN UP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

