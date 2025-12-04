import { Link2, MapPin, CheckCircle, Database } from 'lucide-react';

export default function TraceabilitySection() {
  return (
    <section id="traceability" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Link2 className="h-12 w-12 text-amber-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Blockchain Traceability</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency from farm to cup. Track every step of your coffee's journey with our blockchain-powered traceability system.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Immutable Records</h3>
            <p className="text-gray-600">
              Every transaction recorded on blockchain ensures data integrity and prevents tampering
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600">
              Monitor your coffee's location and status at every stage of the supply chain
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CheckCircle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Quality</h3>
            <p className="text-gray-600">
              Certifications and quality tests permanently recorded for full traceability
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Supply Chain?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Join us in bringing unprecedented transparency to the coffee industry. Contact us to learn how blockchain traceability can benefit your business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition shadow-lg"
          >
            Request More Information
          </a>
        </div>
      </div>
    </section>
  );
}
