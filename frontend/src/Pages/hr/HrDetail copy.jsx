import { ExternalLink, FolderGit2, Printer } from 'lucide-react';
import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const HrDetailC = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full h-full bg-white rounded-3xl border border-gray-200 drop-shadow-md' >
        <div className='flex items-center mx-5 px-2 py-8 border-b border-gray-300'>
          <button
            onClick={()=> navigate("/human-resources/KPI-quests")}
          >
            <IoIosArrowRoundBack size={35}  />
          </button>
          <p className='text-xl font-semibold ml-5 text-cyan-600'>VEZNE HASTA KARŞILAMA</p>
          <button 
              className="p-2 rounded-full ml-auto bg-transparent text-gray-400 hover:text-gray-500">
              <FolderGit2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-transparent text-gray-400 hover:text-gray-500">
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-transparent text-gray-400 hover:text-gray-500">
              <Printer className="w-4 h-4" />
            </button>
        </div>
        <div className='flex'>
            <div className='py-3 px-10 w-[50%] h-[620px] flex flex-col gap-y-6 overflow-y-auto'>
              <h4 className='text-lg font-semibold text-cyan-600'>GÖREV TANIMI</h4>
                <p>
                    1- Hastanı Radyoloji/Laboratuar Hizmetlerini Gerçekleştirmek.
                </p>
                <p>
                   2- Ameliyat Hastasının pasaport bilgilerini alıp kaydını açmak. Muayene hastasının bilgilerini alıp kaydını açmak ve kayıt farmunu doldurtmak, faturasını teslim etmek. Özel sağlık sigortası ya da SGK dosya kayıtlarını tamamlamak (bunlar, SGK lı hastada medulla bildirimi, Özel sağlık sigortsında ise medware den basılacak olan ağözel sigorta bilgilendirme/ibraname formu, blözel sağlık sigorta websitesinden basılacak olan provizyon ve c)hastanın kimlik fotokopisidir)
                </p>
                <p>
                    3- Gelen aramalara ve hastaların hertürlü sorusuna kimseye danışmadan doyurucu bilg.ilendirme yaparak sonuca ulaşmasını sağlamak.
                </p>
                <p>
                   4- Hastanın hizmeti ile buluşmasını sağlamak bu doktor muayenesi ise doktor ile buluşması, kan tahlili ise kan tahlili olmasını sağlamak, röntgen çekilmesi ise bu, işlem için ise işlemini olmasını sağlamak
                </p>
                <p>
                   5- Hastanın geldiği işlem dışında başka bir işlemi de almasını sağlamak, yollanacak link ile ön ödeme alınması prim sisteminize yansıyacaktır. Karşılama ekibinin başarı kriteri TAŞ Hospital google hesabı- na alacağı yorumdur, gün içerisinde ameliyat edilen hastalar hariç hastaneyi ziyaret eden hastaların kaçından alabildiyse bunun yüzdesi çıkarılır ve başarı kriteri bu olarak belirlenir. Çünkü hasta yorum yapacak kadar iyi bilgilendirildiyse ancak yorum yapacaktır.
                </p>
                <p>
                    6- Ön lobinin temizlik, düzen ve kokusundan ön büro sorumluları sorumludur. Masaların, bilgisayar- ların, çekmecelerin temizliği ve düzenini ön büro sorumlusu yapar, lobinin yerlerini ve camlarını ve çöplerin boşaltılmasını ise temizlik görevlisinden talep eder, eğer temizlik görevlisi yapmadı ise bu yönetici tarafından ön büro sorumlusunun yaptıramaması olarak algılanacaktır, yapmadı diye birşey kabul edilemez, bu olmaz ise olmaz disiplin kuralı ne gerekiyor ise yapılıp oldurulmalıdır.
                </p>
            </div>
            <div className='py-3 px-10 w-[50%]'>
                <h4 className='text-lg font-semibold text-cyan-600 mb-4'>GÜNLÜK AKIŞ</h4>

                <div className='grid grid-cols-[130px_1fr_50px] gap-4 py-2 border-b border-gray-300'>
                  <div className='flex items-center justify-start'>
                    <span className='font-semibold text-gray-700'>SAAT DİLİMİ</span>
                  </div>

                  <div className='flex items-center justify-start'>
                    <p className='font-semibold text-gray-700'>
                      GÖREV ÖZETİ
                    </p>
                  </div>

                  <div className='flex items-center justify-center'>
                    <p className='font-semibold text-gray-700 mr-10'>DETAYLAR</p>
                  </div>
                </div>
                <div className='grid grid-cols-[130px_1fr_100px] gap-4 py-2 mt-5'>
                  <div className='flex items-center justify-start'>
                    <span className=' text-gray-700'>08:00</span>
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-lg font-semibold text-cyan-600 mb-2'>Mesai kaşı ve mıntıka temizliği </p>
                    <p >                        
                        Resepsiyon ve Ön Büro düzenlenir, temizlenir, bir dağınıklık var ise toparlanır. Perkotek e yüz okutulur, işe giriş saati....
                    </p>
                  </div>

                  <div className='flex items-center justify-center'>
                    <p className='font-semibold text-gray-700'><FaChevronDown /></p>
                  </div>
                </div>

                <div className='grid grid-cols-[130px_1fr_100px] h-[306px] overflow-hidden gap-4 py-2'>
                  <div className='flex justify-start'>
                    <span className=' text-gray-700'>08:30</span>
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-lg font-semibold text-cyan-600 mb-2'>Hasta kabul ve kayıt işlemleri </p>
                    <p >                        
                    Gelen her hastanın kaydı açılır, kaydı açılmadan, hastanın dosyası oluşturulmadan ve barkodu basılmadan kişinin lobiden geçmesine müsade edilmez (eğer hasta bildiğiniz birinin yakını ise ona sadece izin verilir bu kişi de size vere- ceğiniz refakatçı kartını göstermek zorundadır, yoksa aynen otel lobisinde olduğu gibi kayıtsız kimsenin lobiden arkaya geçmesi istenmez.)
                    <br />
                    Kayıt medware den açılır, nasıl açıldığı powerpoint sunumun- da yer almaktadır. Medware in demo versiyonunu şu linkten lütfen bilgisayarınıza indiriniz, bu şekilde power Point sunu- mundan izledikten sonra kendi kendinize medware programın- da kendi adınıza kayıtlar açarak pratik yapınız. Bu tarz pratikler yapmanız işe giriş evraklarınızı teslim edeceğiniz zaman yapılacak olan sınavda başarılı olmanızı sağlayacaktır, sınavda başarısız olan arkadaşların iş ciddiyetine verdikleri önem düşük bulunacağı için aramıza katılmalarına olanak sağlana- mayacaktır.
                    </p>
                  </div>

                  <div className='flex justify-center'>
                    <p className='font-semibold text-gray-700'><FaChevronDown /></p>
                  </div>
                </div>
                

              
            </div>
        </div>
    </div>
  )
}

export default HrDetailC