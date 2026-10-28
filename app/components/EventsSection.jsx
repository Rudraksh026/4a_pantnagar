import Photo from "./Photo";
import { images } from "./site-data";

export default function EventsSection({ onRegister }) {
  return (
    <section id="events" className="sec news">
      <div className="wrap news-grid">
        <article className="feat">
          <div className="ph"><Photo src={images.event} alt="Alumni gathering at a university reunion" /></div>
          <h3>Pantnagarians&apos; Alumni Meet 2026</h3>
          <p className="meta">November 21–22, 2026 · GBPUAT Campus, Pantnagar</p>
          <p>Two days on campus for batches of every decade to meet old friends, walk through familiar halls, and hear from the university and fellow alumni. Registration is open to all alumni and their families.</p>
          <button type="button" className="lnk xbtn" onClick={onRegister}>Register for the meet</button>
          {" "}&nbsp; <a className="lnk" href="#events">View details</a>
        </article>
        <div>
          <h3 className="newsroom-title">Newsroom</h3>
          <ul className="feed">
            <li><time dateTime="2026-10-15">15 October 2026</time><a href="#">Schedule for the Alumni Meet 2026 announced</a></li>
            <li><time dateTime="2026-10-02">2 October 2026</time><a href="#">Alumni achievements and appointments: September update</a></li>
            <li><time dateTime="2026-09-20">20 September 2026</time><a href="#">4A Newsletter, Autumn issue now available</a></li>
            <li><time dateTime="2026-09-08">8 September 2026</time><a href="#">Association announcement: updating your alumni details</a></li>
          </ul>
          <p className="note">Sample headlines for demonstration only.</p>
        </div>
      </div>
    </section>
  );
}
