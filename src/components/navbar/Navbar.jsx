import { useEffect, useState } from "react";
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
        <div className={scroll ? "logoText scroll" : "logoText"}>Tutors</div>
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
                      <span>Job Posts</span>
                      <span>Add a post</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Log Out</span>
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
