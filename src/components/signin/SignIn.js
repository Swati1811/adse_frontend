import './Signin.css';
import {LOGO_URL} from '../../utils/constants';
import Video from "../../assets/videos/Cropped_Crane_Animation_V4.mp4";

const SignIn = () => {
  return (
      <section className="login-page">
        <div className="login-container container">
          <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 login-form_video">
                  <h1 className="main-heading">
                      Welcome to <br/>
                      <span className="main-heading-primary">Auto Digital Specification Enablement</span>
                  </h1>
                  <video className="crane-video" loop autoplay="" muted>
                      <source src={Video} type="video/mp4" />
                  </video>
                  {/* <video className="crane-video" controls autostart autoPlay src={Video} type="video/mp4" /> */}
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 login-form_wrapp">
                <form className="login-form">
                  <div className="mb-4"> 
                      <img alt="Pidilite Logo" className="logo" src={LOGO_URL} width="95" height="50"></img>
                      <p className="mt-4 subtext">Pidilite’s New auto digital specification enablement software is aimed at selecting the various options for solutions in building construction, be it for exteriors or interiors targeted for viewing to Top consultants/ Architect’s specifiers. </p>
                  </div>
                  <div className="mb-3 py-2 input-field">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control input-field-text" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3 py-2 input-field">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control input-field-text" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary primary-btn mt-2">Sign in</button>
                </form>
              </div>
          </div>
        </div>
	    </section>
  );
};

export default SignIn;
