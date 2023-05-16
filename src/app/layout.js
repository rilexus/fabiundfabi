import StyledComponentsRegistry from "./lib/rigestry";
import globalStyle from "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <li
                style={{
                  margin: "1rem 2rem 0 0",
                }}
              >
                <Link href={"/impressum"}>Impresum</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
