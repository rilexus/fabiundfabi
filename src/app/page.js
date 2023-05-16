"use client";
import styled from "styled-components";
import Link from "next/link";
import Hero from "@/app/ui/Hero/Hero";
import SpotifyIcon from "@/app/ui/icons/SpotifyIcon";
import InstagramIcon from "@/app/ui/icons/InstagramIcon";

const Fabi = styled.span`
  font-size: clamp(4.5rem, 13.88889vw, 13.88889vw);
  font-weight: bolder;
  line-height: 1;
`;

const And = styled.span`
  line-height: 1;
  font-size: clamp(2.5rem, 3vw, 3vw);
  font-weight: bolder;
`;

const MouseOverScale = styled.div`
  transform: scale(1);
  transform-origin: center;
  transition: transform 400ms;
  :hover {
    transform: scale(0.95);
  }
`;

export default function Home() {
  return (
    <div>
      <Hero>
        <Fabi>FABI</Fabi>
        <And>UND</And>
        <Fabi>FABI</Fabi>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            marginTop: "3rem",
          }}
        >
          <MouseOverScale>
            <Link
              href={"https://open.spotify.com/show/3nuCwCldNmtItpfxKMG8gn"}
              style={{
                margin: "1rem",
              }}
            >
              <SpotifyIcon height={"3rem"} width={"3rem"} />
            </Link>
          </MouseOverScale>

          <MouseOverScale>
            <Link
              href={"https://www.instagram.com/fabiundfabi/"}
              style={{
                margin: "1rem",
              }}
            >
              <InstagramIcon height={"3.5rem"} width={"3.5rem"} />
            </Link>
          </MouseOverScale>
        </div>
      </Hero>
    </div>
  );
}
