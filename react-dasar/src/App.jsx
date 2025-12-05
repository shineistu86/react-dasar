import './App.css';
import Header from './Header'; 
import KontenUtama from './KontenUtama'; 

function App() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <div className="app-container">
      {/* Panggil Komponen Header */}
      <Header />

      {/* Panggil Komponen Konten Utama */}
      <KontenUtama />

      {/* Footer */}
      <footer>
        <p>&copy; {tahunSekarang} Praktikum WEB. Dibuat dengan React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;