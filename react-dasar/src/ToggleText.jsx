import { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <h3>Tugas Toggle Teks</h3>

      <button onClick={handleToggle} style={{ marginBottom: "10px" }}>
        {isVisible ? "Sembunyikan" : "Tampilkan"}
      </button>

      {isVisible ? (
        <p style={{ color: "blue", fontWeight: "bold" }}>
          Teks Rahasia
        </p>
      ) : (
        <p style={{ color: "gray", fontStyle: "italic" }}>
          Teks sedang disembunyikan.
        </p>
      )}
    </div>
  );
}

export default ToggleText;

