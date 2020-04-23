import React from "react";
import { FirebaseContext } from "../Firebase";

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      description: "",
      voiceMessageUrl: "",
    };
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default Appointment;
/*const Appointment = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);
export default Appointment;*/
