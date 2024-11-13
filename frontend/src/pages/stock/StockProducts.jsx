import React from 'react'
import TableComp2 from '../../UI/TableComp2'
import { motion } from 'framer-motion'
import { useGetAllStocksQuery } from '../../store/patient2'

const StockProducts = () => {

  const { data = [], isLoading } = useGetAllStocksQuery()
  console.log(data)
  
    const thead = [
        { name: 'Ürün Adı', sortable: true},
        { name: 'Stok', sortable: true},
        { name: 'S.K.T', sortable: true},
        { name: 'Ürün Grubu', sortable: true },
        { name: 'Depo', sortable: true},
        // { name: '', width: 50 }, 
      ];


      const tbody = [
        {
          productName: 'Adrenalin 0,5 mg (osel) amp',
          stock: '163 Ampul',
          expiryDate: '30.01.2028',
          productGroup: 'Adrenalin Ritim Düzenleyici',
          actions: (
            <button key="details-1" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Akineton 5mg 5 amp',
          stock: '7 Ampul',
          expiryDate: '30.03.2025',
          productGroup: 'Sinir Sistemi Parkinson',
          actions: (
            <button key="details-2" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Arcolit 20 mg Flakon',
          stock: '92 Ampul',
          expiryDate: '31.12.2024',
          productGroup: 'İltihab Giderici',
          actions: (
            <button key="details-3" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Artimol %2 Ampul',
          stock: '111 Ampul',
          expiryDate: '30.12.2024',
          productGroup: 'Lokal Anestezik',
          actions: (
            <button key="details-4" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Arnica 75gr Krem',
          stock: '61 Adet',
          expiryDate: '01.06.2025',
          productGroup: 'Krem Morluk Tedavisi',
          actions: (
            <button key="details-5" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bheptal Ampul',
          stock: '124 Ampul',
          expiryDate: '30.08.2026',
          productGroup: 'B Vitamini',
          actions: (
            <button key="details-6" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bephantenhe Ampul',
          stock: '17 Ampul',
          expiryDate: '31.03.2028',
          productGroup: 'Bağışıklık Kazandıran',
          actions: (
            <button key="details-7" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bepanthol Cilt Bakım Kremi 30gr',
          stock: '38 Adet',
          expiryDate: '30.03.2025',
          productGroup: 'Bakım Kremi',
          actions: (
            <button key="details-8" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bioflex %0.9 İzotonik 500 Sod. Klor 250ml',
          stock: '107 Adet',
          expiryDate: '30.03.2026',
          productGroup: 'Serum İzotonik',
          actions: (
            <button key="details-9" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bioflex %0.9 İzotonik 500 Sod. Klor Sol. 1000ml',
          stock: '53 Adet',
          expiryDate: '31.03.2026',
          productGroup: 'Serum İzotonik',
          actions: (
            <button key="details-10" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Bioflex %0.9 İzotonik 500 Sodyum Klorur Sol. 500ml',
          stock: '53 Adet',
          expiryDate: '01.02.2026',
          productGroup: 'Serum İzotonik',
          actions: (
            <button key="details-11" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
        {
          productName: 'Burun Damlası (Nasal Drops) 20ml',
          stock: '335 Adet',
          expiryDate: '30.01.2026',
          productGroup: 'Burun Nemlendirici',
          actions: (
            <button key="details-12" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
              &gt;
            </button>
          )
        },
      ];
      
  return (
    <motion.div 
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-[95%] h-[99%]">
        <TableComp2
            thead={thead}
            tbody={data.map(row => [
            row.stock_name || '',
            row.stock_haved || '',
            row.stock_skt || '',
            row.stcok_group || '',
            row.stock_wharehouse || '',
            // <button key="details-12" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
            //   &gt;
            // </button>
            ])}
            searchable={true}
            tableTitle= {"ÜRÜNLER"}  
            billing={false}
        />
    </motion.div>
  )
}

export default StockProducts