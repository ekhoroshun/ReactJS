import React, { Component } from 'react';
import MainContainer from '../src/MainContainer.js';
import ProjectsPanel from '../src/ProjectsPanel.js';
import TeamsPanel from '../src/TeamsPanel.js';
import EmployeesPanel from '../src/EmployeesPanel.js';


class Overview extends Component {
    
render() 
    { 
        let url = "https://hidden-dawn-99445.herokuapp.com/"

return (
    <div>
      <MainContainer sidebar={this.props.title}>
      <h1 className="page-header">{this.props.title}</h1> 
      <div className="row"> 
        <div className="col-md-4"> 
          <ProjectsPanel title="Projects" dataSource={url + "projects"} />
        </div> 
        <div className="col-md-4"> 
          <TeamsPanel title="Teams" dataSource={url + "teams"} />
        </div> 
        <div className="col-md-4"> 
          <EmployeesPanel title="Employees" dataSource={url + "employees"} />
        </div> 
      </div> 
      </MainContainer>
    </div>
  );
}
}

export default Overview;