import RootLayout from "../components/RootLayout.jsx";
import "./globals.css";



export default function Layout({ children }) {
  return (
    <html
      lang="it"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
