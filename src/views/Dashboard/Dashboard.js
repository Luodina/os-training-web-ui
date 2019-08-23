import React, { Component } from 'react';
import { Card, CardBody,CardImg, CardHeader, Col,Alert, Row, Button, Table, Label, Image } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import ModalAddNew from './Components/Modal';

import { sysConfig } from "../../_config";
import axios from 'axios'
import success from '../../assets/img/brand/success.jpg'
import fail from '../../assets/img/brand/fail.jpeg'
const style = { "color": "rgba(0, 0, 0, 0.54)" };
class Cluster extends Component {
    constructor(props) {
        super(props);
        let mw = 70;
        let dw = 100;
        this.state = {
            isOpen: false,
            rowSelection: "multiple"
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: sysConfig.API_PREFIX + '/api/data'
        }).then(response => {
            console.log("response", response)
            this.setState({
                data: response.data.content
            })
        }).catch(err => {
            console.log("error", err)
            this.setState({
                data: "Ooooopppsssss"
            }) 
        })
    }

    render() {
        let colorType = this.state.data ? (this.state.data === "Ooooopppsssss"?"danger":"success"):"warning";
        return (
            <div className="animated fadeIn" >
                <Row>
                    <Col xs="12" >
                        <Card>
                            <CardHeader>
                                <div>
                                    <h5 style={style} > Deployment Result:</h5> 
                                </div> 
                               
                            </CardHeader> 
                            {/* <CardImg top width="100%" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwit1Kr6gZbkAhURat4KHUmxD0wQjRx6BAgBEAQ&url=https%3A%2F%2Fimgur.com%2Fgallery%2FXJyemeI&psig=AOvVaw3Dd9qmQgOTtMBUQB8tIQqp&ust=1566546387614457" alt="Card image cap" />  */}
                            
                            <CardBody>
                                <Alert color={colorType}>
                                    {this.state.data}
                                </Alert>
                                    {/* <img width="100%" src='../../assets/img/brand/ha_logo.gif'/> */}
                            {/* <CardImg top width="100%" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwit1Kr6gZbkAhURat4KHUmxD0wQjRx6BAgBEAQ&url=https%3A%2F%2Fimgur.com%2Fgallery%2FXJyemeI&psig=AOvVaw3Dd9qmQgOTtMBUQB8tIQqp&ust=1566546387614457" alt="Card image cap" /> */}
                            </CardBody >
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Cluster;
