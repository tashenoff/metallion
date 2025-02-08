import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

function ServiceItem({ name, image, description }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="card bg-opacity-70 backdrop-blur-md bg-base-200 border-base-100 border shadow-md p-4">
      <div className="relative h-60 w-full mb-4 rounded-lg overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            🔄 Загрузка...
          </div>
        )}
        <img
          src={image}
          alt={name}
          className={`h-full w-full object-cover rounded-lg transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2">{description}</p>
      <WhatsAppButton />
    </div>
  );
}

export default ServiceItem;
