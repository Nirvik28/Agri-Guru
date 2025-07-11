import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import VoiceCommand from '../components/VoiceCommand';
import { useAuth } from '../contexts/AuthContext';
import { FileText, Search, MapPin, Calendar, DollarSign, Users } from 'lucide-react';

const Policies: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const policies = [
    {
      id: 1,
      title: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Crop insurance scheme providing financial support to farmers in case of crop failure',
      eligibility: 'All farmers growing notified crops',
      benefits: 'Coverage up to 100% of sum insured',
      location: 'Pan India',
      deadline: '2024-07-31',
      category: 'Insurance',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'PM-KISAN Scheme',
      description: 'Direct income support to farmers providing ₹6,000 per year',
      eligibility: 'Small and marginal farmers',
      benefits: '₹2,000 per installment (3 times a year)',
      location: 'Pan India',
      deadline: 'Ongoing',
      category: 'Financial Support',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Soil Health Card Scheme',
      description: 'Provides soil nutrient status and recommendations for fertilizer use',
      eligibility: 'All farmers',
      benefits: 'Free soil testing and nutrient management advice',
      location: 'Pan India',
      deadline: 'Ongoing',
      category: 'Advisory',
      icon: Users,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 4,
      title: 'Kisan Credit Card',
      description: 'Credit facility for farmers to meet their agricultural needs',
      eligibility: 'All farmers including tenant farmers',
      benefits: 'Credit up to ₹3 lakh at 4% interest',
      location: 'Pan India',
      deadline: 'Ongoing',
      category: 'Credit',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 5,
      title: 'Punjab State Schemes',
      description: 'State-specific agricultural support schemes for Punjab farmers',
      eligibility: 'Punjab resident farmers',
      benefits: 'Subsidies on equipment and seeds',
      location: 'Punjab',
      deadline: 'Varies',
      category: 'State Scheme',
      icon: MapPin,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 6,
      title: 'Maharashtra State Agricultural Schemes',
      description: 'State-specific support for Maharashtra farmers including subsidies and training',
      eligibility: 'Maharashtra resident farmers',
      benefits: 'Equipment subsidies and skill development',
      location: 'Maharashtra',
      deadline: 'Varies',
      category: 'State Scheme',
      icon: MapPin,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 7,
      title: 'Tamil Nadu Farmer Welfare Schemes',
      description: 'Comprehensive support schemes for Tamil Nadu agricultural community',
      eligibility: 'Tamil Nadu resident farmers',
      benefits: 'Free seeds, fertilizers, and equipment',
      location: 'Tamil Nadu',
      deadline: 'Ongoing',
      category: 'State Scheme',
      icon: MapPin,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 8,
      title: 'Karnataka Agricultural Development Schemes',
      description: 'Technology adoption and modernization support for Karnataka farmers',
      eligibility: 'Karnataka resident farmers',
      benefits: 'Technology subsidies and training programs',
      location: 'Karnataka',
      deadline: 'Varies',
      category: 'State Scheme',
      icon: MapPin,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const filteredPolicies = policies.filter(policy =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(policies.map(policy => policy.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <VoiceCommand />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Government Policies
          </h1>
          <p className="text-gray-600">
            Explore agricultural policies and schemes available in {user?.location}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Policies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPolicies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${policy.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                    {policy.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {policy.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {policy.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Eligibility: {policy.eligibility}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>Benefits: {policy.benefits}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Location: {policy.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Deadline: {policy.deadline}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Policies;