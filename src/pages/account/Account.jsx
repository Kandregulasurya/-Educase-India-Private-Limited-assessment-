import "./account.css"
function Account() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="account-page">
      <h2>Account Settings</h2>

      <div className="profile-section">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
        />

        <div>
          <h3>{user.fullName || "Marry Doe"}</h3>

          <p>
            {user.email ||
              "marrydoe@gmail.com"}
          </p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet,
        Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor
        Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Account;