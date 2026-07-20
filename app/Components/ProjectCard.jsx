import React from "react";

function ProjectCard(props) {
  const previewText =
    props.description?.length > 110
      ? props.description.slice(0, 110) + "..."
      : props.description;

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative w-80 min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-orange-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col p-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img
              src={props.image}
              alt={props.title}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {props.title}
              </h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                View
              </span>
            </div>

            <p className="text-sm leading-7 text-gray-300">
              {previewText}
            </p>

            <div className="mt-auto pt-6">
              <div className="h-px w-full bg-gradient-to-r from-cyan-400/40 via-white/10 to-orange-400/40" />
              <p className="mt-4 text-xs uppercase tracking-[4px] text-gray-400">
                Open project
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;