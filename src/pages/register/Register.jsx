import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/Input/Inputfield";
import Button from "../../components/button/Button";
import "./register.css"
function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    navigate("/account");
  };

  return (
    <div className="register-page">
      <h1>
        Create your
        <br />
        <br />
        PopX account
      </h1>

      <InputField
        label="Full Name*"
        placeholder="Marry Doe"
        value={formData.fullName}
        onChange={(e) =>
          handleChange("fullName", e.target.value)
        }
      />

      <InputField
        label="Phone number*"
        placeholder="9876543210"
        value={formData.phone}
        onChange={(e) =>
          handleChange("phone", e.target.value)
        }
      />

      <InputField
        label="Email address*"
        placeholder="marry@example.com"
        value={formData.email}
        onChange={(e) =>
          handleChange("email", e.target.value)
        }
      />

      <InputField
        label="Password*"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(e) =>
          handleChange("password", e.target.value)
        }
      />

      <InputField
        label="Company name"
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) =>
          handleChange("company", e.target.value)
        }
      />


      <div className="agency-section">
        <p>
          Are you an Agency?<span>*</span>
        </p>

        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={(e) =>
                handleChange("agency", e.target.value)
              }
            />
            <span className="custom-radio"></span>
            Yes
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={(e) =>
                handleChange("agency", e.target.value)
              }
            />
            <span className="custom-radio"></span>
            No
          </label>
        </div>

      </div>

      <Button
        text="Create Account"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default Register;