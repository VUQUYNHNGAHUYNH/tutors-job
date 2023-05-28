import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isActive = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "test",
    isTutor: true,
  };

  return (
    <div className={scroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className={scroll ? "logoText scroll" : "logoText"}>
          <Link to="/" className="link">
            Tutors
          </Link>
        </div>
        <div className="links">
          {currentUser?.isTutor && <span>Become a tutor</span>}
          <span>Sign In</span>
          {!currentUser && <span>Log In</span>}
          {currentUser && (
            <div className="user" onClick={() => setMenuOpen(!menuOpen)}>
              <img src="https://picsum.photos/202" alt="user" />
              <span>{currentUser?.username}</span>
              {menuOpen && (
                <div className="options">
                  {currentUser?.isTutor && (
                    <>
                      <Link className="link" to="/job-posts">
                        Job Posts
                      </Link>
                      <Link className="link" to="/add">
                        Add a post
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      {scroll && (
        <div className="menu">
          <span>test 1</span>
          <span>test 2</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
