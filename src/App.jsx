const WORD = "dreadnought";
const STEP = 0.8;
const DURATION = WORD.length * STEP;

function App() {
  return (
    <div className="stage">
      <h1 className="word" aria-label={WORD}>
        {WORD.split("").map((letter, i) => (
          <span
            key={i}
            className="letter"
            style={{
              "--delay": `${i * STEP}s`,
              "--duration": `${DURATION}s`,
            }}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;
