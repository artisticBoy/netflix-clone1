import React, { useRef } from "react";
import "./SignIn.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
    history.push("/");
  };
  return (
    <div className="signIn">
      <form>
        <h2>Sign In</h2>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input
          ref={passwordRef}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
        <h4>
          <span className="signIn__grey">New to netflix?,</span>
          <span className="signIn__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
