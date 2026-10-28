import "./globals.css";

export const metadata = {
  title: "Pantnagar4A – Alumni Alma Mater Advancement Association, GBPUAT",
  description:
    "Connecting alumni of Govind Ballabh Pant University of Agriculture and Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
