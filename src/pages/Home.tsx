import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Thermometer, Wind, Wrench, Award, Building2, School, HeartPulse, Church } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact', { state: { scrollToForm: true, service: 'Consultation' } });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted HVAC Solutions for Every Institution
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Specialized in critical HVAC systems for healthcare, education, religious and commercial facilities. 
              Delivering precise climate control, energy efficiency, and 24/7 support to maintain optimal environments.
            </p>
            <button 
              onClick={handleScheduleConsultation}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://www.suihvac.com/wp-content/uploads/2022/10/How-to-Troubleshoot-Your-HVAC-System_-Tips-to-Cultivate-a-Comfortable-Workspace_.jpg" 
              alt="Modern HVAC Installation"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Institutional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Specialized Institutional Solutions</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <HeartPulse className="h-12 w-12 text-orange-600" />,
                title: "Healthcare Facilities",
                description: "Advanced HVAC systems for hospitals, clinics, and medical centers with strict air quality control."
              },
              {
                icon: <School className="h-12 w-12 text-orange-600" />,
                title: "Educational Institutions",
                description: "Efficient climate control for schools, universities, and campus buildings."
              },
              {
                icon: <Church className="h-12 w-12 text-orange-600" />,
                title: "Religious Institutions",
                description: "Custom solutions for churches, temples, and worship spaces of all sizes."
              },
              {
                icon: <Building2 className="h-12 w-12 text-orange-600" />,
                title: "Commercial Facilities",
                description: "Professional HVAC solutions for office buildings, retail spaces, and commercial properties."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="h-12 w-12 text-orange-600" />,
                title: "New Installation & Upgrades",
                description: "Complete HVAC system installation and upgrades for institutional facilities."
              },
              {
                icon: <Wind className="h-12 w-12 text-orange-600" />,
                title: "Repair & Emergency",
                description: "24/7 emergency repair services to minimize downtime."
              },
              {
                icon: <Wrench className="h-12 w-12 text-orange-600" />,
                title: "Maintenance",
                description: "Preventive maintenance programs to ensure system reliability."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {[
                  "Licensed & Insured Technicians",
                  "24/7 Emergency Service",
                  "100% Satisfaction Guarantee",
                  "Specialized Institutional Experience"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-orange-600 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Client Testimonials</h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-600">
                  "Their expertise in hospital HVAC systems has been invaluable. Excellent service and reliability."
                  <footer className="text-gray-500 mt-2">- St. Mary's Hospital Facility Manager</footer>
                </blockquote>
                <blockquote className="italic text-gray-600">
                  "Maintaining perfect climate control in our school buildings has never been easier."
                  <footer className="text-gray-500 mt-2">- Brooklyn Public Schools Director</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}