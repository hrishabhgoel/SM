import main from '../assets/bg-main.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

// styles
import { Wrapper } from '../styles/Enter';

const Enter = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        {/* info for the app */}
        <div className="container page">
          <div className="info">
            <h1>
              <strong>
                Study
                <span>Mate</span>
              </strong>
            </h1>
            <p>
              A place to find frinds and groups to study with, from your own
              university! Find and join PUBLIC study group on the map. Create
              and host PRIVATE study groups. Share information about the
              aforementioned and talk to your cramming buddies in the build in
              chat!
            </p>
            <Link to="/register" className="btn btn-hero">
              SignUp/SignIn
            </Link>
          </div>
          <img src={main} alt="background-main-page" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Enter;
