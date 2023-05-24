import "./App.css";
import { useState } from "react";
function App() {
  const [firstname, setFirstname] = useState("");
  const [userInvalid, setUserInValid] = useState(false);
  const [lastname, setLastname] = useState("");
  const [lastInvalid, setLastInValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [ispassword, setIsPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <div className="App">
      <section className="leftSide">
        <h1 className="learnToCode">Learn to code by watching others</h1>
        <p className="seeHow">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>

      <section className="form">
        <div className="purple">
          <span className="days">Try it free 7 days</span> then $20/mo.
          thereafter
        </div>
        <form>
          <input
            placeholder="First Name"
            onChange={(event) => setFirstname(event.target.value)}
            className={userInvalid ? "invalid" : null}
          />
          {userInvalid ? (
            <p className="error">First Name cannot be empty</p>
          ) : null}

          <input
            placeholder="Last Name"
            onChange={(event) => setLastname(event.target.value)}
            className={lastInvalid ? "invalid" : null}
          />
          {lastInvalid ? (
            <p className="error">Last Name cannot be empty</p>
          ) : null}
          <input
            placeholder="Email Adress"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className={emailInvalid ? "invalid" : null}
          />
          {emailInvalid ? (
            <p className="error">Looks like this is not an email</p>
          ) : null}
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className={ispassword ? "invalid" : null}
          />
          {ispassword ? (
            <p className="error">Password cannot be empty</p>
          ) : null}
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              if (firstname.length < 2) {
                setUserInValid(true);
              } else {
                setUserInValid(false);
              }
              if (lastname.length < 2) {
                setLastInValid(true);
              } else {
                setLastInValid(false);
              }
              if (emailRegex.test(email)) {
                setEmailInvalid(false);
              } else {
                setEmailInvalid(true);
              }
              if (password.length < 8) {
                setIsPassword(true);
              } else {
                setIsPassword(false);
              }
            }}
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="terms">
            By clicking the button, you are agreeing to our
            <span className="service"> Terms and Services</span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
