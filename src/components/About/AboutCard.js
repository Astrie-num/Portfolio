import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Asterie Uwumviyimana</span> from <span className="purple">Kicukiro, Rwanda</span>.
            <br />
            Currently, I'm finishing up my studies at Rwanda Coding Academy, always striving to blend code with creativity.
            <br />
            <br />
            Beyond programming, I’m passionate about exploring new ideas and experiences!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Devouring books (especially on history & innovation)
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating playlists & discovering new music
            </li>
            <li className="about-activity">
              <ImPointRight /> Mapping out adventures & traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiosity is the engine of achievement."
          </p>
          <footer className="blockquote-footer">Ken Robinson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;