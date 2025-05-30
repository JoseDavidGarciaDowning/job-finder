import React, { useState } from "react";
import { IonRange } from "@ionic/react";

function SalaryRangeSelector() {
  const [range, setRange] = useState({ lower: 2000, upper: 8000 });
  const max = 10000;

  // Convierte 1000 -> "1k", 1500 -> "1.5k"
  const formatK = (value: number) => {
    return value >= 1000
      ? `${(value / 1000).toFixed(1).replace(".0", "")}k`
      : value;
  };

  const handleInput = (e: CustomEvent) => {
    const value = e.detail.value as { lower: number; upper: number };
    setRange(value);
  };

  return (
    <div className="relative">
      {/* <IonText className="block text-center text-lg font-medium text-gray-700 mb-6">
        Rango de salario: ${formatK(range.lower)} - ${formatK(range.upper)}
      </IonText> */}

      <IonRange
        aria-label="Rango de salario"
        dualKnobs={true}
        min={0}
        max={max}
        step={100}
        value={range}
        pin={false}
        onIonInput={handleInput}
        style={{
          "--bar-background": "#CCC4C2",
          "--bar-background-active": "#FF9228",
          "--knob-size": "20px",
          width: "300px",
          margin: "0 auto",
        }}
        className="salary-range"
      ></IonRange>

      {/* Valores actualizados dinámicamente debajo de los knobs */}
      <div className="absolute w-full bottom-[4px] pointer-events-none">
        {/* Valor izquierdo */}
        <div
          className="absolute text-sm font-bold text-inputLabelColor"
          style={{
            left: `min(${(range.lower / max) * 100}%, ${
              (range.upper / max) * 100 - 10
            }%)`, // Máximo: 10% antes del right
            transform: "translateX(-50%)",
          }}
        >
          ${formatK(range.lower)}
        </div>

        {/* Valor derecho */}
        <div
          className="absolute text-sm font-bold text-inputLabelColor"
          style={{
            left: `max(${(range.upper / max) * 100}%, ${
              (range.lower / max) * 100 + 10
            }%)`, // Mínimo: 10% después del left
            transform: "translateX(-100%)",
          }}
        >
          ${formatK(range.upper)}
        </div>
      </div>
    </div>
  );
}

export default SalaryRangeSelector;
