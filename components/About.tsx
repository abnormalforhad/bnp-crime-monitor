import React from 'react';
import { Database, Map, Clock, CheckCircle, Flag } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About BNP Crime Monitor</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Documenting and tracking incidents for transparency and accountability
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-red-50 rounded-2xl p-8 mb-16 border border-red-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Flag className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                BNP Crime Monitor is dedicated to providing transparent and comprehensive documentation of incidents involving the Bangladesh Nationalist Party (BNP). Our platform aggregates news reports from Daily Amardesh, offering citizens, researchers, and journalists a centralized resource for tracking and understanding patterns of reported incidents across Bangladesh.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">News Aggregation</h4>
            <p className="text-gray-600">
              We collect and organize news reports from Daily Amardesh that document incidents involving BNP, ensuring no duplicate entries and maintaining chronological accuracy.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Geographic Visualization</h4>
            <p className="text-gray-600">
              Our interactive map provides a visual representation of incident locations across Bangladesh, helping users understand geographic patterns and regional impacts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Timeline Tracking</h4>
            <p className="text-gray-600">
              Starting from February 12, 2026, we maintain a comprehensive timeline of all reported incidents, allowing users to filter and search by date and location.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Source Verification</h4>
            <p className="text-gray-600">
              Every incident listed includes a direct link to the original Daily Amardesh article, ensuring transparency and allowing users to verify information at the source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;