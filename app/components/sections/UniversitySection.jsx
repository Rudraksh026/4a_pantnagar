import Photo from "../shared/Photo";
import { images } from "../../data/site-data";

const universityLinks = [
  ["u1", "Alumni Achievements"],
  ["u2", "Faculty Achievements"],
  ["u3", "University Milestones"],
];

export default function UniversitySection() {
  return (
    <section className="sec uni">
      <div className="wrap">
        <h2>Connect with the university</h2>
        <p className="sub">Follow what Pantnagar is doing, and the people who make it what it is.</p>
        <div className="uni-grid">
          {universityLinks.map(([key, title]) => (
            <a href="#" key={key}><div className="ph"><Photo src={images[key]} alt="" /></div><span>{title}</span></a>
          ))}
          <a href="#" className="uni-wide"><div className="ph"><Photo src={images.u4} alt="" /></div><span>Connect With the University</span></a>
        </div>
      </div>
    </section>
  );
}
