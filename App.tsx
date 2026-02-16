import React, { useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import IncidentCard from './components/IncidentCard';
import IncidentMap from './components/IncidentMap';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { Filter, Calendar, ArrowDown, X } from 'lucide-react';
import { incidents } from './utils/mockData';

function App() {
  const [filterType, setFilterType] = useState<'all' | 'today' | 'week' | 'custom'>('all');
  const [customDate, setCustomDate] = useState<string>('');
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Helper to parse "DD Mon YYYY" string to Date object
  const parseIncidentDate = (dateStr: string): Date => {
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0], 10);
    const monthStr = parts[1];
    const year = parseInt(parts[2], 10);
    
    const months: Record<string, number> = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    // Create date at noon to avoid timezone midnight shifts
    return new Date(year, months[monthStr], day, 12, 0, 0);
  };

  // Filtering Logic
  const filteredIncidents = useMemo(() => {
    // Reference date: Feb 15, 2026 (Mock "Today")
    const REFERENCE_TODAY = new Date(2026, 1, 15, 12, 0, 0); 

    return incidents.filter((incident) => {
      const incidentDate = parseIncidentDate(incident.date);

      if (filterType === 'all') return true;

      if (filterType === 'today') {
        return incidentDate.getTime() === REFERENCE_TODAY.getTime();
      }

      if (filterType === 'week') {
        const oneWeekAgo = new Date(REFERENCE_TODAY);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        // Include start and end dates inclusive
        return incidentDate >= oneWeekAgo && incidentDate <= REFERENCE_TODAY;
      }

      if (filterType === 'custom' && customDate) {
        // Parse input YYYY-MM-DD
        const [y, m, d] = customDate.split('-').map(Number);
        // Create date at noon to match incident date logic
        const selected = new Date(y, m - 1, d, 12, 0, 0);
        return incidentDate.getTime() === selected.getTime();
      }

      return true;
    });
  }, [filterType, customDate]);

  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setCustomDate(e.target.value);
      setFilterType('custom');
    }
  };

  const getDisplayDate = () => {
    if (!customDate) return 'Select Date';
    const [y, m, d] = customDate.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getButtonClass = (type: string) => {
    const isActive = filterType === type;
    return `px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
      isActive 
        ? 'bg-red-600 text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;
  };

  const handleDateClick = () => {
    if (dateInputRef.current) {
      // Modern way to open date picker
      if ('showPicker' in dateInputRef.current) {
        try {
          (dateInputRef.current as any).showPicker();
        } catch (err) {
          // Fallback handled by the absolute inset input
        }
      } else {
        dateInputRef.current.focus();
        dateInputRef.current.click();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Navbar />
      </div>
      
      <div className="pt-20"> {/* Offset for fixed navbar */}
        <Hero />
      </div>
      
      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-600" size={20} />
              <span className="font-semibold text-gray-900">Filter by Date:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button 
                onClick={() => setFilterType('all')}
                className={getButtonClass('all')}
              >
                All Dates
              </button>
              <button 
                onClick={() => setFilterType('today')}
                className={getButtonClass('today')}
              >
                Today
              </button>
              <button 
                onClick={() => setFilterType('week')}
                className={getButtonClass('week')}
              >
                Last 7 Days
              </button>
            </div>
            
            <div className="relative group">
              <div 
                onClick={handleDateClick}
                className={`relative flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors text-sm font-medium whitespace-nowrap cursor-pointer select-none ${filterType === 'custom' ? 'border-red-600 bg-red-50 text-red-700' : 'bg-white border-gray-300 hover:border-red-300'}`}
              >
                <Calendar size={16} className={filterType === 'custom' ? 'text-red-600' : 'text-gray-600'} />
                <span className={filterType === 'custom' ? 'text-red-700' : 'text-gray-700'}>
                  {getDisplayDate()}
                </span>
                <ArrowDown size={16} className={filterType === 'custom' ? 'text-red-600' : 'text-gray-600'} />
                
                {/* Hidden Date Input Overlay */}
                <input 
                  ref={dateInputRef}
                  type="date" 
                  min="2026-01-01"
                  max="2026-12-31"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20"
                  onChange={handleCustomDateChange}
                  value={customDate}
                  onClick={(e) => e.stopPropagation()} // Prevent double trigger if showPicker used on parent
                />
              </div>
            </div>
            
            {/* Show clear filter if active */}
            {filterType !== 'all' && (
              <button 
                onClick={() => {
                  setFilterType('all');
                  setCustomDate('');
                }}
                className="text-sm text-red-600 hover:text-red-800 underline flex items-center gap-1"
              >
                <X size={14} /> Clear Filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 bg-gray-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Incident Feed */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-baseline gap-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filterType === 'all' ? 'Latest Incidents' : 
                   filterType === 'today' ? 'Incidents Today' : 
                   filterType === 'week' ? 'Past 7 Days' : 
                   `Incidents on ${getDisplayDate()}`}
                </h2>
                <span className="text-gray-600 text-sm font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                  {filteredIncidents.length}
                </span>
              </div>
              
              {filteredIncidents.length > 0 ? (
                <div className="space-y-6">
                  {filteredIncidents.map((incident) => (
                    <IncidentCard key={incident.id} incident={incident} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-lg border border-gray-200 text-center shadow-sm">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No incidents found</h3>
                  <p className="text-gray-500">Try adjusting your date filters to see more results.</p>
                  <button 
                    onClick={() => setFilterType('all')}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium cursor-pointer"
                  >
                    View All Incidents
                  </button>
                </div>
              )}
            </div>
            
            {/* Right Column: Map & Widget */}
            <div className="lg:col-span-1">
              <IncidentMap />
            </div>
            
          </div>
        </div>
      </section>
      
      <Stats />

      {/* About Section with Scroll Anchor */}
      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      
      {/* Contact Section with Scroll Anchor */}
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>

      <Footer />

      {/* Mock Vapi Widget Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-red-700 text-white p-4 rounded-full shadow-xl hover:bg-red-800 transition-colors hover:scale-105 transform duration-200 flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">Talk with Us</span>
        </button>
      </div>

    </div>
  );
}

export default App;