import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type VehicleType = "auto" | "rv" | "boat" | "bicycle";

interface VehicleSpecificPricingProps {
  selectedType: VehicleType;
}

export function VehicleSpecificPricing({ selectedType }: VehicleSpecificPricingProps) {
  if (selectedType === "auto") {
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Auto Detailing Services</h2>
            <p className="text-xl text-gray-600">
              Professional interior and exterior detailing for your vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Showroom Interior Detail */}
            <Card className="border-2 border-blue-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-blue-50 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Showroom Interior Detail</CardTitle>
                  <Badge className="bg-blue-600 text-white">Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600">Starting at $200</p>
                </div>
                <p className="text-gray-600">
                  Complete interior detailing to bring your vehicle back to showroom condition.
                  Includes deep cleaning, conditioning, and protection.
                </p>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card className="border-2 border-gray-300 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Add-On Services</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pet Hair Removal</span>
                    <span className="text-lg font-bold">$40</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Headliner Shampoo</span>
                    <span className="text-lg font-bold">$40</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Shampoo</span>
                    <span className="text-lg font-bold">$50</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Leather Conditioner</span>
                    <span className="text-lg font-bold">$20 per row</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Exterior Windows / Doorjambs</span>
                    <span className="text-lg font-bold">$35</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (selectedType === "rv" || selectedType === "boat") {
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {selectedType === "rv" ? "RV" : "Boat"} Detailing Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional detailing services priced by the foot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interior Detail */}
            <Card className="border-2 border-blue-500 md:col-span-2 rounded-2xl overflow-hidden">
              <CardHeader className="bg-blue-50 rounded-t-2xl">
                <CardTitle className="text-2xl">Interior Detail</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">Starting at $305</p>
                  <p className="text-gray-600 mt-2">
                    Complete interior cleaning and detailing service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Exterior Services */}
            <Card className="border-2 border-gray-300 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Wash & Wax</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">$21 per foot</p>
                <p className="text-gray-600">
                  Thorough wash and protective wax coating for lasting shine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Polish & Wax</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">$33 per foot</p>
                <p className="text-gray-600">
                  Paint correction and polishing followed by protective wax.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-amber-50 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Polish & Ceramic Sealant</CardTitle>
                  <Badge className="bg-amber-600 text-white">1 Year</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-amber-600 mb-2">$49 per foot</p>
                <p className="text-gray-600">
                  Professional polish with 1-year ceramic sealant protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-purple-50 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Premium Ceramic Coating</CardTitle>
                  <Badge className="bg-purple-600 text-white">5 Years</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-purple-600 mb-2">$107 per foot</p>
                <p className="text-gray-600">
                  Ultimate protection with 5-year ceramic coating guarantee.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              * Pricing is calculated based on the length of your {selectedType === "rv" ? "RV" : "boat"}. 
              Contact us for an exact quote.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedType === "bicycle") {
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bicycle & Motorcycle Detailing</h2>
            <p className="text-xl text-gray-600">
              Professional detailing and ceramic coating services for bikes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-300 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Wash</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-gray-900 mb-4">$75</p>
                <p className="text-gray-600">
                  Complete wash and cleaning to remove dirt, grime, and road debris.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-blue-50 rounded-t-2xl">
                <CardTitle className="text-2xl">Wash & Ceramic Sealant</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-blue-600 mb-4">$155</p>
                <p className="text-gray-600">
                  Thorough wash with ceramic sealant for enhanced protection and shine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-amber-50 rounded-t-2xl">
                <CardTitle className="text-2xl">Degrease & Ceramic Sealant</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-amber-600 mb-4">Starting at $270</p>
                <p className="text-gray-600">
                  Deep degreasing and cleaning followed by ceramic sealant application.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 rounded-2xl overflow-hidden">
              <CardHeader className="bg-purple-50 rounded-t-2xl">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <CardTitle className="text-2xl">Ceramic Coating & Polish</CardTitle>
                  <Badge className="bg-purple-600 text-white">4 Years</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-purple-600 mb-4">Starting at $755</p>
                <p className="text-gray-600">
                  Premium service with professional polish and 4-year ceramic coating protection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              * Pricing may vary based on bike size and condition. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
