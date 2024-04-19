import InputBox from "./Form";
import Button from "./Button";

import "../styles/CardBox.css";

const FormBody = () => {
  return (
    <div className="container cardbox">
      <div className="content cardbox">
        <div className="info code">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers hink
            is invaluable.
          </p>
        </div>

        <div className="card content-box">
          <div className="topButtonCard">
            <Button className="free-button" text="Try it free 7 days then $20/mo. thereafter"/>
          </div>
          <div className="card content">
            <InputBox
              type="text"
              className="FirstName-input"
              placeholder="First Name"
            />
            <InputBox
              type="text"
              className="LastName-input"
              placeholder="Last Name"
            />
            <InputBox
              type="email"
              className="Email-input"
              placeholder="Email Address"
            />

            <InputBox
              type="password"
              className="Pass-input"
              placeholder="Password"
            />

            <Button text="CLAIM YOUR FREE TRIAL" />
            <p className="p-terms">
              By clickying this button, you accept{" "}
              <span>Terms and Services</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBody;
