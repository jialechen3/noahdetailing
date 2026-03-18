import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VehicleTypeSelector } from "./components/VehicleTypeSelector";
import { VehicleSpecificPricing } from "./components/VehicleSpecificPricing";
import { PackageComparison } from "./components/PackageComparison";
import { Contact } from "./components/Contact";

type VehicleType = "auto" | "rv" | "boat" | "bicycle";

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);

  return (
    <div id="top" className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <VehicleTypeSelector 
        selectedType={selectedVehicle}
        onSelectType={setSelectedVehicle}
      />
      {selectedVehicle && <VehicleSpecificPricing selectedType={selectedVehicle} />}
      {selectedVehicle === "auto" && <PackageComparison />}
      <Contact />
    </div>
  );
}
