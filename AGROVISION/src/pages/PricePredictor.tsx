import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import VoiceCommand from '../components/VoiceCommand';
import { useAuth } from '../contexts/AuthContext';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Calendar,
  MapPin,
  Wheat,
  Search
} from 'lucide-react';

const PricePredictor: React.FC = () => {
  const { user } = useAuth();
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedMarket, setSelectedMarket] = useState('punjab');
  const [predictionPeriod, setPredictionPeriod] = useState('7');

  const crops = [
    { id: 'wheat', name: 'Wheat', icon: '🌾' },
    { id: 'rice', name: 'Rice', icon: '🍚' },
    { id: 'corn', name: 'Corn', icon: '🌽' },
    { id: 'cotton', name: 'Cotton', icon: '🌸' },
    { id: 'sugarcane', name: 'Sugarcane', icon: '🎋' },
    { id: 'soybean', name: 'Soybean', icon: '🫘' },
  ];

  const markets = [
    { id: 'andhra-pradesh', name: 'Andhra Pradesh', state: 'AP' },
    { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', state: 'AR' },
    { id: 'assam', name: 'Assam', state: 'AS' },
    { id: 'bihar', name: 'Bihar', state: 'BR' },
    { id: 'chhattisgarh', name: 'Chhattisgarh', state: 'CG' },
    { id: 'goa', name: 'Goa', state: 'GA' },
    { id: 'gujarat', name: 'Gujarat', state: 'GJ' },
    { id: 'haryana', name: 'Haryana', state: 'HR' },
    { id: 'himachal-pradesh', name: 'Himachal Pradesh', state: 'HP' },
    { id: 'jharkhand', name: 'Jharkhand', state: 'JH' },
    { id: 'karnataka', name: 'Karnataka', state: 'KA' },
    { id: 'kerala', name: 'Kerala', state: 'KL' },
    { id: 'madhya-pradesh', name: 'Madhya Pradesh', state: 'MP' },
    { id: 'maharashtra', name: 'Maharashtra', state: 'MH' },
    { id: 'manipur', name: 'Manipur', state: 'MN' },
    { id: 'meghalaya', name: 'Meghalaya', state: 'ML' },
    { id: 'mizoram', name: 'Mizoram', state: 'MZ' },
    { id: 'nagaland', name: 'Nagaland', state: 'NL' },
    { id: 'odisha', name: 'Odisha', state: 'OR' },
    { id: 'punjab', name: 'Punjab', state: 'PB' },
    { id: 'rajasthan', name: 'Rajasthan', state: 'RJ' },
    { id: 'sikkim', name: 'Sikkim', state: 'SK' },
    { id: 'tamil-nadu', name: 'Tamil Nadu', state: 'TN' },
    { id: 'telangana', name: 'Telangana', state: 'TG' },
    { id: 'tripura', name: 'Tripura', state: 'TR' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh', state: 'UP' },
    { id: 'uttarakhand', name: 'Uttarakhand', state: 'UK' },
    { id: 'west-bengal', name: 'West Bengal', state: 'WB' },
    // Union Territories
    { id: 'andaman-nicobar', name: 'Andaman & Nicobar Islands', state: 'AN' },
    { id: 'chandigarh', name: 'Chandigarh', state: 'CH' },
    { id: 'dadra-nagar-haveli', name: 'Dadra & Nagar Haveli and Daman & Diu', state: 'DN' },
    { id: 'delhi', name: 'Delhi', state: 'DL' },
    { id: 'jammu-kashmir', name: 'Jammu & Kashmir', state: 'JK' },
    { id: 'ladakh', name: 'Ladakh', state: 'LA' },
    { id: 'lakshadweep', name: 'Lakshadweep', state: 'LD' },
    { id: 'puducherry', name: 'Puducherry', state: 'PY' },
  ];

  const priceData = {
    current: 2850,
    predicted: 2920,
    change: 70,
    changePercent: 2.46,
    trend: 'up',
    confidence: 92
  };

  const historicalData = [
    { month: 'Jan', price: 2650 },
    { month: 'Feb', price: 2700 },
    { month: 'Mar', price: 2750 },
    { month: 'Apr', price: 2800 },
    { month: 'May', price: 2850 },
    { month: 'Jun', price: 2920 },
  ];

  const marketInsights = [
    {
      title: 'Demand Outlook',
      value: 'High',
      description: 'Strong export demand expected',
      color: 'text-green-600'
    },
    {
      title: 'Supply Status',
      value: 'Moderate',
      description: 'Average harvest this season',
      color: 'text-yellow-600'
    },
    {
      title: 'Weather Impact',
      value: 'Positive',
      description: 'Favorable conditions ahead',
      color: 'text-green-600'
    },
    {
      title: 'Government Policy',
      value: 'Supportive',
      description: 'MSP increase announced',
      color: 'text-blue-600'
    }
  ];

  const selectedCropData = crops.find(crop => crop.id === selectedCrop);
  const selectedMarketData = markets.find(market => market.id === selectedMarket);

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
            Price Predictor
          </h1>
          <p className="text-gray-600">
            AI-powered crop price predictions for better market decisions
          </p>
        </motion.div>

        {/* Selection Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Crop
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {crops.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.icon} {crop.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Market
              </label>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {markets.map((market) => (
                  <option key={market.id} value={market.id}>
                    {market.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prediction Period
              </label>
              <select
                value={predictionPeriod}
                onChange={(e) => setPredictionPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="7">Next 7 days</option>
                <option value="15">Next 15 days</option>
                <option value="30">Next 30 days</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Price Prediction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white bg-opacity-20 rounded-full">
                <span className="text-2xl">{selectedCropData?.icon}</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{selectedCropData?.name}</h2>
                <p className="text-sm opacity-90">{selectedMarketData?.name} Market</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Confidence</p>
              <p className="text-lg font-semibold">{priceData.confidence}%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Current Price</span>
                <DollarSign className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold">₹{priceData.current}/qtl</p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Predicted Price</span>
                {priceData.trend === 'up' ? (
                  <TrendingUp className="h-5 w-5 text-green-200" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-200" />
                )}
              </div>
              <p className="text-2xl font-bold">₹{priceData.predicted}/qtl</p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Change</span>
                <BarChart3 className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-green-200">
                +₹{priceData.change} (+{priceData.changePercent}%)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Historical Price Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Price Trend</h2>
          <div className="h-64 flex items-end justify-between space-x-4">
            {historicalData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-green-500 rounded-t-lg"
                  style={{
                    height: `${(data.price / 3000) * 200}px`,
                    minHeight: '20px'
                  }}
                ></div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium text-gray-900">₹{data.price}</p>
                  <p className="text-xs text-gray-500">{data.month}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
                <p className={`text-lg font-bold ${insight.color} mb-2`}>
                  {insight.value}
                </p>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricePredictor;