import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ProjectForm from './components/ProjectForm';

function App() {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const handleStartProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowProjectForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onStartProject={handleStartProject} />
      <Hero onStartProject={handleStartProject} />
      <Services />
      <About />
      <Contact />
      {showProjectForm && <ProjectForm onClose={() => setShowProjectForm(false)} />}
    </div>
  );
}

export default App;