import "./App.css";

function App() {
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
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email Adress" />
          <input placeholder="Password" />
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
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
