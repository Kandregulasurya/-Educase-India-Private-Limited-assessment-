import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div>
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="button-group">
          <Button
            text="Create Account"
            onClick={() => navigate("/register")}
          />

          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;