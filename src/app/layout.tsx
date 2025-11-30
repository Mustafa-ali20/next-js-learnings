import { Metadata } from "next";
import '../styles/global.css'

export const metadata = {
   title: {
        default: "Next.js Tutorial ",
        template: "%s | Anything here", // this is used for multi page , where u want consistent title and %s will join the other page's title
        absolute: "" // this helps in break out of the pattern from this layout this is basically written in the page u wanna break free not here
    },
    description: "generated"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "grey" }}>
        <header
          style={{
            padding: "1rem",
            background: "#f5f5f5",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h1>My Header</h1>
        </header>

        <main>{children}</main>

        <footer
          style={{
            padding: "1rem",
            marginTop: "2rem",
            background: "#f5f5f5",
            borderTop: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <p>© 2025 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
