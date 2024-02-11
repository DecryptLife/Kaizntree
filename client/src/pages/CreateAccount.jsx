import { useNavigate } from "react-router";
import { Header } from "./LoginPage/Login";

const CreateAccount = () => {
  const navigate = useNavigate();
  function handleLoginButton() {
    navigate("/");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <Header />
      <div className="h-8 shadow-md w-1/2 p-8"></div>
      <div className="shadow-lg w-1/2 p-8">
        <form className="shared-form-style">
          <div className="flex w-full">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="firstname"
                className="border p-3 rounded-lg w-full "
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="lastname"
                className="border p-3 w-full rounded-lg "
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="email@example.com"
              className="login-input"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Username"
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="login-input"
            />
          </div>

          <div className="flex justify-between">
            <div>
              <button
                className="bg-slate-200 p-3 px-8 rounded-lg font-bold"
                onClick={handleLoginButton}
              >
                LOG IN
              </button>
            </div>
            <div>
              <input
                type="submit"
                value="REGISTER"
                className="bg-blue-500 p-3 px-8 rounded-lg text-white font-bold"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
