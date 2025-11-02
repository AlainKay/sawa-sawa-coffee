import { useState } from 'react';
import { Shield, Package, MapPin, Calendar, User, Scan, CheckCircle, TrendingUp, ExternalLink, BarChart3, Plus } from 'lucide-react';

// User roles definition
const userRoles = {
  consumer: {
    name: 'Consumer',
    role: 'End Customer',
    organization: 'Public',
    color: 'bg-blue-600',
    description: 'Scan QR codes and view complete product history'
  },
  farmer: {
    name: 'John Mukasa',
    role: 'Farmer',
    organization: 'Sawa Sawa Farmers Co-op',
    color: 'bg-green-600',
    description: 'Register harvests and track farm production'
  },
  processor: {
    name: 'Marie Uwimana',
    role: 'Processor',
    organization: 'Sawa Sawa Processing',
    color: 'bg-yellow-600',
    description: 'Record processing steps and quality metrics'
  },
  trader: {
    name: 'Hans Mueller',
    role: 'Trader',
    organization: 'Global Coffee Roasters',
    color: 'bg-purple-600',
    description: 'Manage shipments and track inventory'
  }
};

// Sample Sawa Sawa coffee traceability data
const sawaSawaBatch = {
  id: 'SAWASAWA-LK-2024-001',
  name: 'Lake Kivu Arabica - Premium Grade',
  status: 'Delivered',
  currentLocation: 'Roastery, USA',
  batchWeight: '180 kg',
  certifications: ['Organic', 'Fair Trade', 'Single-Origin'],
  events: [
    {
      id: 1,
      type: 'Harvested',
      actor: 'Sawa Sawa Farmers',
      location: 'Lake Kivu, DRC',
      timestamp: '2024-04-15T08:00:00Z',
      data: { altitude: '1,500m+', variety: 'Arabica Bourbon', quality: 'Grade A' },
      icon: Package
    },
    {
      id: 2,
      type: 'Processed',
      actor: 'Sawa Sawa Processing',
      location: 'Lake Kivu, DRC',
      timestamp: '2024-04-20T14:30:00Z',
      data: { method: 'Washed', drying: 'Sun-dried 14 days', moisture: '11.5%' },
      icon: Package
    },
    {
      id: 3,
      type: 'Quality Tested',
      actor: 'Export Quality Control',
      location: 'Kigali, Rwanda',
      timestamp: '2024-05-05T10:15:00Z',
      data: { score: '87 points', cupping: 'Floral, Citrus notes', certified: 'Organic' },
      icon: CheckCircle
    },
    {
      id: 4,
      type: 'Shipped',
      actor: 'Tanzania Export Hub',
      location: 'Dar es Salaam, Tanzania',
      timestamp: '2024-05-12T06:00:00Z',
      data: { container: 'CONT-45892', destination: 'Port of Newark', weight: '180 kg' },
      icon: Package
    },
    {
      id: 5,
      type: 'In Transit',
      actor: 'Ocean Freight Carrier',
      location: 'Atlantic Ocean',
      timestamp: '2024-05-28T12:00:00Z',
      data: { vessel: 'MV African Queen', route: 'Dar → Newark', eta: '2024-06-15' },
      icon: TrendingUp
    },
    {
      id: 6,
      type: 'Customs Cleared',
      actor: 'US Customs',
      location: 'Port of Newark, USA',
      timestamp: '2024-06-16T09:30:00Z',
      data: { clearance: 'Approved', inspection: 'Passed' },
      icon: CheckCircle
    },
    {
      id: 7,
      type: 'Delivered',
      actor: 'Final Mile Logistics',
      location: 'Specialty Roastery, USA',
      timestamp: '2024-06-18T15:00:00Z',
      data: { condition: 'Excellent', temperature: 'Maintained 15-20°C' },
      icon: CheckCircle
    }
  ]
};

