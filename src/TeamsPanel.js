import React  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class TeamsPanel extends React.Component {
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount(){
        axios.get(this.dataSource).then((res) => {
            this.setState({ teams: res.data });
        }).catch((err) => {
            console.log("error");
        });
    }

    componentWillMount() {
    }
        render() {
            return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {this.state.teams.map((team, index) => {
                            
                            return (
                                <tr>
                                    <td>{team.TeamName}</td>
                                    <td>{team.Employees.length} Employees</td>
                                </tr>
                            )
                        })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/teams" className="btn btn-primary form-control">View All Teams Data</Link>
                    </div>
                  </div>
                
            )
        }
    }
   

export default TeamsPanel;