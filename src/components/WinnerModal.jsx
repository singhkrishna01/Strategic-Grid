import { Square } from "./Square.jsx"

export function WinnerModal({ winner, resetGame }) {
    if(winner === null) return null

    const winnerText = winner === false ? "Match Draw ☹️, Try again" : "Winner 🏆" 
    return (
        <section className="winner">
            <div className="text">
            <h2>{winnerText}</h2>

            {
                winner && <header className="win">
                <Square>{winner}</Square>
            </header>
            }
            
            <footer>
                <button onClick={resetGame}>New Game</button>
            </footer>
            </div>
        </section>
    )
}