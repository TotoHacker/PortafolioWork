import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const projects = [
    { id: 1, name: "E-commerce React", url: "https://totohacker.github.io/UTSports/", img: `${process.env.PUBLIC_URL}/Ut_Logo.png` },
    { id: 2, name: "Sistema Gestor de Estadias", url: "http://estadia.ddns.net:8000/login", img:"http://estadia.ddns.net:8000/img/logos/logo-utCanc%C3%BAn.png" },
    { id: 3, name: "Sistema de Recursos Docentes", url: "http://prestamos.ddns.net:8010/login", img: "http://prestamos.ddns.net:8010/Imagenes/Logo2.png" },
    { id: 4, name: "Aplicación IoT", url: "https://tu-link-aqui.com", img: `${process.env.PUBLIC_URL}/app_iot.jpg` },
    { id: 5, name: "Página Personalizada", url: "https://tu-link-aqui.com", img: `${process.env.PUBLIC_URL}/pagina_personalizada.jpg` },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Cambia de proyecto cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval); // Limpieza del intervalo
  }, [projects.length]);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App min-h-screen bg-gray-900 flex items-center justify-center p-5">
      <div className="max-w-4xl w-full relative">
        {/* Título y Foto */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-teal-400 font-bold mb-2">Mi Portafolio</h1>
          <img
            src={`${process.env.PUBLIC_URL}/Yo.jpg`} 
            alt="Luis Antonio Balcazar"
            className="rounded-full w-32 h-32 mx-auto mb-2 shadow-lg"
          />
          <p className="text-white text-xl">Luis Antonio Balcazar Chuc</p>
        </div>

        {/* Tarjeta con animaciones */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            src={projects[currentProjectIndex].img}
            alt={projects[currentProjectIndex].name}
            className="rounded-lg w-48 h-44 mx-auto mb-2 shadow-lg"
          />
          
          <h2 className="text-white text-2xl font-semibold text-center mb-4">
            {projects[currentProjectIndex].name}
          </h2>
          <div className="text-center mb-4"> {/* Espacio adicional para evitar que las flechas bloqueen el botón */}
            <button
              className="text-teal-400 underline  relative z-20 transition-all duration-300 hover:text-teal-200"
              onClick={() => window.location.href = projects[currentProjectIndex].url}
            >
              Ver Proyecto
            </button>
          </div>

          {/* Flechas para navegar entre los proyectos */}
          <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
            <button
              onClick={handlePreviousProject}
              className="text-white bg-teal-600 hover:bg-teal-700 p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextProject}
              className="text-white bg-teal-600 hover:bg-teal-700 p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
