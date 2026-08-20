import { useState } from 'react'
import { cards, CardData } from './data/cards'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const card: CardData = cards[current]
  const last = current === cards.length - 1

  const next = () => {
    setIsFlipped(false)
    setTimeout(() => setCurrent((c) => (c + 1) % cards.length), 200)
  }

  const prev = () => {
    setIsFlipped(false)
    setTimeout(() => setCurrent((c) => (c - 1 + cards.length) % cards.length), 200)
  }

  const restart = () => {
    setIsFlipped(false)
    setTimeout(() => setCurrent(0), 200)
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Word Game</h1>
        <p className="app__subtitle">
          A Spanish word 👉 guess what it means in English 👉 then reveal the truth
        </p>
        <div className="app__flags">🇨🇴 · 🇳🇿</div>
      </div>

      <div className="card-scene">
        <button
          className={`card ${isFlipped ? 'card--flipped' : ''}`}
          onClick={() => setIsFlipped((f) => !f)}
          aria-label="Flip card"
          style={{ '--rot': isFlipped ? '180deg' : '0deg' } as React.CSSProperties}
        >
          {/* Front */}
          <div className="card__face card__face--front">
            <span className="card__flag">🇨🇴</span>
            <h2 className="card__word">{card.word}</h2>
            <p className="card__hint">Tap to guess ↻</p>
          </div>

          {/* Back */}
          <div className="card__face card__face--back">
            <span className="card__flag">🇳🇿</span>
            <p className="card__label">"It looks like..."</p>
            <p className="card__false">{card.falseMeaning}</p>
            <div className="card__divider">
              <span>{card.emoji}</span>
            </div>
            <p className="card__label">Actually...</p>
            <p className="card__true">{card.trueMeaning}</p>
          </div>
        </button>
      </div>

      <div className="controls">
        <button className="btn btn--ghost" onClick={prev} disabled={last}>
          ← Previous
        </button>

        <div className="counter">
          {current + 1} / {cards.length}
        </div>

        <button className="btn" onClick={next} disabled={last}>
          Next →
        </button>
      </div>

      {last && (
        <button className="btn btn--restart" onClick={restart}>
          🔄 Start over
        </button>
      )}

      <p className="app__footer">
        Word Game look like English but mean something else 😄
      </p>
    </div>
  )
}

export default App
