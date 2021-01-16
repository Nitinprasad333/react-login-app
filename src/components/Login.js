import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Background from "../images/colorful.jpg";

const Login = (props) => {
  let [token, setToken] = useState("");
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [term, setTerm] = useState(false);

  useEffect(() => {
    console.log("props", props.history, token);

    if (token) {
      localStorage.setItem("token", token);
      props.history.push("/dashboard");
    }
  }, [token]);

  const userNameHandler = (e) => {
    setUser(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // const agreeHandler=(e,{data})=>{
  // console.log("checkobox",e,data)
  // }

  const agreeHandler = (e, { checked }) => {
    console.log("Click", checked);
    setTerm(checked);
  };

  const loginHandler = async () => {
    if (user === "nitin" || password === 123) {
      const tokDat = "_" + Math.random().toString(36).substr(2, 9);
      console.log("tooookekn 1", tokDat);
      setToken(tokDat);

      // alert("Login Successfully")
      setUser("");
      setPassword("");
      console.log("tooookekn 2", token);
    } else if (user === "" || password === "") {
      alert("Enter Inputs to Login");
    } else {
      if (user !== "nitin" || password !== 123) {
        alert("Invalid Credantials");
      }
    }
  };

  const confirmHandler = () => {
    alert("select agree for t&c");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
        height: "100vh",
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "silver" }}>Login</h1>
        <Form onSubmit={term ? loginHandler : confirmHandler}>
          <Form.Field>
            <label style={{ color: "#fff" }}>User Name</label>
            <input
              placeholder="User Name"
              onChange={userNameHandler}
              value={user}
              style={{ borderRadius: "20px" }}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "#fff" }}>Password</label>
            <input
              placeholder="Password"
              onChange={passwordHandler}
              value={password}
              style={{ borderRadius: "20px" }}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              onClick={agreeHandler}
            />
          </Form.Field>
          <Button
            type="submit"
            class="ui primary button"
            style={{ marginLeft: "30%" }}
          >
            Signin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
