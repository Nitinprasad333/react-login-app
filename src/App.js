import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../src/logo.svg";
import { Card, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Background from "./images/colorful.jpg";
import { connect } from "react-redux";
import {
  showAleart,
  closeAleart,
  add,
  sub,
  reset,
  showDevName,
  LogoutAction,
  getPostsAction,
  getPostSingle,
} from "./redux/reducers/reduxActions/actions";
import Header from "./components/Header";
import Postcard from "./components/Postcard";
import {Session} from './components/Session';
import TransitionGroup from 'react-transition-group';

function App(props) {
  let [posts, setPosts] = useState(props.allPosts);
  let [allData, setAllData] = useState(props.allPosts);
  let [showPosts, setShow] = useState(false);
  let [rowData, setRowData] = useState("");
  let [search, setSearch] = useState("");
  let [found, setFound] = useState([]);
  let [myData, setMyData] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  ]);
  let [title, setTitle] = useState("");
  let [user, setUser] = useState("");

  useEffect(() => {
    let mounted = true;
    console.log("Dash useeffectrun");
    console.log(isClientOrServer());

    // getPosts();
    if (search) {
      console.log("ifblockuse", JSON.parse(search));
      setTimeout(() => {
        b(JSON.parse(search));
      }, 500);

      console.log("ifblockuse data1", found);
    }

    setPosts(props.allPosts);
    setAllData(props.allPosts);

    console.log("ifblockuse data", b());
    console.log("useeffect App posts", posts);
    console.log("useeffect App  allData", allData);
    console.log("useeffect App  Session", Session());
    const isSession = Session();
    if (!isSession) {
      let Logout = "Logout";
      props.LogoutAction();
      props.getPostsAction(Logout);
    }
  

    return () => (mounted = false);
  }, [props, search]);


  const getRowData = (data) => {
    console.log("row Data", data);
    // setRowData(data);
    setRowData((state)=>({
      data
    }))
  };

  const showAllPosts = () => {
    console.log("Showpostcall",posts,allData);
    let Login = "Login";
    setShow(true);
    if (posts !== null && allData !== null && posts.length == 0 && allData.length == 0) {
      props.getPostsAction(Login);
    }

    console.log("my Array", myData);
  };

  const hideAllPosts = () => {
    setShow(false);
  };

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addUser = (e) => {
    setUser(e.target.value);
  };

  const submitDetail = (e) => {
    e.preventDefault();
    if (title === "" || user === "") {
      alert("Blank not allowed");
    }
    let Data = {
      title: title,
      id: user,
    };

    posts.push(Data);
    allData.push(Data);

    setTitle(""); 
    setUser("");
  };

  const logOut = () => {
    let Logout = "Logout";
    props.LogoutAction();
    props.getPostsAction(Logout);
    sessionStorage.removeItem("userSession");
    props.history.push("/");
  };

  const removePost = (data) => {
    console.log("removeclick", data);
    const newData = posts.filter((rst, id) => {
      return rst.title !== data.title;
    });

    setPosts(newData);
    setAllData(newData);
  };

  const searchHandler = (e) => {
    const val = e.target.value;
    setSearch(val);
    props.getPostSingle(val);
    if (val !== search) {
      console.log("if searchfinal", b());
    }
  };

  function b(idToSearch) {
    if (idToSearch && search !== "") {
      let foundrst = allData.filter((item) => {
        console.log("ifblockuse function b", item.id, idToSearch);
        return item.id == idToSearch;
      });
      console.log("if dataaaaafound", foundrst);
      setFound(foundrst);
      setPosts(foundrst);
    }
  }

  const isClientOrServer = () => {
    return typeof window !== "undefined" && window.document
      ? "client side"
      : "server side";
  };

  return (
    <div
      class=""
      style={{
        backgroundColor: "whitesmoke",
        backgroundImage: `url(${Background})`,
        height: showPosts ? "" : "100vh",
      }}
    >
      {/* <div class="row" style={{ backgroundColor: "teal", height: 40 }}>
        <div class="col-8">

          <h2 style={{ color: "whitesmoke" }}>{props.title}</h2>
        </div>

        <div class="col-4">
          <div
            style={{
              display: "flex",
              color: "#000",
              justifyContent: "flex-end",
            }}
            onClick={logOut}
          >
            <img src={Logo} width="30px" height="30px" /> &nbsp; <p>Logout</p>
          </div>
        </div>
      </div> */}
      <Header
        logOut={logOut}
        showAllPosts={showAllPosts}
        hideAllPosts={hideAllPosts}
        showPosts={showPosts}
        history={props.history}
      />
      {/* <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-8">
          <button
            class="btn btn-success sm"
            onClick={showAllPosts}
            style={{ width: "100px" }}
          >
            Show Posts
          </button>
        </div>
        {showPosts && (
          <div class="col-4">
            <button class="btn btn-warning sm" onClick={hideAllPosts}>
              Hide Posts
            </button>
          </div>
        )}
      </div> */}
      {rowData && showPosts && (
        <div>
          <lable>Selected Row Details are :</lable> <br />
          <lable> Post Title : {rowData.title}</lable>
          <br />
          <lable> Post Created By : {rowData.userId}</lable>
          <br />
          <lable> Is Completed : {JSON.stringify(rowData.completed)}</lable>
        </div>
      )}
      <div class="form-group">
        {" "}
        <br />
        <form onSubmit={submitDetail}>
          <input
            class="form-control"
            placeholder="*Enter title"
            value={title}
            onChange={addTitle}
            name="title"
          />{" "}
          <br />
          <input
            class="form-control"
            placeholder="*Enter userid"
            value={user}
            onChange={addUser}
            name="password"
          />
          <br />
          <input
            type="submit"
            style={{ borderRadius: "16px" }}
            class="btn btn-danger"
          />
        </form>
      </div>{" "}
      <br />
     
      {showPosts && (
        <input
          class="form-control"
          placeholder="search id"
          value={search}
          type="number"
          onChange={searchHandler.bind(this)}
        />
      )}{" "}
      <hr />
      <div>
      <a href="https://reactjs.org/">React Documention</a>
      </div>
      {search && (
        <p style={{ color: "#fff" }}>
          Search Content -:{props.singlePost.title}
        </p>
      )}
      <br />
      {/* <div onClick={()=>props.getPostsAction()}><p>GET_POSTS</p></div> <br/> */}
      {!showPosts && (
         <div style={{display:'flex',justifyContent:'center',paddingLeft:1,}}>
        <Card >
          <Card.Content>
            <Card.Header>{props.count}</Card.Header>
            <Card.Meta>Counter updating from Redux-Reducer</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div class="ui three buttons">
              <Button basic color="green" onClick={() => props.add(1)}>
                Add
              </Button>
              <Button basic color="red" onClick={() => props.sub(1)}>
                Subs
              </Button>
              <Button basic color="blue" onClick={() => props.reset()}>
                Reset
              </Button>
            </div>
          </Card.Content>
        </Card>
        </div>
      )}
      {showPosts &&  allData !== null &&  (
        <div>
          {search  
            ? posts.map((data, i) => {
                return (
                  <Postcard
                    data={data}
                    getRowData={getRowData}
                    removePost={removePost}
                  />
                );
              })
            : allData.map((data, i) => {
                return (
                  <Postcard
                    data={data}
                    getRowData={getRowData}
                    removePost={removePost}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.countRed.counter,
    devName: state.countRed.devName,
    title: state.countRed.title,
    appToken: state.countRed.appToken,
    allPosts: state.countRed.allPosts,
    singlePost: state.countRed.singlePost,
  };
};

export default connect(mapStateToProps, {
  showAleart,
  closeAleart,
  add,
  sub,
  reset,
  showDevName,
  LogoutAction,
  getPostsAction,
  getPostSingle,
})(App);
