import { useState } from "react";

// (1) Create context

const Content = ({ user }) => {
  // (3) Consume the context with useContext

  return <div>{user ? `Hello, ${user.name}` : "Use the button to log in"}</div>;
};

const Button = ({ user, login, logout }) => {
  // (4) Consume the context with useContext

  const handleClick = () => {
    if (user) {
      logout();
    } else {
      login({ name: "Mayya" });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{user ? "Logout" : "Login"}</button>
    </div>
  );
};

const HomePage = ({ user, login, logout }) => {
  return (
    <div>
      <Content user={user} />
      <Button user={user} login={login} logout={logout} />
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const login = (u) => setUser(u);
  const logout = () => setUser(null);

  // (2) Provide the context with Context.Provider
  return (
    <HomePage user={user} login={login} logout={logout} />
  );
}

export default App;
