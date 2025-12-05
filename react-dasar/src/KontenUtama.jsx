import './App.css';

const KontenUtama = () => {
  const namaPengguna = "Mahasiswa Praktikum";
  const angka1 = 5;
  const angka2 = 7;

  // Update variabel daftarMateri
  const daftarMateri = [
    {
      id: 1,
      nama: "Belajar React",
      hari: "Senin",
    },
    {
      id: 2,
      nama: "Belajar Vite",
      hari: "Selasa",
    },
    {
      id: 3,
      nama: "Belajar JavaScript",
      hari: "Rabu",
    },
  ];

  return (
    <main className="main-content">
      {/* Styling Inline untuk sapaan */}
      <h2 style={{ color: "#007bff", marginBottom: "20px" }}>
        Selamat Datang, {namaPengguna}
      </h2>

      <div className="card">
        <h3>Operasi Matematika</h3>
        <p>
          Hasil dari {angka1} + {angka2} adalah: <strong>{angka1 + angka2}</strong>
        </p>
      </div>

      <div className="card">
        <h3>Status Pengguna</h3>
        {/* Conditional Rendering */}
        {namaPengguna === "Mahasiswa Praktikum" ? (
          <p style={{ color: "green" }}> Anda telah berhasil masuk sebagai Admin.</p>
        ) : (
          <p style={{ color: "red" }}> Sedang menunggu nama pengguna</p>
        )}
      </div>

      <div className="card">
        <h3>Jadwal Pembelajaran</h3>
        <p>Saat ini kita sedang belajar:</p>
        <ul className="materi-list">
          {/* Mapping data array object */}
          {daftarMateri.map((materi) => (
            <li key={materi.id} className="materi-item">
              <strong>{materi.nama}</strong> - (Jadwal: {materi.hari})
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default KontenUtama;