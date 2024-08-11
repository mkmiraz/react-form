import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="form_box">
          <img src="../public/img/CORNER.png" alt="" />
          <div className="form_head">
            <h1>Wecome Back!</h1>
            <p>Login to continue</p>
          </div>
          <div className="input_box">
            <form action="#" method="#">
              <div className="input_group">
                <input name="user" type="text" placeholder="Enter Username" />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input_group">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <i className="fa-solid fa-key"></i>
              </div>
              <a href="#">Forget Password</a>
              <div className="btn_box">
                <button className="login" type="submit">
                  LOGIN
                </button>
              </div>
              <div className="btn_box">
                <button className="sing" type="submit">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
