import React, {Component} from "react";
import {Bar, Line} from "react-chartjs-2";
import {
  Badge,
  Button,
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBlock,
  Form,
  FormGroup,
  Input,
  Table
} from "reactstrap";

import Application from "../../components/Application/Application"

//Random Numbers
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }



  render() {

    // get info here
    return (
           <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Your Items
                            </CardHeader>
                            <CardBlock>
                            
                                <Application you={true}/>
                              
                            </CardBlock>
                            </Card>
                        </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Marketplace
                            </CardHeader>
                            <CardBlock>
                                <Application/>
                               
                               
                            </CardBlock>
                            </Card>
                        </Col>
                      </Row>
            </div>
    )
  }
}

export default Dashboard;
