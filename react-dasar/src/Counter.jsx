import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h3>Aplikasi Counter Sederhana</h3>

      <p>
        Hitungan saat ini: <strong>{count}</strong>
      </p>

      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Tambah (+)
      </button>

      <button
        onClick={handleReset}
        style={{ backgroundColor: "#ff4d4d", color: "white" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
