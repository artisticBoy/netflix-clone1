import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // logged in
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        {!user ? (
          <Route path="/login">
            <Login />
          </Route>
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
