import { motion } from "framer-motion";

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

      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
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
        <motion.button
            initial={{opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 10
            }}
        >
            Click Me!
        </motion.button>
      </motion.div>
    </div>
  );
}