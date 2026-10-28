import Photo from "../shared/Photo";
import { images } from "../../data/site-data";

const resources = [
  { className: "res-a", image: "r1", alt: "Campus map", title: "Campus Map", description: "Find departments, hostels and the Alumni Meet venue." },
  { className: "res-b", image: "r2", alt: "Aerial view of campus", title: "360° Campus View", description: "Walk the campus from wherever you are." },
  { className: "res-c", image: "r3", alt: "Students on campus", title: "Videos at GBPUAT", description: "Films on campus life, research and events." },
];

export default function ResourcesSection() {
  return (
    <section className="sec wrap">
      <h2>Campus resources</h2>
      <p className="sub">Planning a visit, or just curious how the campus looks today?</p>
      <div className="res">
        {resources.map((resource) => (
          <a href="#" className={resource.className} key={resource.image}>
            <div className="ph"><Photo src={images[resource.image]} alt={resource.alt} /></div>
            <b>{resource.title}</b><span>{resource.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
