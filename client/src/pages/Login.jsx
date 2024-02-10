import { useNavigate } from "react-router";
import kicon from "../assets/kaizn_icon.webp";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* header */}
      <div className="flex justify-between ">
        <div>
          <img src={kicon} alt="" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Kaizntree</h1>
        </div>
      </div>
      {/* form */}
      <div className="flex mt-8">
        <form action="" className="login-form">
          <div>
            <input type="text" placeholder="username" className="login-input" />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              className="login-input"
            />
          </div>

          <div className="flex justify-between">
            <button className="login-buttons">CREATE ACCOUNT</button>
            <button className="login-buttons" onClick={handleLogin}>
              LOG IN
            </button>
          </div>
          <div>
            <a className="underlined" href="/">
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
