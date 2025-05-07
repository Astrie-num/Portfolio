import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Asterie Uwumviyimana </span>
            from <span className="purple"> Kicukiro, Rwanda.</span>
            <br />
            I am currently a final year student at Rwanda Coding Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want new ideas, read old books."{" "}
          </p>
          <footer className="blockquote-footer">C.S. Lewis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