export default function TraceabilityDemo() {
  const [selectedBatch] = useState(sawaSawaBatch);
  const [showDemo, setShowDemo] = useState(false);
  const [userRole, setUserRole] = useState('consumer');

  const currentUser = userRoles[userRole];

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'Harvested': 'bg-green-100 text-green-800',
      'Processed': 'bg-yellow-100 text-yellow-800',
      'Quality Tested': 'bg-blue-100 text-blue-800',
      'In Transit': 'bg-purple-100 text-purple-800',
      'Delivered': 'bg-emerald-100 text-emerald-800',
      'Customs Cleared': 'bg-indigo-100 text-indigo-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="traceability" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-amber-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Blockchain Traceability</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency from farm to cup. Track every step of your coffee's journey with our blockchain-powered traceability system.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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

        {/* Demo Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
                <p className="text-amber-100">Explore a real batch from Lake Kivu to see traceability in action</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowDemo(!showDemo)}
                  className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition whitespace-nowrap"
                >
                  {showDemo ? 'Hide Demo' : 'View Demo'}
                </button>
              </div>
            </div>

            {showDemo && (
              <div className="mt-6 pt-6 border-t border-amber-500">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <label className="text-sm text-amber-100 mb-2 block flex items-center gap-2">
                      <User className="w-4 h-4" />
                      View as:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(userRoles).map(([key, role]) => (
                        <button
                          key={key}
                          onClick={() => setUserRole(key)}
                          className={`px-4 py-2 rounded-lg font-medium transition ${
                            userRole === key
                              ? 'bg-white text-amber-700'
                              : 'bg-amber-500 text-white hover:bg-amber-400'
                          }`}
                        >
                          {role.role}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                    <div className="text-sm text-amber-100">Logged in as:</div>
                    <div className="font-bold text-white">{currentUser.name}</div>
                    <div className="text-xs text-amber-100">{currentUser.organization}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {showDemo && (
            <div className="p-8">
              {/* Role-Specific Dashboard */}
              <div className="mb-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border-l-4" style={{ borderColor: currentUser.color.replace('bg-', '#') }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{currentUser.role} Dashboard</h4>
                    <p className="text-gray-600 text-sm">{currentUser.description}</p>
                  </div>
                  {userRole !== 'consumer' && (
                    <button className={`${currentUser.color} text-white px-4 py-2 rounded-lg hover:opacity-90 flex items-center gap-2`}>
                      <Plus className="w-4 h-4" />
                      Add Event
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {userRole === 'farmer' && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Package className="w-8 h-8 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-sm text-gray-600">Active Batches</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">2,400 kg</div>
                        <div className="text-sm text-gray-600">This Season</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">Organic Certified</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">87 pts</div>
                        <div className="text-sm text-gray-600">Avg Quality Score</div>
                      </div>
                    </>
                  )}

                  {userRole === 'processor' && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Package className="w-8 h-8 text-yellow-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">8</div>
                        <div className="text-sm text-gray-600">In Processing</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <TrendingUp className="w-8 h-8 text-yellow-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">1,800 kg</div>
                        <div className="text-sm text-gray-600">Processed This Month</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <CheckCircle className="w-8 h-8 text-yellow-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">95%</div>
                        <div className="text-sm text-gray-600">Quality Pass Rate</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <BarChart3 className="w-8 h-8 text-yellow-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">14 days</div>
                        <div className="text-sm text-gray-600">Avg Drying Time</div>
                      </div>
                    </>
                  )}

                  {userRole === 'trader' && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Package className="w-8 h-8 text-purple-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">15</div>
                        <div className="text-sm text-gray-600">Active Shipments</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">3,200 kg</div>
                        <div className="text-sm text-gray-600">In Transit</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <CheckCircle className="w-8 h-8 text-purple-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-sm text-gray-600">Delivered This Week</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">8</div>
                        <div className="text-sm text-gray-600">Countries Served</div>
                      </div>
                    </>
                  )}

                  {userRole === 'consumer' && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                        <Scan className="w-8 h-8 text-blue-600 mb-2" />
                        <div className="text-lg font-bold text-gray-900">Scan QR Code</div>
                        <div className="text-sm text-gray-600">View complete product history</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                        <Shield className="w-8 h-8 text-blue-600 mb-2" />
                        <div className="text-lg font-bold text-gray-900">Verify Authenticity</div>
                        <div className="text-sm text-gray-600">Blockchain verified products</div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Batch Overview */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{selectedBatch.name}</h4>
                    <p className="text-gray-600 mt-1">Batch ID: {selectedBatch.id}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(selectedBatch.status)}`}>
                      {selectedBatch.status}
                    </span>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2">
                      <Scan className="w-4 h-4" />
                      QR Code
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Current Location</label>
                    <p className="text-gray-900 flex items-center mt-1">
                      <MapPin className="w-4 h-4 text-amber-600 mr-1" />
                      {selectedBatch.currentLocation}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Batch Weight</label>
                    <p className="text-gray-900 mt-1">{selectedBatch.batchWeight}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Journey Time</label>
                    <p className="text-gray-900 mt-1">64 days</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Certifications</label>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {selectedBatch.certifications.map((cert, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Supply Chain Timeline */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Supply Chain Journey</h4>
                <div className="space-y-1">
                  {selectedBatch.events.map((event, index) => {
                    const Icon = event.icon;
                    return (
                      <div key={event.id} className="flex gap-4 relative">
                        {/* Timeline connector */}
                        <div className="flex flex-col items-center relative">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index === selectedBatch.events.length - 1
                              ? 'bg-emerald-600'
                              : 'bg-amber-600'
                          } text-white z-10`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          {index < selectedBatch.events.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-300 absolute top-10"></div>
                          )}
                        </div>

                        {/* Event details */}
                        <div className="flex-1 pb-10">
                          <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h5 className="font-bold text-gray-900 text-lg">{event.type}</h5>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                  <User className="w-4 h-4 mr-1" />
                                  {event.actor} • {event.location}
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(event.timestamp)}
                              </div>
                            </div>

                            {event.data && Object.keys(event.data).length > 0 && (
                              <div className="mt-3 bg-gray-50 rounded-lg p-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                                {Object.entries(event.data).map(([key, value]) => (
                                  <div key={key} className="text-sm">
                                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                    <span className="font-medium text-gray-900 ml-1">{value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Blockchain Info */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">Blockchain Verification</h5>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p><span className="font-medium">Network:</span> Polygon Mainnet</p>
                      <p><span className="font-medium">Smart Contract:</span> <span className="font-mono">0x742d35Cc6...E59B4F2</span></p>
                      <p><span className="font-medium">Total Transactions:</span> {selectedBatch.events.length}</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View on Blockchain Explorer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Supply Chain?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Join us in bringing unprecedented transparency to the coffee industry. Contact us to learn how blockchain traceability can benefit your business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition shadow-lg"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
