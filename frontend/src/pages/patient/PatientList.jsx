import React from 'react';

const patients = [
  { id: 1, image: 'https://via.placeholder.com/40', name: 'Selim', surname: 'GÜRSES', email: 'selim@domain.com', contact: '05369863247', location: 'Trabzon', tc: '36587774125' },
  { id: 2, image: 'https://via.placeholder.com/40', name: 'Cemre', surname: 'YALÇINSOY', email: 'cemre@domain.com', contact: '05426987832', location: 'İstanbul', tc: '36985214785' },
  { id: 3, image: 'https://via.placeholder.com/40', name: 'Seçkin', surname: 'SEYMEN', email: 'seckin@domain.com', contact: '05318521496', location: 'Bursa', tc: '25471554789' },
  { id: 4, image: 'https://via.placeholder.com/40', name: 'Ahmet', surname: 'KAPAKÇI', email: 'ahmet@domain.com', contact: '05336547893', location: 'İzmit', tc: '78965554123' },
  { id: 5, image: 'https://via.placeholder.com/40', name: 'Yalçın', surname: 'SELİMOĞLU', email: 'yalcin@domain.com', contact: '05465989832', location: 'Kocaeli', tc: '885145' },
  { id: 6, image: 'https://via.placeholder.com/40', name: 'Nazan', surname: 'SATIŞOĞLU', email: 'nazan@domain.com', contact: '05556985478', location: 'Aydın', tc: '123123' },
  { id: 7, image: 'https://via.placeholder.com/40', name: 'Alper', surname: 'ÜNLÜ', email: 'alper@domain.com', contact: '05052587413', location: 'Bursa', tc: '9854877745' },
  { id: 8, image: 'https://via.placeholder.com/40', name: 'Aylin', surname: 'GÜMÜŞÇÜ', email: 'aylin@domain.com', contact: '05398541229', location: 'İzmir', tc: '99845754558' },
  { id: 9, image: 'https://via.placeholder.com/40', name: 'Selin', surname: 'TAŞ', email: 'selin@domain.com', contact: '05422366558', location: 'Ankara', tc: '258741236546' },
  { id: 10, image: 'https://via.placeholder.com/40', name: 'BUĞRA', surname: 'YAĞUŞ', email: 'bugra@domain.com', contact: '05321456958', location: 'Fransa', tc: '987456321456' },
  { id: 11, image: 'https://via.placeholder.com/40', name: 'Tuğçe', surname: 'DAMALI', email: 'tugce@domain.com', contact: '05321626587', location: 'İstanbul', tc: '147258369789' },
];

const PatientList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold text-cyan-600 mb-4">HASTA LİSTESİ</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Ürün Arayın"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">ADI</th>
              <th className="py-3 px-6 text-left">SOYADI</th>
              <th className="py-3 px-6 text-left">E-POSTA</th>
              <th className="py-3 px-6 text-left">İLETİŞİM</th>
              <th className="py-3 px-6 text-left">KONUM</th>
              <th className="py-3 px-6 text-left">TC/PASAPORT</th>
              <th className="py-3 px-6 text-left">AKSİYON</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={patient.image} alt={patient.name} />
                    </div>
                    <span className="ml-4">{patient.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{patient.surname}</td>
                <td className="py-3 px-6 text-left">{patient.email}</td>
                <td className="py-3 px-6 text-left">{patient.contact}</td>
                <td className="py-3 px-6 text-left">{patient.location}</td>
                <td className="py-3 px-6 text-left">{patient.tc}</td>
                <td className="py-3 px-6 text-left">
                  <button className="bg-cyan-500 text-white px-3 py-1 rounded-md mr-2">Düzenle</button>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-md">Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <select className="border px-3 py-2 rounded-md">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span className="ml-2">Adet Satır Listele</span>
        </div>
        <div>
          <nav className="inline-flex space-x-2">
            <button className="bg-cyan-500 text-white px-3 py-1 rounded-md">1</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">2</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">3</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">4</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">5</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">6</button>
            <button className="bg-white border border-gray-300 text-gray-500 px-3 py-1 rounded-md">7</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
