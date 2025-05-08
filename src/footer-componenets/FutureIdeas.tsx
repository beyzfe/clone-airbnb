import React, { useState } from "react";

const tabs: string[] = [
  "Popüler",
  "Sanat ve Kültür",
  "Açık hava",
  "Dağlar",
  "Sahil",
  "Kategoriler",
  "Yapılacak şeyler",
];

const tabContents: Record<string, [string, string][]> = {
  Popüler: [
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  "Sanat ve Kültür": [
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Tarihi Yerler", "Efes"],
    ["Doğa Rotaları", "Likya Yolu"],
    ["Modern Şehirler", "Tokyo"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  "Açık hava": [
    ["Kaz Dağları", "Yeşilyurt"],
    ["Uludağ", "Oteller Bölgesi"],
    ["Erciyes", "Kayak Merkezi"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["Tarihi Yerler", "Efes"],
    ["Doğa Rotaları", "Likya Yolu"],
    ["Modern Şehirler", "Tokyo"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  Dağlar: [
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Tarihi Yerler", "Efes"],
    ["Doğa Rotaları", "Likya Yolu"],
    ["Modern Şehirler", "Tokyo"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  Sahil: [
    ["Çeşme", "Alaçatı"],
    ["Kaş", "Kalkan"],
    ["Fethiye", "Ölüdeniz"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["Tarihi Yerler", "Efes"],
    ["Doğa Rotaları", "Likya Yolu"],
    ["Modern Şehirler", "Tokyo"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  Kategoriler: [
    ["Tarihi Yerler", "Efes"],
    ["Doğa Rotaları", "Likya Yolu"],
    ["Modern Şehirler", "Tokyo"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
  "Yapılacak şeyler": [
    ["Yürüyüş", "Kanyon Parkuru"],
    ["Müze Turları", "Arkeoloji Müzesi"],
    ["Gastronomi", "Şef Restoranları"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
    ["Erciyes", "Zirve"],
    ["Uludağ", "Kirazlıyayla"],
    ["Palandöken", "Ejder Tepe"],
    ["İstanbul", "Pendik"],
    ["İzmir", "Karşıyaka"],
    ["Antalya", "Konyaaltı"],
    ["Bodrum", "Turgutreis"],
    ["Sapanca", "Kırkpınar"],
    ["Abant", "Göl"],
    ["Floransa", "Uffizi"],
    ["Paris", "Louvre"],
    ["Berlin", "Museuminsel"],
    ["İstanbul", "Galata"],
  ],
};

const FutureIdeas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Popüler");

  return (
    <div className="w-full bg-[#f7f7f7] mt-4">
      <div className="w-[1400px] mx-auto pt-[50px]">
        <span className="font-bold text-xl text-gray-800">
          Gelecek kaçamaklarınız için fikirler
        </span>

        <div className="flex gap-6 mt-4 border-b border-gray-300 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "text-black border-black font-medium"
                  : "text-gray-500 border-transparent hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
          {tabContents[activeTab]?.map(([main, sub], index) => (
            <div key={index} className="flex flex-col cursor-pointer group">
              <span className="text-sm font-semibold text-gray-800">
                {main}
              </span>

              <span className="text-sm text-gray-500 group-hover:text-gray-800  transition-all duration-300">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureIdeas;
