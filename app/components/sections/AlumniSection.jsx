import Photo from "../shared/Photo";
import { imageUrl, people } from "../../data/site-data";

export default function AlumniSection() {
  return (
    <section id="alumni" className="sec wrap">
      <div className="alumni-head">
        <div><h2>Latest alumni members</h2><p>Demo profiles with fictional names, shown until real members are added.</p></div>
        <a className="lnk" href="#alumni">Browse Alumni Directory</a>
      </div>
      <div className="mem">
        {people.map(([name, batch, id]) => (
          <div key={name}>
            <div className="ph"><Photo src={imageUrl(id, 300)} alt={`${name} (demo)`} /></div>
            <b>{name}</b><span>Batch of {batch}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
