import Photo from "../shared/Photo";
import { images } from "../../data/site-data";

export default function HeroSection({ onRegister }) {
  return (
    <section id="home" className="wrap hero">
      <div>
        <h1>Connecting Generations of Pantnagarians</h1>
        <p>Bringing together alumni of Govind Ballabh Pant University of Agriculture and Technology to reconnect, share memories, celebrate achievements, and create opportunities for future generations.</p>
        <div className="links">
          <button type="button" className="btn" onClick={onRegister}>Register as Alumni</button>
          <a className="lnk" href="#alumni">Explore Alumni Network</a>
        </div>
      </div>
      <figure>
        <div className="ph"><Photo src={images.hero} alt="Main building of the Pantnagar campus" /></div>
        <figcaption>The GBPUAT campus, Pantnagar (temporary photograph)</figcaption>
      </figure>
    </section>
  );
}
