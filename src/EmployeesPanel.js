import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class EmployeesPanel extends Component {
    constructor(props){
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
        employees: []
    }
    }
    componentDidMount(){
        axios.get(this.dataSource).then((res) => {
            this.setState({ employees: res.data });
        }).catch((err) => {
            console.log("error");
        });
    }

    componentWillMount(){
    }
        render(){
            return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {this.state.employees.map((element, index) => {
                            
                            return (
                                <tr>
                                    <td>{element.FirstName} {element.LastName}</td>
                                    <td>{element.Position.PositionName}</td>
                                </tr>
                            )
                        })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                    </div>
                  </div>
            )
        }
    
}
export default EmployeesPanel;