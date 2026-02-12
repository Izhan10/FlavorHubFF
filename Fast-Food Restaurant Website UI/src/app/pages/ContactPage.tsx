import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Mail } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-black text-brand-dark mb-6">
              Send us a <span className="text-brand-red">Message</span>
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brand-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-red-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-brand-red rounded-full p-3 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Food Street<br />
                    Flavor Town, FT 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="FlavorHub Location"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-yellow rounded-full p-3 flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">(555) 123-4567</p>
                  <a
                    href="tel:5551234567"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-red-700 font-semibold transition-colors"
                  >
                    Call Now →
                  </a>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-dark mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">info@flavorhub.com</p>
                    <a
                      href="mailto:info@flavorhub.com"
                      className="inline-flex items-center gap-2 text-brand-red hover:text-red-700 font-semibold transition-colors"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red rounded-full p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-dark mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 10:00 AM - 11:00 PM</p>
                      <p>Saturday: 10:00 AM - 12:00 AM</p>
                      <p>Sunday: 11:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
