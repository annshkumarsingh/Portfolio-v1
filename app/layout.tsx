import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

export const metadata = {
  title: "Annsh | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <div className="relative z-5">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}