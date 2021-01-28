import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";
import { GlobalStyles } from "./themes/global";
import { useDarkMode } from "./themes/useDarkMode";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import DashBoard from "./containers/DashBoard/DashBoard";
import TodoList from "./containers/TodoList";
import PostSignUp from "./components/PostSignUp";
import Splash from "./components/Splash";
import { useAuth } from "./utils/useAuth";

export const UserContext = React.createContext();

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [user, setUser, loading, loggedIn] = useAuth();

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <UserContext.Provider value={[user, setUser]}>
          <Router>
            <Switch>
              {loading && <Splash />}
              <Route path="/user/sign-up" component={SignUp} />
              <Route path="/user/login" component={Login} />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/todo-list" exact component={TodoList} />
              <Route path="/post-sign-up" component={PostSignUp} />
              <Route path="/splash" component={Splash} />
              <Route exact path="/">
                {loggedIn ? <Redirect push to="/todo-list" /> : <Home />}
              </Route>
            </Switch>
            <footer></footer>
          </Router>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
