import React, { useEffect, useRef, FormEvent } from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function Contact() {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const serviceSelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const state = location.state as { scrollToForm?: boolean; service?: string } | null;
    
    if (state?.scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      
      if (state.service && serviceSelectRef.current) {
        serviceSelectRef.current.value = state.service;
      }
    }
  }, [location]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Create mailto link with form data
    const subject = `DBE Service Request: ${formData.get('service')}`;
    const body = `
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Service: ${formData.get('service')}
Preferred Time: ${formData.get('preferredTime')}
Message: ${formData.get('message')}
    `.trim();

    // Open default email client with pre-filled data
    window.location.href = `mailto:tambi@dbe.nyc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-24">
      {/* Contact Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            We're here to help with all your HVAC needs. Reach out to us through any of the following methods,
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    name="phone"
                    type="tel" 
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="1234567890"
                    title="Phone number should be 10 digits"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Service Needed</label>
                  <select 
                    name="service"
                    ref={serviceSelectRef}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600"
                    required
                  >
                    <option value="Consultation">Consultation</option>
                    <option value="Installation">Installation</option>
                    <option value="Repair">Repair</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Emergency">Emergency Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Contact Time</label>
                  <select 
                    name="preferredTime"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600"
                    required
                  >
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Please describe your HVAC needs or any specific requirements..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                    <p>
                      77 Sands St<br />
                      Brooklyn, NY 11201
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Contact Details</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+17187971335"
                      className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                      aria-label="Call DBE at (718) 797-1335"
                    >
                      <Phone className="h-5 w-5 text-orange-600 mr-3" />
                      <span>(718) 797-1335</span>
                    </a>
                    <a 
                      href="mailto:info@dbe.nyc"
                      className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                      aria-label="Email DBE at info@dbe.nyc"
                    >
                      <Mail className="h-5 w-5 text-orange-600 mr-3" />
                      <span>info@dbe.nyc</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p>8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p>9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Emergency Service</h3>
                  <p className="text-gray-600">
                    24/7 availability for emergency repairs
                  </p>
                  <a 
                    href="tel:+17187971335" 
                    className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors mt-2"
                    aria-label="Call DBE Emergency Service at (718) 797-1335"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: (718) 797-1335
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8">
                <h3 className="font-bold mb-4">Location</h3>
                <div className="h-[300px] bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4123456789!2d-73.98765432109876!3d40.70123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3243a0f997%3A0x7b5c8b0b5b9b9b9b!2s77%20Sands%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1710880000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}