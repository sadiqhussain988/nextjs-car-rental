import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-[450px] bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
      {/* Google Maps Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53231.90299616229!2d73.0451121!3d33.6335123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419ac2%3A0xc635d7f811a68541!2sI-9%20Industrial%20Area%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Floating Address Card (Optional) */}
      <div className="absolute bottom-10 left-10 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl hidden md:block border-l-4 border-yellow-400">
        <h4 className="font-bold text-lg mb-1">Main Logistics Hub</h4>
        <p className="text-slate-400 text-sm">
          Plot 45, Sector I-9/3, Industrial Area
          <br />
          Islamabad, Pakistan
        </p>
      </div>
    </section>
  );
};

export default MapSection;
