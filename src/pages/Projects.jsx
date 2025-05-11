function Projects() {
  return (
    <div className="projects my-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
              Contoh
            </button>
          </div>
          <div className="card shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">Project 2</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
              Contoh
            </button>
          </div>
          <div className="card shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">Project 3</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
              Contoh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;