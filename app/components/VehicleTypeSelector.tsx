import { Car, Truck, Ship, Bike } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

type VehicleType = "auto" | "rv" | "boat" | "bicycle";

interface VehicleOption {
  type: VehicleType;
  label: string;
  icon: typeof Car;
  description: string;
}

const vehicleOptions: VehicleOption[] = [
  {
    type: "auto",
    label: "Auto",
    icon: Car,
    description: "Cars, trucks, and SUVs",
  },
  {
    type: "rv",
    label: "RV",
    icon: Truck,
    description: "Motorhomes and trailers",
  },
  {
    type: "boat",
    label: "Boat",
    icon: Ship,
    description: "Watercraft of all sizes",
  },
  {
    type: "bicycle",
    label: "Bicycles",
    icon: Bike,
    description: "Bikes and motorcycles",
  },
];

interface VehicleTypeSelectorProps {
  selectedType: VehicleType | null;
  onSelectType: (type: VehicleType) => void;
}

export function VehicleTypeSelector({ selectedType, onSelectType }: VehicleTypeSelectorProps) {
  const [shouldGlow, setShouldGlow] = useState(false);

  useEffect(() => {
    // Listen for scroll events to trigger glow
    const handleScroll = () => {
      const element = document.getElementById("packages");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.top <= window.innerHeight / 2;
        if (isInView && !selectedType) {
          setShouldGlow(true);
          // Stop glowing after a few seconds
          setTimeout(() => setShouldGlow(false), 3000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedType]);

  return (
    <div id="packages" className="bg-white px-4 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">What Are You Detailing?</h2>
          <p className="text-base text-gray-600 sm:text-xl">
            Select your vehicle type to see tailored packages
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {vehicleOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedType === option.type;

            return (
              <motion.div
                key={option.type}
                className="rounded-2xl"
                animate={
                  shouldGlow && !selectedType
                    ? {
                        boxShadow: [
                          "0 0 0px rgba(37, 99, 235, 0)",
                          "0 0 20px rgba(37, 99, 235, 0.6)",
                          "0 0 40px rgba(37, 99, 235, 0.4)",
                          "0 0 20px rgba(37, 99, 235, 0.6)",
                          "0 0 0px rgba(37, 99, 235, 0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: shouldGlow ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <Card
                  className={`cursor-pointer rounded-2xl transition-all duration-300 hover:shadow-lg ${
                    isSelected
                      ? "border-2 border-blue-600 shadow-lg ring-2 ring-blue-200"
                      : "border-2 border-gray-200 hover:border-blue-400"
                  }`}
                  onClick={() => onSelectType(option.type)}
                >
                  <CardContent className="px-5 pb-5 pt-5 text-center sm:pb-6 sm:pt-6">
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors sm:h-20 sm:w-20 ${
                          isSelected
                            ? "bg-blue-600"
                            : "bg-gray-100 group-hover:bg-blue-50"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 sm:h-10 sm:w-10 ${
                            isSelected ? "text-white" : "text-gray-600"
                          }`}
                        />
                      </div>
                    </div>
                    <h3
                      className={`mb-2 text-lg font-semibold sm:text-xl ${
                        isSelected ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                    <div className="mt-4 h-6 flex items-center justify-center">
                      {isSelected && (
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {selectedType && (
          <div className="mt-8 text-center">
            <p className="text-base text-gray-700 sm:text-lg">
              Great choice! Scroll down to see our{" "}
              <span className="font-semibold text-blue-600">
                {vehicleOptions.find((v) => v.type === selectedType)?.label}
              </span>{" "}
              detailing packages.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
