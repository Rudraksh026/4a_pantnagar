export const imageUrl = (id, width = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

export const images = {
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

export const slides = [
  {
    image: "https://vaave.s3.amazonaws.com/assets/site_content/151565007/banners/851f5ac9941d720844d143ed9cfcf60a_604507f7341e57c45cf2528960272593.jpeg",
    alt: "GBPUAT Campus",
    title: "Welcome to 4A Pantnagar",
    description: "Connecting generations of Pantnagarians across the world",
  },
  {
    image: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_778c987823f643c1350aab0a06413486.jpeg",
    alt: "Alumni Gathering",
    title: "Alumni Meet 2025",
    description: "Join us for two days of reunion, memories, and celebration",
  },
  {
    image: "https://vaave.s3.amazonaws.com/assets/site_content/151565007/banners/851f5ac9941d720844d143ed9cfcf60a_c42b483849c62674d43448159f1dc9ed.jpeg",
    alt: "",
    title: "",
    description: "",
  },
  {
    image: "https://vaave.s3.amazonaws.com/assets/site_content/151565007/banners/851f5ac9941d720844d143ed9cfcf60a_0d9ed7aa69f29023a2845e29efefc947.jpeg",
    alt: "",
    title: "",
    description: "",
  },
];

export const gallery = [
  { id: "1511632765486-a01980e01a18", caption: "Alumni meet and reunion", width: 420 },
  { id: "1540575467063-178a50c2df87", caption: "Workshop and conference", width: 360 },
  { id: "1523050854058-8df90110c9f1", caption: "Award ceremony", width: 300 },
  { id: "1529156069898-49953e39b3ac", caption: "Reunion lunch", width: 380 },
  { id: "1517457373958-b7bdd4587205", caption: "University Foundation Week", width: 340 },
  { id: "1475721027785-f74eccf877e2", caption: "Conference session", width: 400 },
];

export const people = [
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

export const leadership = [
  {
    image: "p1",
    name: "Dr. S.K. Kashyap",
    title: ["Vice-Chancellor, GBPUAT", "Patron of the association"],
  },
  {
    image: "p2",
    name: "Dr. Anil Kumar",
    title: ["Chief Coordinator & Secretary,", "Alumni Alma Mater Advancement Association (4A)"],
  },
];
