import Photo from "../shared/Photo";
import { images, leadership } from "../../data/site-data";

export default function LeadershipSection() {
  return (
    <section id="about" className="sec wrap">
      <h2>Association leadership</h2>
      <p className="sub">The people who guide and coordinate the association. Names, photographs and designations below are placeholders until official details are supplied.</p>
      <div className="lead">
        {leadership.map((person) => (
          <figure key={person.image}>
            <div className="ph"><Photo className="leader_img" src={images[person.image]} alt={`Portrait of ${person.name}`} /></div>
            <figcaption>
              <b>{person.name}</b>
              <span>{person.title.map((line, index) => (
                <span key={line}>{index > 0 && <br />}{line}</span>
              ))}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
