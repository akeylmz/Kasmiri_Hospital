import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./HrHierarchy.css"
import { GiHamburgerMenu } from "react-icons/gi";


// Mock API call to simulate fetching data from a database
const fetchEmployeeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'YÖNETİCİ',
          people: [
            { name: 'Selim GÜRSES', image: 'https://via.placeholder.com/40' },
            { name: 'Cemre YALÇINSOY', image: 'https://via.placeholder.com/40' },
          ],
          active: true,
        },
        {
          title: 'MUHASEBE',
          people: [
            { name: 'Seçkin SEYMEN', image: 'https://via.placeholder.com/40' },
            { name: 'Ahmet KAPAKÇI', image: 'https://via.placeholder.com/40' },
            { name: 'Yalçın SELİMOĞLU', image: 'https://via.placeholder.com/40' },
          ],
          extra: 5,
        },
        {
          title: 'PAZARLAMA',
          people: [
            { name: 'Nazan SATIŞOĞLU', image: 'https://via.placeholder.com/40' },
            { name: 'Alper ÜNLÜ', image: 'https://via.placeholder.com/40' },
          ],
        },
        {
          title: 'SATIŞ',
          people: [
            { name: 'Aylin GÜMÜŞÇÜ', image: 'https://via.placeholder.com/40' },
            { name: 'Selin TAŞ', image: 'https://via.placeholder.com/40' },
            { name: 'Buğra YAĞUŞ', image: 'https://via.placeholder.com/40' },
          ],
        },
        {
          title: 'VEZNE',
          people: [{ name: 'Tuğçe DAMLALI', image: 'https://via.placeholder.com/40' }],
        },
      ]);
    }, 1000);
  });
};

const HrHierarchy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the employee data
    fetchEmployeeData().then((data) => setData(data));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container"
    >    		
    <div class="level-1 rectangle bg-slate-50 rounded-lg shadow-lg max-w-72 mx-auto border-2 border-cyan-600">
      <div class="flex items-center justify-between relative  pb-2">        
          <h2 class="text-white font-bold text-lg py-1 pl-3 pr-6 rounded-br-3xl bg-cyan-600">YÖNETİCİ</h2>          
      </div>
      <div class="flex items-center justify-around my-4 mx-3">
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Selim GÜRSES" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Süleyman TAŞ</p>
          </div>
      </div>
    </div>

  <ol class="level-2-wrapper">
    <li>
      <div class="bg-slate-50 rounded-lg shadow-lg max-w-sm mx-auto border-2 border-cyan-600">
      <div class="flex items-center justify-between relative  pb-2">        
          <h2 class="text-white font-bold text-lg py-1 pl-3 pr-6 rounded-br-3xl bg-cyan-600">MUHASEBE</h2>
          <div class="flex items-center gap-2">
              <span class="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center">8</span>
              <button class="bg-cyan-600 flex items-center px-3 mr-5 rounded-l-full rounded-r-full text-white">
                  <span className='flex items-center gap-2  '><GiHamburgerMenu />Listele</span>
              </button>
          </div>
      </div>
      <div class="flex items-center justify-around my-4 mx-3">
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Selim GÜRSES" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Selim GÜRSES</p>
          </div>
          <div class="border-r h-[100px] border-gray-300"></div>
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Cemre YALÇINSOY" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Cemre YALÇINSOY</p>
          </div>          
      </div>
    </div>
      
    </li>
    <li>
    <div class="bg-slate-50 rounded-lg shadow-lg max-w-sm mx-auto border-2 border-cyan-600">
      <div class="flex items-center justify-between relative  pb-2">        
          <h2 class="text-white font-bold text-lg py-1 pl-3 pr-6 rounded-br-3xl bg-cyan-600">PAZARLAMA</h2>
          <div class="flex items-center gap-2">
              <span class="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
              <button class="bg-cyan-600 flex items-center px-3 mr-5 rounded-l-full rounded-r-full text-white">
                  <span className='flex items-center gap-2  '><GiHamburgerMenu />Listele</span>
              </button>
          </div>
      </div>
      <div class="flex items-center justify-around my-4 mx-3">
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Selim GÜRSES" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Selim GÜRSES</p>
          </div>
          <div class="border-r h-[100px] border-gray-300"></div>
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Cemre YALÇINSOY" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Cemre YALÇINSOY</p>
          </div>
      </div>
    </div>
      
    </li>
    <li>
    <div class="bg-slate-50 rounded-lg shadow-lg max-w-sm mx-auto border-2 border-cyan-600">
      <div class="flex items-center justify-between relative  pb-2">        
          <h2 class="text-white font-bold text-lg py-1 pl-3 pr-6 rounded-br-3xl bg-cyan-600">YÖNETİCİ</h2>
          <div class="flex items-center gap-2">
              <span class="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
              <button class="bg-cyan-600 flex items-center px-3 mr-5 rounded-l-full rounded-r-full text-white">
                  <span className='flex items-center gap-2  '><GiHamburgerMenu />Listele</span>
              </button>
          </div>
      </div>
      <div class="flex items-center justify-around my-4 mx-3">
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Selim GÜRSES" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Selim GÜRSES</p>
          </div>
          <div class="border-r h-[100px] border-gray-300"></div>
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Cemre YALÇINSOY" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Cemre YALÇINSOY</p>
          </div>
      </div>
    </div>
      
    </li>
    <li>
    <div class="bg-slate-50 rounded-lg shadow-lg max-w-sm mx-auto border-2 border-cyan-600">
      <div class="flex items-center justify-between relative  pb-2">        
          <h2 class="text-white font-bold text-lg py-1 pl-3 pr-6 rounded-br-3xl bg-cyan-600">VEZNE</h2>
          <div class="flex items-center gap-2">
              <span class="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
              <button class="bg-cyan-600 flex items-center px-3 mr-5 rounded-l-full rounded-r-full text-white">
                  <span className='flex items-center gap-2  '><GiHamburgerMenu />Listele</span>
              </button>
          </div>
      </div>
      <div class="flex items-center justify-around my-4 mx-3">
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Selim GÜRSES" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Selim GÜRSES</p>
          </div>
          <div class="border-r h-[100px] border-gray-300"></div>
          <div class="text-center">
              <img src="https://via.placeholder.com/80" alt="Cemre YALÇINSOY" class="rounded-full w-20 h-20 mx-auto"/>
              <p class="mt-2 text-sm font-medium">Cemre YALÇINSOY</p>
          </div>
      </div>
    </div>
      
    </li>
  </ol>








    
    </motion.div>
  );
};

export default HrHierarchy;
