import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <a
        key={props.title}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="  "
      >
        <div className="w-72 min-h-[350px] flex flex-col justify-between rounded-2xl border border-amber-50 shadow-md p-6 text-center bg-[#DCD7C9] m-4 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-600 hover:to-orange-400 hover:shadow-2xl text-gray-800 hover:text-amber-50 cursor-pointer">
          <div>
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-40 rounded-2xl object-cover mx-auto mb-3"
            />
            <h3 className="text-xl font-semibold">{props.title}</h3>
          </div>
          <p className="text-sm mb-4">{props.description.substring(0, 100)}</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
