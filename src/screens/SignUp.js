import NavBar from './components/NavBar';
const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Phone:</label>
          <input type="tel" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
