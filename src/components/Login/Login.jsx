import { signInWithGoogle } from "../../helper/firebase";
import Button from "@mui/material/Button";
import "./Login.less";

const Login = () => {
  return (
    <div className="login">
      <Button className="login-button" onClick={signInWithGoogle}>
        Login
      </Button>
    </div>
  );
};

export default Login;
