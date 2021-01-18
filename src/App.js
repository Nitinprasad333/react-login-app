import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "./images/avatar.png";
import { Card, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Background from './images/colorful.jpg'; 
import { connect } from "react-redux";
import {showAleart,closeAleart, add, sub, reset,
  showDevName,LogoutAction} from './redux/reducers/reduxActions/actions'

function App(props) {
  let [posts, setPosts] = useState([]);
  let [allData, setAllData] = useState([]);
  let [showPosts, setShow] = useState(false);
  let [rowData, setRowData] = useState("");
  let [search, setSearch] = useState("");
  let [found,setFound] = useState([]);
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
    console.log("useeffectrun");


    
    getPosts();
    if (search ) {
      console.log("ifblockuse",JSON.parse (search))
      setTimeout(() => {
        b(JSON.parse(search))
      }, 500);
        
 
      console.log("ifblockuse data1",found)
    }
    console.log("ifblockuse data",b())
    console.log("posts", posts);
    return () => (mounted = false);
  }, [search]);

  const getPosts = () => {
    if (posts.length === 0) {
      return axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then((rst) => {
          console.log(rst);
          if (rst) {
            setPosts((rst.data));
            setAllData(rst.data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getRowData = (data) => {
    console.log("row Data", data);
    setRowData(data);
  };

  const showAllPosts = () => {
    setShow(true);
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
    props.LogoutAction()
     props.history.push("/");
  };

  const removePost = (data) => {
    console.log("removeclick", data);
    const newData = posts.filter((rst, id) => {
      return rst.title !== data.title;
    });

    setPosts(newData);
    setAllData(newData)
  };

 const searchHandler= (e)=>{

  const val = e.target.value
   setSearch(val)
   if (val !== search) {
    console.log("if searchfinal",b())
   }

   

 
  }

  function b(idToSearch) {
    if (idToSearch && search !== "") {
    let foundrst=  allData.filter(item => {
        console.log("ifblockuse function b",item.id,idToSearch)
        return   item.id == (idToSearch)
      })
console.log("if dataaaaafound",foundrst)
      setFound(foundrst);
      setPosts(foundrst)
    }


    
  };



  return (
    
    <div class="container" style={{ 
      backgroundColor:'whitesmoke',
      backgroundImage:`url(${Background})`, 
      height:showPosts ? "" : '100vh' }}>
      <div class="row" style={{ backgroundColor: "teal",height:40 }}>
        <div class="col-8">
          <h2 style={{ color: "whitesmoke" }}>{props.title}</h2> &nbsp; 
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
          <p>{props.devName}</p>  <img src={Logo} width="30px" height="30px" /> &nbsp; <p>Logout</p>
          </div>
        </div>
      </div>

      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-8">
          <button
            class="btn btn-success sm"
            onClick={showAllPosts}
            style={{ width: "100px" }}
          >
            Show Posts
          </button>
        </div>

        <div class="col-8">
          <button
            class="btn btn-success sm"
            onClick={()=>props.showDevName()}
            style={{ width: "100px" }}
          >
            Show Developer
          </button>
        </div>
        <div class="col-4">
          <button class="btn btn-primary sm" onClick={hideAllPosts}>
            Hide Posts
          </button>
        </div>
      </div>

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
      </div> <br/>

      <input
            class="form-control"
            placeholder="search id"
            value={search}
            type='number'
            onChange={searchHandler.bind(this)}
          />{" "}


      <hr />


      <Card style={{backgroundColor:'silver'}}>
              <Card.Content >
                <Card.Header>{props.count}</Card.Header>
                <Card.Meta>Counter updating from Reducer</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div class="ui three buttons">
                  <Button basic color="green" onClick={()=>props.add(1)}>
                    Add
                  </Button>
                  <Button
                    basic
                    color="red"
                    onClick={()=>props.sub(1)}
                  >
                    Subs
                  </Button>
                  <Button
                    basic
                    color="blue"
                    onClick={()=>props.reset()}
                  >
                    Reset
                  </Button>
                </div>
              </Card.Content>
            </Card>


      {
        showPosts && (
          <Card.Group>
         { search ?  posts.map((data, i) => {
          return (
            <Card key={data.id}>
              <Card.Content onClick={getRowData.bind(this, data)}>
                <Image floated="right" size="mini" src={Logo} />
                <Card.Header>{data.id}</Card.Header>
                <Card.Meta>{JSON.stringify(data.completed)}</Card.Meta>
                <Card.Description>{data.title}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div class="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button
                    basic
                    color="red"
                    onClick={removePost.bind(this, data)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Content>
            </Card>
          );
        }) : allData.map((data, i) => {
          return (
            <Card key={data.user}>
              <Card.Content onClick={getRowData.bind(this, data)}>
                <Image floated="right" size="mini" src={Logo} />
                <Card.Header>{data.id}</Card.Header>
                <Card.Meta>{JSON.stringify(data.completed)}</Card.Meta>
                <Card.Description>{data.title}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div class="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button
                    basic
                    color="red"
                    onClick={removePost.bind(this, data)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Content>
            </Card>
          );
        }) }
      </Card.Group>
        )
      }
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count:state.countRed.counter,
    devName:state.countRed.devName,
    title:state.countRed.title,
    appToken:state.countRed.appToken,
  
  };
};

export default connect(mapStateToProps, 
  { showAleart, 
    closeAleart,
    add,
    sub,
    reset,
    showDevName,
    LogoutAction 
})(App);

