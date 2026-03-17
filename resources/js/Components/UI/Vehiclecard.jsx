// resources/js/Components/UI/VehicleCard.jsx
import { Bus, Truck, Download } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white border border-navy/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">

      {/* 🖼️ Foto Kendaraan */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.photo}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge Tipe Kendaraan */}
        <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
          {vehicle.type === 'bus' ? <Bus size={14} /> : <Truck size={14} />}
          {vehicle.type}
        </div>
      </div>

      {/* 📋 Info Kendaraan */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{vehicle.name}</h3>
        <p className="text-sm text-navy/60 mb-4 font-bold">
          {vehicle.seat_capacity} Seat
        </p>

        {/* 🎯 Daftar Fasilitas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {vehicle.facilities.slice(0, 3).map((facility, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-navy/5 text-navy px-2 py-1 rounded-full"
            >
              {facility}
            </span>
          ))}
          {vehicle.facilities.length > 3 && (
            <span className="text-[10px] text-navy/40 px-2 py-1">
              +{vehicle.facilities.length - 3}
            </span>
          )}
        </div>

        {/* 🔘 Action Buttons */}
        <div className="flex gap-3">
          {/* Tombol Pesan (scroll ke contact) */}
          <a
            href="#contact"
            className="flex-1 btn-outline text-center text-sm"
          >
            Pesan Unit Ini
          </a>

          {/* Tombol Download PDF */}
          {vehicle.pdf_file && (
            <a
              href={vehicle.pdf_file}
              download
              className="w-10 h-10 bg-navy/5 text-navy rounded-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
              title="Download PDF Katalog"
            >
              <Download size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}