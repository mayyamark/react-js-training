import { useContext, createContext, useState } from "react";

// (1) Create context
const UserContext = createContext(null);

const Content = () => {
  // (3) Consume the context with useContext
  const { user } = useContext(UserContext);

  return <div>{user ? `Hello, ${user.name}` : "Use the button to log in"}</div>;
};

const Button = () => {
  // (4) Consume the context with useContext
  const { user, login, logout } = useContext(UserContext);

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

const HomePage = () => {
  return (
    <div>
      <Content />
      <Button />
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const login = (u) => setUser(u);
  const logout = () => setUser(null);

  // (2) Provide the context with Context.Provider
  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      <HomePage />
    </UserContext.Provider>
  );
}

export default App;
