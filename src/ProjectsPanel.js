import React from 'react';
import moment from 'moment';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProjectsPanel extends React.Component {
    constructor(props) 
    {
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
        projects: []
    }
}
    componentDidMount(){
        axios.get(this.dataSource).then((res) => {
            this.setState({ projects: res.data });
        }).catch((err) => {
            console.log("error");
        });
    }
    componentWillMount() {
    }
        render() {
            return ( 
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {this.state.projects.map((project, index) => {
                                let activeDate = moment().diff(moment(project.ProjectStartDate),'days');
                                return (
                                    <tr>
                                        <td>{project.ProjectName}</td>
                                        <td>Active {activeDate} days</td>
                                    </tr>
                                )
                            })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                  </div>
            );
        }
}
export default ProjectsPanel;