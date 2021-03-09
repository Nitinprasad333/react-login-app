import React from 'react';
import { Card, Button, Image } from "semantic-ui-react";
import Logo from "../../src/logo.svg";

const Postcard = (props) => {
    return (
        <div style={{display:'flex', justifyContent:'center',paddingLeft:1 }}>
          <Card.Group> 
             <Card key={props.data.id} style={{ backgroundColor: "#333",paddingTop:3}}>
                    <Card.Content onClick={props.getRowData.bind(this, props.data)}>
                      <Image floated="right" size="mini" src={Logo} />
                      <Card.Header style={{color:"#fff"}}>{props.data.id}</Card.Header>
                      <Card.Meta style={{color:"#fff"}}>{JSON.stringify(props.data.completed)}</Card.Meta>
                      <Card.Description style={{color:"#fff"}}>{props.data.title}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div class="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button
                          basic
                          color="red"
                          onClick={props.removePost.bind(this, props.data)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  </Card.Group>
        </div>
    );
}

export default Postcard;
