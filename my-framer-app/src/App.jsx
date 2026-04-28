export default function App() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      background: "#0f172a",
      overflow: "hidden" 
    }}>

      <div
        style={{
            width: 180,
            height: 180,
            background: "linear-gradient(135deg, #38bdf8, #818cf8)",
            borderRadius: 40,
            cursor: "grab",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)"
          }}
      >
        
        Drag Me!
      </div>

    </div>
  );
}