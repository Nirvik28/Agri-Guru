import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import VoiceCommand from '../components/VoiceCommand';
import { useAuth } from '../contexts/AuthContext';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Droplets, 
  Wind, 
  Thermometer,
  Eye,
  Compass,
  AlertTriangle,
  Calendar,
  MapPin
} from 'lucide-react';

const Weather: React.FC = () => {
  const { user } = useAuth();
  const [selectedLocation, setSelectedLocation] = useState('punjab');

  const locations = [
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

  const currentWeather = {
    temperature: 32,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    windDirection: 'NE',
    visibility: 10,
    pressure: 1013,
    uvIndex: 8,
    dewPoint: 24,
    icon: Cloud
  };

  const forecast = [
    { day: 'Today', high: 32, low: 24, condition: 'Partly Cloudy', icon: Cloud, rain: 20 },
    { day: 'Tomorrow', high: 34, low: 26, condition: 'Sunny', icon: Sun, rain: 0 },
    { day: 'Wednesday', high: 36, low: 28, condition: 'Hot', icon: Sun, rain: 0 },
    { day: 'Thursday', high: 30, low: 22, condition: 'Rainy', icon: CloudRain, rain: 80 },
    { day: 'Friday', high: 28, low: 20, condition: 'Rainy', icon: CloudRain, rain: 90 },
    { day: 'Saturday', high: 31, low: 23, condition: 'Partly Cloudy', icon: Cloud, rain: 30 },
    { day: 'Sunday', high: 33, low: 25, condition: 'Sunny', icon: Sun, rain: 10 },
  ];

  const agriculturalAdvisory = [
    {
      title: 'Irrigation Advisory',
      description: 'Heavy rainfall expected in 2 days. Avoid irrigation for next 3 days.',
      priority: 'high',
      icon: Droplets,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Pest Management',
      description: 'High humidity may increase pest activity. Monitor crops closely.',
      priority: 'medium',
      icon: AlertTriangle,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Harvesting',
      description: 'Good weather window for harvesting operations this weekend.',
      priority: 'low',
      icon: Calendar,
      color: 'bg-green-100 text-green-600'
    }
  ];

  const weatherMetrics = [
    { label: 'Temperature', value: `${currentWeather.temperature}°C`, icon: Thermometer },
    { label: 'Humidity', value: `${currentWeather.humidity}%`, icon: Droplets },
    { label: 'Wind Speed', value: `${currentWeather.windSpeed} km/h`, icon: Wind },
    { label: 'Visibility', value: `${currentWeather.visibility} km`, icon: Eye },
    { label: 'Pressure', value: `${currentWeather.pressure} hPa`, icon: Compass },
    { label: 'UV Index', value: currentWeather.uvIndex, icon: Sun },
  ];

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

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
            Weather Forecast
          </h1>
          <p className="text-gray-600">
            Real-time weather data and agricultural advisory for {user?.location}
          </p>
        </motion.div>

        {/* Location Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-gray-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Current Weather */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Current Weather</h2>
              <p className="text-lg opacity-90">{selectedLocationData?.name}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <currentWeather.icon className="h-12 w-12" />
                <span className="text-4xl font-bold">{currentWeather.temperature}°C</span>
              </div>
              <p className="text-lg opacity-90">{currentWeather.condition}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weatherMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm opacity-90">{metric.label}</span>
                  </div>
                  <p className="font-semibold">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 7-Day Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">7-Day Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                  <p className="text-sm font-medium text-gray-900 mb-2">{day.day}</p>
                  <Icon className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-500 mb-2">{day.condition}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-900">{day.high}°</p>
                    <p className="text-xs text-gray-500">{day.low}°</p>
                    <p className="text-xs text-blue-600">{day.rain}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Agricultural Advisory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Agricultural Advisory</h2>
          <div className="space-y-4">
            {agriculturalAdvisory.map((advisory, index) => {
              const Icon = advisory.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`p-2 rounded-full ${advisory.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{advisory.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        advisory.priority === 'high' ? 'bg-red-100 text-red-600' :
                        advisory.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {advisory.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{advisory.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Weather;