import { useEffect, useState } from "react";

interface BinaryDigit {
  id: number;
  x: number;
  delay: number;
  speed: number;
}

export default function BinaryWave() {
  const [digits, setDigits] = useState<BinaryDigit[]>([]);

  useEffect(() => {
    const generateDigits = () => {
      const newDigits: BinaryDigit[] = [];
      const columns = Math.floor(window.innerWidth / 30);

      for (let i = 0; i < columns; i++) {
        newDigits.push({
          id: i,
          x: i * 30 + Math.random() * 10,
          delay: Math.random() * 5,
          speed: 8 + Math.random() * 4,
        });
      }
      setDigits(newDigits);
    };

    generateDigits();

    const handleResize = () => {
      generateDigits();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      {digits.map(digit => (
        <div
          key={digit.id}
          className="absolute top-0 text-primary font-mono text-xs"
          style={{
            left: `${digit.x}px`,
            animation: `binaryFall ${digit.speed}s linear infinite`,
            animationDelay: `${digit.delay}s`,
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="h-4 leading-4">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
      <style>{`
        @keyframes binaryFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}
