import "./globals.css";
export const metadata = {
  title: "Hamza | Front-End Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white px-10">{children}</body>
    </html>
  );
}
