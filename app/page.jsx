"use client";

import { useEffect, useRef, useState } from "react";

const imageUrl = (id, width = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

const images = {
  hero: imageUrl("1562774053-701939374585", 1200),
  event: imageUrl("1492684223066-81342ee5ff30", 1000),
  p1: "https://vaave.s3.amazonaws.com/user_files/851f5ac9941d720844d143ed9cfcf60a_de21ad7f4e0e3f0050066cb04029c7c9.jpeg",
  p2: "https://vaave.s3.amazonaws.com/user_files/851f5ac9941d720844d143ed9cfcf60a_ddcb68840509f983ccad54cd5e8bb008.jpeg",
  p3: imageUrl("1519085360753-af0119f7cbe7", 500),
  p4: imageUrl("1573496359142-b8d87734a5a2", 500),
  u1: imageUrl("1523050854058-8df90110c9f1", 700),
  u2: imageUrl("1523580846011-d3a5bc25702b", 700),
  u3: imageUrl("1541339907198-e08756dedf3f", 700),
  u4: imageUrl("1562774053-701939374585", 900),
  r1: imageUrl("1524661135-423995f22d0b", 700),
  r2: imageUrl("1541339907198-e08756dedf3f", 600),
  r3: imageUrl("1523580846011-d3a5bc25702b", 700),
};

const slides = [
  {
    image: "https://vaave.s3.amazonaws.com/assets/site_content/151565007/banners/851f5ac9941d720844d143ed9cfcf60a_604507f7341e57c45cf2528960272593.jpeg",
    alt: "GBPUAT Campus",
    title: "Welcome to Pantnagar4A",
    description: "Connecting generations of Pantnagarians across the world",
  },
  {
    image: imageUrl("1492684223066-81342ee5ff30", 1600),
    alt: "Alumni Gathering",
    title: "Alumni Meet 2026",
    description: "Join us for two days of reunion, memories, and celebration",
  },
  {
    image: imageUrl("1523050854058-8df90110c9f1", 1600),
    alt: "Campus Life",
    title: "Celebrate Achievements",
    description: "Honoring the success of our alumni community",
  },
];

const gallery = [
  { id: "1511632765486-a01980e01a18", caption: "Alumni meet and reunion", width: 420 },
  { id: "1540575467063-178a50c2df87", caption: "Workshop and conference", width: 360 },
  { id: "1523050854058-8df90110c9f1", caption: "Award ceremony", width: 300 },
  { id: "1529156069898-49953e39b3ac", caption: "Reunion lunch", width: 380 },
  { id: "1517457373958-b7bdd4587205", caption: "University Foundation Week", width: 340 },
  { id: "1475721027785-f74eccf877e2", caption: "Conference session", width: 400 },
];

const people = [
  ["Aarav Rawat", "1987", "1507003211169-0a1dd7228f2d"],
  ["Meera Joshi", "1995", "1494790108377-be9c29b29330"],
  ["Kunal Bisht", "2003", "1500648767791-00dcc994a43e"],
  ["Sneha Negi", "2011", "1438761681033-6461ffad8d80"],
  ["Rohan Pant", "1999", "1472099645785-5658abf4ff4e"],
  ["Isha Kandpal", "2008", "1544005313-94ddf0286df2"],
  ["Vikram Chauhan", "1991", "1506794778202-cad84cf45f1d"],
  ["Pooja Tiwari", "2015", "1531123897727-8f129e1688ce"],
  ["Dev Bhatt", "2019", "1560250097-0b93528c311a"],
  ["Anjali Rana", "2001", "1580489944761-15a19d654956"],
  ["Harsh Mehra", "2013", "1519085360753-af0119f7cbe7"],
  ["Neha Sah", "1993", "1573496359142-b8d87734a5a2"],
];

const leadership = [
  { image: "p1", name: "Dr. S.K. Kashyap", title: <>Vice-Chancellor, GBPUAT<br />Patron of the association</> },
  { image: "p2", name: "Dr. Anil Kumar", title: <>Chief Coordinator & Secretary, <br />Alumni Alma Mater Advancement Association (4A)</> },
];

function Photo({ src, alt = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => event.currentTarget.classList.add("bad")}
      {...props}
    />
  );
}

