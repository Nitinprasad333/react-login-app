import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./styleHeader.css";
import Logo from "../images/avatar.png";

const Header = (props) => {
  useEffect(() => {
    console.log("Header Props", props);
  }, [props]);

  const contactUs = () => {
    console.log("contact", props);
    props.history.push("/dev");
  };

  const dasHandler = () => {
    console.log("dashhandler call", props);
    if (props.data) {
      props.data.history.push("/dashboard");
    } else {
      props.history.push("/dashboard");
    }
  };

  return (
    <div>
      <div>
        <ul>
          {!props.showPosts && (
            <li>
              <h6
                class={!props.showPosts && !props.data ? "active" : ""}
                onClick={props.hideAllPosts}
                onClick={dasHandler}
              >
                Home
              </h6>
            </li>
          )}

          {!props.data && (
            <li
              onClick={props.showAllPosts}
              class={props.showPosts ? "active" : ""}
            >
              <h6>Show Posts</h6>
            </li>
          )}

          {!props.data && props.showPosts && (
            <li
              onClick={props.hideAllPosts}
              class={!props.showPosts ? "hide" : ""}
            >
              <h6>Hide Posts</h6>
            </li>
          )}

          <li>
            <h6 onClick={contactUs} class={props.data ? "active" : ""}>
              Contact
            </h6>
          </li>

          {!props.data && (
            <li style={{ float: "right", position: "" }} onClick={props.logOut}>
              <h6>
                {" "}
                <img src={Logo} width="20px" height="20px" /> Logout
              </h6>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
