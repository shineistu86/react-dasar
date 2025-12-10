import "./App.css";
import Header from "./Header";
import KontenUtama from "./KontenUtama";
import Counter from "./Counter";
import ToggleText from "./ToggleText";

function App() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <div className="app-container">
      <Header />

      <div className="main-content">
        <KontenUtama />

        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />
        <h2 style={{ marginBottom: "20px" }}>Hasil Tugas Praktikum</h2>

        <Counter />

        <ToggleText />
      </div>

      <footer>
        <p>&copy; {tahunSekarang} Praktikum WEB. Dibuat dengan React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
