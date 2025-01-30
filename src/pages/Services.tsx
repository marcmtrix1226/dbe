import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Thermometer, Wind, Wrench } from 'lucide-react';

export function Services() {
  const navigate = useNavigate();

  const handleLearnMore = (service: string) => {
    navigate('/contact', { 
      state: { 
        scrollToForm: true, 
        service: service 
      } 
    });
  };

  const services = [
    {
      icon: <Thermometer className="h-12 w-12 text-orange-600" />,
      image: "https://brandt.us/wp-content/uploads/2023/06/Blog-Post-Featured-Image-31-1100x825.png",
      title: "New Installation & Upgrades",
      description: "Complete heating system installation, repair, and maintenance for optimal comfort during cold months.",
      features: [
        "Energy-efficient system selection",
        "Professional installation",
        "System sizing and load calculation",
        "Ductwork design and installation",
        "Smart thermostat integration"
      ]
    },
    {
      icon: <Wind className="h-12 w-12 text-orange-600" />,
      image: "https://www.romanoheatandair.com/sites/default/files/articles/HVAC%20Emergency%20Service.jpg",
      title: "Repair & Emergency Service",
      description: "Expert AC installation and repair services to keep your space cool and comfortable.",
      features: [
        "24/7 emergency repairs",
        "Diagnostic services",
        "Component replacement",
        "System troubleshooting",
        "Performance optimization"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-600" />,
      image: "https://airpromaster.com/wp-content/uploads/2021/02/commercial-heating-and-cooling-services.jpg",
      title: "Maintenance",
      description: "Regular maintenance programs to ensure your HVAC system runs efficiently year-round.",
      features: [
        "Seasonal tune-ups",
        "Filter replacement",
        "System cleaning",
        "Performance testing",
        "Preventive maintenance"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Services Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive HVAC solutions to keep your home or business comfortable year-round.
            Our expert technicians are trained to handle all your heating and cooling needs.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleLearnMore(service.title)}
                    className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}