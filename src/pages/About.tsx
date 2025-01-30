import React from 'react';
import { Award, Users, Building2, Trophy, Lightbulb, Puzzle, Shield, Target } from 'lucide-react';

export function About() {
  const stats = [
    { icon: <Users className="h-6 w-6 text-orange-600" />, value: "1000+", label: "Happy Clients" },
    { icon: <Trophy className="h-6 w-6 text-orange-600" />, value: "15+", label: "Years Experience" },
    { icon: <Building2 className="h-6 w-6 text-orange-600" />, value: "500+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6 text-orange-600" />, value: "100%", label: "Satisfaction Rate" }
  ];

  const philosophyPoints = [
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Vision Integration",
      description: "Bridging the gap between design and construction through expert systems integration."
    },
    {
      icon: <Puzzle className="h-8 w-8 text-orange-600" />,
      title: "Holistic Approach",
      description: "Seamlessly combining architecture, design, engineering, and construction expertise."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Vision Protection",
      description: "Safeguarding architectural integrity while ensuring practical execution."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Execution Excellence",
      description: "Delivering outstanding results through meticulous project management."
    }
  ];

  return (
    <div className="pt-20">
      {/* About Header with Hero Image */}
      <section className="relative h-[400px] mt-16 mb-12">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
          alt="Modern architectural design showcasing DBE's expertise"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Where Vision Meets Execution</h1>
            <p className="text-xl">
              A full-service General Contracting, Management, and Advisory firm dedicated to transforming your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Service Area</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We proudly serve customers throughout the tri-state area, including New York, New Jersey, and Connecticut. 
              Our comprehensive service coverage extends across all regional areas within these states, ensuring reliable 
              support for our valued clients throughout the Northeast.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-600 mb-6">
                As a virtual extension of your team, we provide comprehensive construction services, 
                technical expertise, and personalized guidance throughout every phase of the construction process. 
                Our hands-on approach ensures your project receives the attention and expertise it deserves.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive Construction Services",
                  "Technical Expertise",
                  "Personalized Guidance",
                  "Hands-on Project Management"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Team collaboration in construction project"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.usgbc.org/sites/default/files/profiles/TAMBI%20KAT%202021_37-FINAL_0.jpg"
                alt="Tambi Kat, Project Director"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Led by Excellence</h3>
              <p className="text-gray-600 mb-6">
                Under the leadership of LEED-certified Project Director Tambi Kat, who specializes in 
                Building Design & Construction, our team brings together the industry's finest talents.
              </p>
              <h4 className="font-bold mb-4">Our Expert Team Includes:</h4>
              <ul className="space-y-3">
                {[
                  "Project Managers",
                  "Skilled Artisans",
                  "Interior Designers",
                  "Technology Consultants",
                  "Specialized Trade Professionals"
                ].map((role, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-center mb-3">{point.title}</h3>
                <p className="text-gray-600 text-center">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}