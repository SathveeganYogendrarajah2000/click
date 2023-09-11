import NavBar from './components/NavBar';
const SignIn = () => {
  return (
    <div>
      <NavBar />
      <div className="sign-in">
        <h2>Sign In</h2>
        <form>
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
