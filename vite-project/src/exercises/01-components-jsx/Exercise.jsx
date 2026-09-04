// Aufgabe 1: Erstelle mehrere einfache React-Komponenten und füge sie zusammen. Thema: Components & JSX

function Greeting() {
  return <h1>Hello React!</h1>;
}

function AboutMe() {
  return <p>I am learning React.</p>;
}

function Exercise() {
  return (
    <div>
      <Greeting />
      <AboutMe />
    </div>
  );
}

export default Exercise;