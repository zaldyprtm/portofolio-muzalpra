import Data from "../backend/Data";
// import Footer from "../layouts/Footer";
const Projects = () => {

  return (
    <>
      <div className="mt-20 mb-10 ">
        <h1 className="font-bold text-4xl text-primary text-center">
          My Recent Projects
        </h1>
        <p className="text-center font-bold text-white mt-2">
          Here are some of my recent projects
        </p>
        <div className="md:grid md:grid-cols-3 md:px-6 mt-10
        grid grid-rows-1 gap-10 
        ">
      {Data.map((data) => (
          <div className="card  md:w-80 w-72 mx-auto bg-transparent backdrop-blur-2xl shadow-2xl hover:scale-110 duration-300" key={data.id}>
            <figure className="px-10 pt-10">
              <img
                src={data.img}
                alt={data.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-primary">{data.title}</h2>
              <p className="text-white">{data.desc}</p>
              <div className="card-actions">
                <button className="btn w-40 mt-2 btn-primary font-bold text-white" 
                onClick={() => window.open(data.url)}
                >VIEW</button>
              </div>
            </div>
          </div>
      ))}
    </div>
      </div>

     {/* < Footer/> */}
    </>
  );
};

export default Projects;
