import { db } from '../config/Database';
import { useState } from 'react';
import { navigate } from '@reach/router';

const UserSignIn = () => {
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    db.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);

        if (user.role === 'customer') {
          navigate('/homepage');
        }
      });
  };

  return (
    <div className="user-signin">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <input type="submit" value="Sign In" />
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default UserSignIn;