function useDemoDialog(type) {
  const dialogRef = useRef(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const isRegistration = type === "reg";
  const titleId = `${type}T`;

  function open() {
    setError("");
    setStatus("");
    dialogRef.current?.showModal();
  }

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const value = (name) => String(new FormData(form).get(name) || "").trim();
    const email = value("email");
    let message = "";

    if (isRegistration) {
      if (value("name").length < 2) message = "Enter your full name.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message = "Enter a valid email address.";
      } else if (!value("batch")) message = "Select your graduation batch.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message = "Enter a valid email address.";
    } else if (value("pw").length < 6) {
      message = "Password must be at least 6 characters.";
    }

    setError(message);
    if (message) return;
    form.reset();
    setStatus("success");
  }

  return {
    open,
    dialog: (
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => {
          setError("");
          setStatus("");
        }}
      >
        <h2 id={titleId}>{isRegistration ? "Register as Alumni" : "Login"}</h2>
        <p className="demo">
          {isRegistration
            ? "Demo only. Nothing is sent or saved, and no account is created."
            : "Demo only. No real sign-in takes place."}
        </p>
        <form noValidate onSubmit={submit}>
          {isRegistration ? (
            <>
              <label htmlFor="rn">Full name</label>
              <input id="rn" name="name" autoComplete="name" />
              <label htmlFor="re">Email</label>
              <input id="re" name="email" type="email" autoComplete="email" />
              <label htmlFor="rb">Graduation batch</label>
              <select id="rb" name="batch" defaultValue="">
                <option value="">Select year</option>
                {Array.from({ length: 67 }, (_, index) => 2026 - index).map((year) => (
                  <option value={year} key={year}>{year}</option>
                ))}
              </select>
            </>
          ) : (
            <>
              <label htmlFor="le">Email</label>
              <input id="le" name="email" type="email" autoComplete="email" />
              <label htmlFor="lp">Password</label>
              <input id="lp" name="pw" type="password" autoComplete="current-password" />
            </>
          )}
          <p className="err" role="alert">{error}</p>
          {status === "success" && (
            <p className="ok">
              Form checked. This is a demo, so nothing was submitted and no account or session exists.
            </p>
          )}
          <div className="actions">
            <button className="btn" type="submit">
              {isRegistration ? "Submit demo" : "Try demo login"}
            </button>
            <button className="xbtn" type="button" onClick={() => dialogRef.current?.close()}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    ),
  };
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const galleryDialog = useRef(null);
  const registration = useDemoDialog("reg");
  const login = useDemoDialog("log");

  useEffect(() => {
    if (paused) return undefined;
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  function changeSlide(direction) {
    setCurrentSlide((current) => (current + direction + slides.length) % slides.length);
  }

  function openPhoto(photo) {
    setActivePhoto(photo);
    galleryDialog.current?.showModal();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <div className="wrap">
          <nav aria-label="Main">
            <a className="logo" href="#home" aria-label="Pantnagar4A home">
              Pantnagar4A<small>Alumni Alma Mater Advancement Association</small>
            </a>
            <button
              className="tog"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
            <ul className={`menu${menuOpen ? " open" : ""}`} id="menu" onClick={closeMenu}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About 4A</a></li>
              <li><a href="#alumni">Alumni</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><button type="button" className="reg" onClick={registration.open}>Register</button></li>
              <li><button type="button" onClick={login.open}>Login</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <div
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = touchStartX.current - event.changedTouches[0].clientX;
          if (distance > 50) changeSlide(1);
          else if (distance < -50) changeSlide(-1);
          touchStartX.current = null;
        }}
        aria-label="Featured stories"
      >
        <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div className="slide" key={slide.title}>
              <Photo src={slide.image} alt={slide.alt} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow prev" type="button" aria-label="Previous slide" onClick={() => changeSlide(-1)}>‹</button>
        <button className="slider-arrow next" type="button" aria-label="Next slide" onClick={() => changeSlide(1)}>›</button>
        <div className="slider-nav">
          {slides.map((slide, index) => (
            <button
              className={`slider-dot${index === currentSlide ? " active" : ""}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
              key={slide.title}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <main id="main">
        <section id="home" className="wrap hero">
          <div>
            <h1>Connecting Generations of Pantnagarians</h1>
            <p>Bringing together alumni of Govind Ballabh Pant University of Agriculture and Technology to reconnect, share memories, celebrate achievements, and create opportunities for future generations.</p>
            <div className="links">
              <button type="button" className="btn" onClick={registration.open}>Register as Alumni</button>
              <a className="lnk" href="#alumni">Explore Alumni Network</a>
            </div>
          </div>
          <figure>
            <div className="ph"><Photo src={images.hero} alt="Main building of the Pantnagar campus" /></div>
            <figcaption>The GBPUAT campus, Pantnagar (temporary photograph)</figcaption>
          </figure>
        </section>

        <section id="events" className="sec news">
          <div className="wrap news-grid">
            <article className="feat">
              <div className="ph"><Photo src={images.event} alt="Alumni gathering at a university reunion" /></div>
              <h3>Pantnagarians&apos; Alumni Meet 2026</h3>
              <p className="meta">November 21–22, 2026 · GBPUAT Campus, Pantnagar</p>
              <p>Two days on campus for batches of every decade to meet old friends, walk through familiar halls, and hear from the university and fellow alumni. Registration is open to all alumni and their families.</p>
              <button type="button" className="lnk xbtn" onClick={registration.open}>Register for the meet</button>
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

        <section id="about" className="sec wrap">
          <h2>Association leadership</h2>
          <p className="sub">The people who guide and coordinate the association. Names, photographs and designations below are placeholders until official details are supplied.</p>
          <div className="lead">
            {leadership.map((person) => (
              <figure key={person.image}>
                <div className="ph"><Photo src={images[person.image]} alt="Placeholder portrait" /></div>
                <figcaption><b>{person.name}</b><span>{person.title}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="sec uni">
          <div className="wrap">
            <h2>Connect with the university</h2>
            <p className="sub">Follow what Pantnagar is doing, and the people who make it what it is.</p>
            <div className="uni-grid">
              {[["u1", "Alumni Achievements"], ["u2", "Faculty Achievements"], ["u3", "University Milestones"]].map(([key, title]) => (
                <a href="#" key={key}><div className="ph"><Photo src={images[key]} alt="" /></div><span>{title}</span></a>
              ))}
              <a href="#" className="uni-wide"><div className="ph"><Photo src={images.u4} alt="" /></div><span>Connect With the University</span></a>
            </div>
          </div>
        </section>

        <section className="sec wrap">
          <h2>Campus resources</h2>
          <p className="sub">Planning a visit, or just curious how the campus looks today?</p>
          <div className="res">
            <a href="#" className="res-a"><div className="ph"><Photo src={images.r1} alt="Campus map" /></div><b>Campus Map</b><span>Find departments, hostels and the Alumni Meet venue.</span></a>
            <a href="#" className="res-b"><div className="ph"><Photo src={images.r2} alt="Aerial view of campus" /></div><b>360° Campus View</b><span>Walk the campus from wherever you are.</span></a>
            <a href="#" className="res-c"><div className="ph"><Photo src={images.r3} alt="Students on campus" /></div><b>Videos at GBPUAT</b><span>Films on campus life, research and events.</span></a>
          </div>
        </section>

        <section id="gallery" className="sec gal-sec">
          <div className="wrap gal-head">
            <div><h2>Gallery</h2><p>Reunions, workshops, award days and Foundation Week. Select a photo to enlarge it.</p></div>
            <a className="lnk" href="#gallery">View All Photos</a>
          </div>
          <div className="strip" role="list">
            {gallery.map((photo) => (
              <button
                type="button"
                role="listitem"
                key={photo.id}
                onClick={() => openPhoto(photo)}
                aria-label={`Enlarge ${photo.caption}`}
              >
                <div className="ph" style={{ width: `${photo.width}px` }}>
                  <Photo src={imageUrl(photo.id, 900)} alt={photo.caption} />
                </div>
                <p>{photo.caption}</p>
              </button>
            ))}
          </div>
        </section>

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
      </main>

      <footer id="contact">
        <div className="wrap">
          <div className="foot">
            <div>
              <h3 className="footer-brand">Pantnagar4A</h3>
              <p>Alumni Alma Mater Advancement Association<br />G.B. Pant University of Agriculture and Technology, Pantnagar</p>
              <p className="official-link"><a href="https://www.gbpuat.ac.in" target="_blank" rel="noopener noreferrer"><u>GBPUAT official website</u></a></p>
            </div>
            <div>
              <h3>Explore</h3>
              <ul><li><a href="#alumni">Alumni Directory</a></li><li><a href="#events">Events</a></li><li><a href="#gallery">Gallery</a></li><li><a href="#contact">Contact</a></li><li><a href="#">Privacy Policy</a></li></ul>
            </div>
            <div>
              <h3>Follow</h3>
              <ul><li><a href="#">Facebook</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">Instagram</a></li><li><a href="#">YouTube</a></li></ul>
            </div>
          </div>
          <p className="fine">© 2026 Pantnagar4A. This page is a demonstration; images and names are temporary.</p>
        </div>
      </footer>

      {registration.dialog}
      {login.dialog}
      <dialog
        id="lb"
        ref={galleryDialog}
        aria-label="Photo preview"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => setActivePhoto(null)}
      >
        {activePhoto && (
          <>
            <Photo src={imageUrl(activePhoto.id, 1600)} alt={activePhoto.caption} />
            <p>{activePhoto.caption}</p>
          </>
        )}
        <button className="btn" type="button" onClick={() => galleryDialog.current?.close()}>Close</button>
      </dialog>
    </>
  );
}
