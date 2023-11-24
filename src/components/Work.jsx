import React from "react";

export const Work = () => {
  return (
    <div className="w-full py-[10rem] px-4">
      <section id="work">
        <h1 className="work-title">
          W<span className="work-o">o</span>rks
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 work-cards">
          <div className="work-card w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-1">Health App</h2>
            <div className="text-center font-medium">
              <p className="py-1 mx-8 mt-8">
                Presenting the Practo App: a Python-powered healthcare solution
                developed with PyQt5. Seamlessly connect with doctors, schedule
                virtual consultations, and leverage symptom-based disease
                identification. The app offers personalized medication
                suggestions and efficient health record management.
              </p>
            </div>
          </div>
          <div className="w-full work-card shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-1">
              Netflix clone
            </h2>
            <div className="text-center font-medium">
              <p className="py-1 mx-8 mt-8">
                Introducing the Django-React Netflix Clone: a cutting-edge
                project combining Django backend and React.js frontend
                technologies. This feature-rich platform mirrors Netflix's
                functionality, featuring user authentication, streaming
                capabilities, dynamic content rendering, and a sleek user
                interface.
              </p>
            </div>
          </div>
          <div className="w-full work-card shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-1">
              Real time chat
            </h2>
            <div className="text-center font-medium">
              <p className="py-1 mx-8 mt-8">
                Introducing the Real-Time Chat Application: A robust platform
                built with Django, React, and Socket.IO. This project showcases
                advanced web development techniques, enabling seamless real-time
                communication. Features include user authentication, live
                message updates, and a dynamic interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
