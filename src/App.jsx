import React, { useState } from 'react';
import './App.css';
import GenInfo from './genInfo';
import EducationalInformation from './Educational';
import Projects from './Project';

function App() {
  const [info, setInfo] = useState({
    name: 'Abhishek Kumar',
    email: 'abhpinran98@gmail.com',
    address: '123 Main Street, Anytown, USA 12345',
    phone: '000000000000'
  });

  const [eduInfo, setEduInfo] = useState({
    school: 'ABC School of Technology',
    degree: 'Bachelor of Technology',
    graduationYear: '2023'
  });

  const [projectInfo, setProjectInfo] = useState({
    projectName: 'Gangsta Project',
    projectDescription: 'really cool really cool project aaaaa gansstaProjct'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEduEditing, setIsEduEditing] = useState(false);
  const [isProjectEditing, setIsProjectEditing] = useState(false);

  const handleEdit = (newInfo) => {
    setInfo(newInfo);
  };

  const handleEduEdit = (newEduInfo) => {
    setEduInfo(newEduInfo);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEduSave = () => {
    setIsEduEditing(false);
  };

  const handleProjectEdit = (newProjectInfo) => {
    setProjectInfo(newProjectInfo);
  };

  const handleProjectSave = () => {
    setIsProjectEditing(false);
  };

  return (
    <div className="App">
      <h1><u>CV Application</u></h1>
      <br />
      <GenInfo
        info={info}
        onEdit={handleEdit}
        isEditing={isEditing}
        onSave={handleSave}
      />
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <EducationalInformation
        eduInfo={eduInfo}
        onEduEdit={handleEduEdit}
        isEduEditing={isEduEditing}
        onEduSave={handleEduSave}
      />
      {!isEduEditing && (
        <button onClick={() => setIsEduEditing(true)}>Edit Education</button>
      )}
      <Projects
        projectInfo={projectInfo}
        onProjectEdit={handleProjectEdit}
        isProjectEditing={isProjectEditing}
        onProjectSave={handleProjectSave}
      />
      {!isProjectEditing && (
        <button onClick={() => setIsProjectEditing(true)}>Edit Project</button>
      )}
    </div>
  );
}

export default App;