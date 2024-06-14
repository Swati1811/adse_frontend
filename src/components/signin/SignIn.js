const SignIn = () => {
  return (
    <div className="container">
      <div className="signInContainer">
        <h2>Login to Your Account</h2>
        <p>Enter your credentials to access your account</p>
        <form>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email id"
            required
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
