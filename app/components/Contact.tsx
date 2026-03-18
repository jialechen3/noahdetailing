import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  return (
    <div id="contact" className="bg-gray-100 px-4 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">Get In Touch</h2>
          <p className="text-base text-gray-600 sm:text-xl">
            Ready to give your vehicle the care it deserves?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
          <Card>
            <CardContent className="px-5 pt-5 sm:pt-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-gray-600 sm:text-base">Call or text for a quote</p>
                  <p className="text-blue-600 font-medium">(555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-5 pt-5 sm:pt-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-gray-600 sm:text-base">Send us your details</p>
                  <p className="break-all text-blue-600 font-medium">noah@mobiledetailing.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-5 pt-5 sm:pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h3 className="font-semibold mb-1">Service Area</h3>
                  <p className="text-sm text-gray-600 sm:text-base">We come to you!</p>
                  <p className="text-blue-600 font-medium">Mobile service available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-5 pt-5 sm:pt-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-sm text-gray-600 sm:text-base">Monday - Saturday</p>
                  <p className="text-blue-600 font-medium">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-gray-600 italic sm:text-base">
            Professional mobile detailing services for cars, trucks, and SUVs.
            <br />
            Ask about our 3rd row SUV pricing and bulk service discounts!
          </p>
        </div>
      </div>
    </div>
  );
}
