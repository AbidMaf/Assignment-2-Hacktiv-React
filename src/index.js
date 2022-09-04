import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Organism/Navbar';
import ProfileData from './Components/Molecules/ProfileData';
import Project from './Components/Organism/Project';
import ProjectTabs from './Components/Organism/ProjectTabs';
import Organisation from './Components/Molecules/Organisation';
import reportWebVitals from './reportWebVitals';

let imageData = [
  {
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      name: 'John Doe',
  },
  {
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      name: 'John Doe',
  }
];

let projectData = [
  {
    title: 'Spot-2.github.io',
    description: '',
    availibility: 'Public',
    language: 'PHP',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80'
  },
  {
    title: 'Spot-2.github.io',
    description: '',
    availibility: 'Public',
    language: 'PHP',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80'
  },
  {
    title: 'Spot-2.github.io',
    description: '',
    availibility: 'Public',
    language: 'PHP',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80'
  },
  {
    title: 'Spot-2.github.io',
    description: 'lorem ipsum tut wuri handayani',
    availibility: 'Public',
    language: 'PHP',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80'
  }
]

let organisationData = [
  {
    profilePict: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
    name: 'Kompetegram',
    href: 'instagram.com/abd_maf'
  },
  {
    profilePict: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
    name: 'Kucingram',
    href: 'instagram.com/abid.naf'
  },
]

console.log("ProjectData => ", projectData);

const style = () => ({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    crossorigin="anonymous"
    />
    <Navbar />
    <section className="container-body">
      <section className="profile-container">
        <ProfileData />
        <Organisation />
      </section>
      <section className="container-project">
        <ProjectTabs />
        <section className="project-body">
          {
            projectData.map((item, index) => {
              return (
                <Project
                title={item.title} 
                description={item.description} 
                availibility={item.availibility} 
                language={item.language} 
                image={item.image}
                />
              )
            })
          }
        </section>
      </section>
    </section>
    
  </React.StrictMode>
);
// Project created by Abid Maf
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
