import "./globals.css";

export const metadata = {
  title: "My React Intro",
  description: "Generated by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
