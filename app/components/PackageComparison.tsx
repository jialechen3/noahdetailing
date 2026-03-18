import { Check, X, Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const packages = [
  {
    name: "Noah's Mobile Ultimate",
    icon: Trophy,
    badge: "Best of the Best!",
    priceRange: "$750-$1300",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-600",
    features: [
      { name: "Full detail inside and out", included: true },
      { name: "Interior conditioner", included: true },
      { name: "Exterior engine detail", included: true },
      { name: "Iron decontamination", included: true },
      { name: "Clay bar treatment", included: true },
      { name: "Paint polish", included: true },
      { name: "6 month ceramic sealant", included: true },
      { name: "Premium wash & wax", included: true },
      { name: "Shampoo included", included: true },
    ],
  },
  {
    name: "Gold Package",
    icon: Award,
    badge: "Most Popular",
    priceRange: "$300-$525",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-600",
    features: [
      { name: "Full detail inside and out", included: true },
      { name: "Interior conditioner", included: false },
      { name: "Exterior engine detail", included: false },
      { name: "Iron decontamination", included: false },
      { name: "Clay bar treatment", included: false },
      { name: "Paint polish", included: false },
      { name: "3 month exterior sealant", included: true },
      { name: "Premium wash & wax", included: true },
      { name: "Shampoo included", included: true },
    ],
  },
  {
    name: "Silver Package",
    icon: Medal,
    badge: "Quick Detail",
    priceRange: "$215-$350",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-600",
    features: [
      { name: "Wash", included: true },
      { name: "Wax sealant", included: true },
      { name: "Vacuum", included: true },
      { name: "Wipe down", included: true },
      { name: "Interior conditioner", included: false },
      { name: "Exterior engine detail", included: false },
      { name: "Iron decontamination", included: false },
      { name: "Clay bar treatment", included: false },
      { name: "Paint polish", included: false },
    ],
  },
];

export function PackageComparison() {
  return (
    <div id="packages" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">Choose Your Package</h2>
        <p className="mb-2 text-base text-gray-600 sm:text-xl">
          Three packages to choose from - Perfect for every vehicle and budget
        </p>
        <p className="text-sm text-gray-500 italic">
          *Pricing may vary based on condition of the vehicle. 3rd row SUVs are an additional $25
          onto the starting price.
        </p>
      </div>

      {/* Mobile View - Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:hidden sm:gap-6">
        {packages.map((pkg, idx) => {
          const Icon = pkg.icon;
          return (
            <Card key={idx} className={`border-2 ${pkg.borderColor} relative rounded-2xl overflow-hidden`}>
              <CardHeader className={`${pkg.bgColor} rounded-t-2xl px-5 pt-5`}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <Icon className={`h-7 w-7 shrink-0 sm:h-8 sm:w-8 ${pkg.color}`} />
                  <Badge className={`${pkg.bgColor} ${pkg.color} border ${pkg.borderColor} text-[11px] sm:text-xs`}>
                    {pkg.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight sm:text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-xl font-bold text-black sm:text-2xl">
                  {pkg.priceRange}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-5 sm:pt-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm leading-5 sm:text-base ${feature.included ? "" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Desktop View - Comparison Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="grid grid-cols-4 gap-4 min-w-[800px]">
          {/* Header Column */}
          <div className="pt-0">
            <div className="h-[258px] flex items-end pb-6 px-2">
              <h3 className="font-semibold text-lg">Features</h3>
            </div>
            <div className="space-y-3">
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Full detail inside and out
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Interior conditioner
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Exterior engine detail
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Iron decontamination
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Clay bar treatment
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Paint polish
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Ceramic/Exterior sealant
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Premium wash & wax
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">
                Shampoo included
              </div>
              <div className="h-12 flex items-center text-sm font-medium border-b">Vacuum</div>
              <div className="h-12 flex items-center text-sm font-medium">Wipe down</div>
            </div>
          </div>

          {/* Package Columns */}
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <Card key={idx} className={`border-2 ${pkg.borderColor} relative rounded-2xl overflow-hidden`}>
                <CardHeader className={`${pkg.bgColor} rounded-t-2xl h-[240px] flex flex-col justify-end pb-6 pt-4`}>
                  <div className="flex justify-center mb-3">
                    <Icon className={`w-12 h-12 ${pkg.color}`} />
                  </div>
                  <Badge className={`${pkg.bgColor} ${pkg.color} border ${pkg.borderColor} mb-3`}>
                    {pkg.badge}
                  </Badge>
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-black">
                    {pkg.priceRange}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {/* Full detail inside and out */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx <= 1 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Interior conditioner */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx === 0 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Exterior engine detail */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx === 0 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Iron decontamination */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx === 0 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Clay bar treatment */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx === 0 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Paint polish */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx === 0 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Ceramic/Exterior sealant */}
                    <div className="h-12 flex items-center justify-center border-b text-sm">
                      {idx === 0 ? (
                        <span className="text-green-600 font-semibold">6 months</span>
                      ) : idx === 1 ? (
                        <span className="text-green-600 font-semibold">3 months</span>
                      ) : (
                        <span className="text-gray-400 font-semibold text-xs uppercase tracking-wide">Wax</span>
                      )}
                    </div>
                    {/* Premium wash & wax */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx <= 1 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Shampoo included */}
                    <div className="h-12 flex items-center justify-center border-b">
                      {idx <= 1 ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300" />
                      )}
                    </div>
                    {/* Vacuum */}
                    <div className="h-12 flex items-center justify-center border-b">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    {/* Wipe down */}
                    <div className="h-12 flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
