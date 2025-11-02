import React, { useState } from 'react';
import { Coffee, MapPin, Calendar, Package, Mail, Phone, FileText, Leaf, Mountain } from 'lucide-react';

// Import images
import lakevKivuView from '../media/Bingaroview_water.jpeg';
import redCherries from '../media/Ready_red_plant_view.jpeg';
import sunDrying from '../media/best view.jpeg';
import coffeePlantKivu from '../media/coffee_plant_kivu.jpeg';
import coffeeBags from '../media/the bags.jpeg';

// Import Traceability component
import TraceabilityDemo from './TraceabilityDemo';

const SawaSawaCoffee = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    const mailtoLink = `mailto:sales@sawasawagroup.com?subject=Wholesale Inquiry from ${formData.company}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-700" />
              <span className="text-2xl font-bold text-gray-900">Sawa Sawa Coffee</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition">About</a>
              <a href="#farm" className="text-gray-700 hover:text-amber-700 transition">Our Farm</a>
              <a href="#sourcing" className="text-gray-700 hover:text-amber-700 transition">Sourcing</a>
              <a href="#traceability" className="text-gray-700 hover:text-amber-700 transition">Traceability</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Specialty Coffee from the Heart of Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Single-origin Arabica grown in volcanic soil along the pristine shores of Lake Kivu, DRC
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition shadow-lg"
            >
              Request Samples
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Exceptional Quality, Direct from Source</h2>
              <p className="text-lg text-gray-700 mb-4">
                Sawa Sawa Coffee brings you premium specialty-grade Arabica beans cultivated in the nutrient-rich volcanic soils surrounding Lake Kivu in the Democratic Republic of Congo.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to sustainable farming practices and meticulous processing ensures every batch meets the highest standards demanded by discerning roasters and importers worldwide.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Mountain className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1,500m+</div>
                  <div className="text-sm text-gray-600">Altitude</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Leaf className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Arabica</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Package className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">216</div>
                  <div className="text-sm text-gray-600">Tons/Year</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-96 shadow-lg">
              <img
                src={coffeePlantKivu}
                alt="Coffee cherries on tree at Lake Kivu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farm Gallery */}
      <section id="farm" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Farm & Processing</h2>
            <p className="text-xl text-gray-600">From tree to export, quality at every step</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src={sunDrying}
                alt="Sun-drying coffee on raised beds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Sun-Drying Process</h3>
                  <p className="text-sm text-gray-200">Traditional raised-bed drying</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src={lakevKivuView}
                alt="Lake Kivu pristine location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Lake Kivu Location</h3>
                  <p className="text-sm text-gray-200">Pristine microclimate</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src={redCherries}
                alt="Ripe red coffee cherries on tree"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Ripe Coffee Cherries</h3>
                  <p className="text-sm text-gray-200">Hand-picked at peak ripeness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Information */}
      <section id="sourcing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sourcing & Logistics</h2>
            <p className="text-xl text-gray-600">Transparent pricing and reliable delivery schedules</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pricing Structure (Green Beans)</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Ex-Factory Goma</span>
                  <span className="text-2xl font-bold text-amber-600">$6.70/kg</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Ex-Factory Kigali (Bonded Warehouse)</span>
                  <span className="text-2xl font-bold text-amber-600">$7.00/kg</span>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Shipping:</strong> Dar es Salaam to Dubai/China: $3,000/container | North America: $3,500 for 18 tons
                  </p>
                </div>
              </div>
            </div>

            {/* Harvest Seasons */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Harvest Seasons</h3>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">Smaller Season</h4>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">20%</span>
                  </div>
                  <p className="text-gray-700 mb-2"><strong>Volume:</strong> 36 tons (2 containers)</p>
                  <p className="text-gray-700 mb-2"><strong>Harvest:</strong> November - December</p>
                  <p className="text-gray-700"><strong>Shipping:</strong> January - February</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">Main Season</h4>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">80%</span>
                  </div>
                  <p className="text-gray-700 mb-2"><strong>Volume:</strong> 180 tons (10 containers)</p>
                  <p className="text-gray-700 mb-2"><strong>Harvest:</strong> April - End of July</p>
                  <p className="text-gray-700"><strong>Shipping:</strong> July - December</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Contract:</strong> Single-source supply available through end of 2026
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Origin & Processing</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-700">Lake Kivu Region, Democratic Republic of Congo</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Processing</h4>
                <p className="text-gray-700">Washed process, sun-dried on raised beds</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Export Hub</h4>
                <p className="text-gray-700">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Section */}
      <TraceabilityDemo />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to source premium coffee from Lake Kivu? Contact us for samples and availability.</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-amber-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Inquiry
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 text-amber-600 mr-2" />
                  <a href="mailto:sales@sawasawagroup.com" className="hover:text-amber-600">sales@sawasawagroup.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Sawa Sawa Coffee</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Sawa Sawa Coffee. Premium specialty coffee from Lake Kivu, DRC.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SawaSawaCoffee;
