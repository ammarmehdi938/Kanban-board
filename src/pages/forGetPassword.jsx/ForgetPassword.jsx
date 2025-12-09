function ForgotPassword() {
  return (
    <div className="ForgetMain">
      <h1>Reset Password</h1>
      <p>
        Enter your email address and we'll send you instructions to reset your
        password
      </p>
      <div>
        <input type="password"></input>
      </div>
      <div>
        <p>
          💡 You'll receive an email with a link to reset your password. The
          link will expire in 1 hour.
        </p>
      </div>
      <div>
        <button>Send Reset Link</button>
      </div>
      <div>
        <button>Cancel</button>
        <a href="/ResetPassword">
          <button>Send Reset Link</button>
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;
