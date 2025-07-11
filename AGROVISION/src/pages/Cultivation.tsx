import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import VoiceCommand from '../components/VoiceCommand';
import { useAuth } from '../contexts/AuthContext';
import { 
  Sprout, 
  Calendar, 
  Droplets, 
  Bug, 
  Zap, 
  Thermometer,
  Leaf,
  Target,
  Clock
} from 'lucide-react';

const Cultivation: React.FC = () => {
  const { user } = useAuth();
  const [selectedSeason, setSelectedSeason] = useState('kharif');

  const cultivationTips = {
    kharif: [
      {
        title: 'Soil Preparation',
        description: 'Prepare soil before monsoon. Ensure proper drainage and add organic matter.',
        icon: Sprout,
        color: 'bg-green-100 text-green-600',
        timing: 'May-June'
      },
      {
        title: 'Sowing Time',
        description: 'Sow seeds after first monsoon shower. Maintain proper spacing.',
        icon: Calendar,
        color: 'bg-blue-100 text-blue-600',
        timing: 'June-July'
      },
      {
        title: 'Water Management',
        description: 'Monitor water levels. Ensure drainage during heavy rains.',
        icon: Droplets,
        color: 'bg-cyan-100 text-cyan-600',
        timing: 'July-September'
      },
      {
        title: 'Pest Control',
        description: 'Regular monitoring for pests. Use integrated pest management.',
        icon: Bug,
        color: 'bg-red-100 text-red-600',
        timing: 'July-October'
      }
    ],
    rabi: [
      {
        title: 'Land Preparation',
        description: 'Prepare land after harvesting kharif crops. Add fertilizers.',
        icon: Sprout,
        color: 'bg-green-100 text-green-600',
        timing: 'October-November'
      },
      {
        title: 'Sowing',
        description: 'Sow wheat, barley, and other rabi crops. Maintain line sowing.',
        icon: Calendar,
        color: 'bg-blue-100 text-blue-600',
        timing: 'November-December'
      },
      {
        title: 'Irrigation',
        description: 'Provide adequate irrigation. Critical stages need proper water.',
        icon: Droplets,
        color: 'bg-cyan-100 text-cyan-600',
        timing: 'December-March'
      },
      {
        title: 'Harvesting',
        description: 'Harvest at proper maturity. Avoid losses due to weather.',
        icon: Target,
        color: 'bg-orange-100 text-orange-600',
        timing: 'March-April'
      }
    ]
  };

  const modernTechniques = [
    {
      title: 'Precision Agriculture',
      description: 'Use GPS and sensors for precise application of inputs',
      icon: Target,
      benefits: ['Reduced input costs', 'Higher yields', 'Environmental protection']
    },
    {
      title: 'Drip Irrigation',
      description: 'Efficient water management system for optimal crop growth',
      icon: Droplets,
      benefits: ['Water conservation', 'Reduced labor', 'Better crop quality']
    },
    {
      title: 'Integrated Pest Management',
      description: 'Sustainable approach to pest control using multiple methods',
      icon: Bug,
      benefits: ['Reduced pesticide use', 'Cost effective', 'Environmental friendly']
    },
    {
      title: 'Soil Health Monitoring',
      description: 'Regular testing and monitoring of soil nutrients',
      icon: Leaf,
      benefits: ['Optimal fertilizer use', 'Better soil health', 'Higher productivity']
    }
  ];

  const currentTips = cultivationTips[selectedSeason as keyof typeof cultivationTips];

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
            Cultivation Techniques
          </h1>
          <p className="text-gray-600">
            Advanced agricultural practices for {user?.cropType} cultivation
          </p>
        </motion.div>

        {/* Season Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Season</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedSeason('kharif')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedSeason === 'kharif'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Kharif Season
            </button>
            <button
              onClick={() => setSelectedSeason('rabi')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedSeason === 'rabi'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rabi Season
            </button>
          </div>
        </motion.div>

        {/* Seasonal Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {currentTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`p-3 rounded-full ${tip.color} mb-4 inline-block`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {tip.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{tip.timing}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modern Techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Modern Farming Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernTechniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {technique.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {technique.description}
                  </p>
                  <div className="space-y-1">
                    {technique.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">AI-Powered Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <Zap className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-2">Optimal Planting Time</h3>
              <p className="text-sm">Based on weather patterns and soil conditions</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <Thermometer className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-2">Climate Adaptation</h3>
              <p className="text-sm">Techniques adapted to your local climate</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <Leaf className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-2">Yield Optimization</h3>
              <p className="text-sm">Maximize crop yield with precision methods</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cultivation;