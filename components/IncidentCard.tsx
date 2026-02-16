import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Incident } from '../types';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-300 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3 flex-wrap">
          {incident.isBnpRelated && (
            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full whitespace-nowrap">
              BNP Related
            </span>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} />
            <span>{incident.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>{incident.time}</span>
          </div>
        </div>
      </div>
      
      <a href={incident.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
          {incident.title}
        </h3>
      </a>
      
      <p className="text-gray-600 mb-4 leading-relaxed font-light">
        {incident.description}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-red-600" />
          <span className="font-medium">{incident.location}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href={incident.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium whitespace-nowrap"
          >
            Read More
          </a>
          <a 
            href={incident.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-gray-300 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors cursor-pointer"
            title="View source"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <ExternalLink size={16} className="text-gray-600" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;