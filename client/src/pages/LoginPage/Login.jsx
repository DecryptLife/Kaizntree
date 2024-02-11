import { useNavigate } from "react-router";
import kicon from "../../assets/kaizn_icon.webp";
import { useCallback, useState } from "react";
import PasswordStrength from "./PasswordStrength";

export function Header() {
  return (
    <div className="flex justify-center w-1/2">
      <div>
        <img src={kicon} alt="" />
      </div>

      <div className="flex w-3/5 items-center">
        <h1 className="text-3xl font-bold">Kaizntree</h1>
      </div>
    </div>
  );
}

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      console.log(id, value);
      setLoginDetails((prev) => ({
        ...prev,
        [id]: value,
      }));
    },
    [loginDetails]
  );
  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/home");
  };

  function handleRegistration() {
    navigate("/registration");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* header */}
      <Header />
      {/* form */}
      <div className="flex mt-8 w-1/2">
        <form onSubmit={handleLogin} className="shared-form-style">
          <div>
            <input
              id="username"
              type="text"
              placeholder="username"
              className="login-input"
              value={loginDetails.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="login-input"
              value={loginDetails.password}
              onChange={handleInputChange}
              required
            />
            {loginDetails.password && (
              <PasswordStrength password={loginDetails.password} />
            )}
          </div>

          <div className="flex justify-between">
            <button className="login-buttons" onClick={handleRegistration}>
              CREATE ACCOUNT
            </button>
            <input
              type="submit"
              className="login-buttons"
              name="login"
              value="LOG IN"
            />
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
