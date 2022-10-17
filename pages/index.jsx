import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fshiftdelete.net%2Fwp-content%2Fuploads%2F2021%2F03%2Fdiscord-bot-ekleme-nasil-yapilir-discord-muzik-mesaj-silme-botu-ekleme.jpeg%3Ffit%3D1280%252C720%26ssl%3D1&imgrefurl=https%3A%2F%2Fshiftdelete.net%2Fdiscord-bot-ekleme-nasil-yapilir-discord-muzik-mesaj-silme-botu-ekleme&tbnid=Aq0bdkfeiMbXwM&vet=12ahUKEwiP0fi2yuf6AhXRn_0HHYDFAjMQMygAegUIARC-AQ..i&docid=ZfYbVvA_qrclKM&w=1280&h=720&q=discord%20bot&ved=2ahUKEwiP0fi2yuf6AhXRn_0HHYDFAjMQMygAegUIARC-AQ" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          LakenT Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          LakenT Bot ile Alışılmışın Dışına Çıkıp Yeni Modern Özellikleri Denemeye Ne Dersin?
	</p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1015871726304899122&scope=bot%20applications.commands&permissions=2146958847"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Davet Et
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://bit.ly/3LYzaDe"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Oy Ver</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Astra Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "En Yeni ve En Gelişmiş Özellikler İle Sunucuna Hava Katmaya Ne Dersin :)" }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1015871726304899122&scope=bot%20applications.commands&permissions=2146958847
" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Davet Et
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimize</p>
                  <p className="text-gray-500 line-clamp-4">Slash Komutlarıyla Optimize Edilmiş Komutlarıyla Her Zaman Her Yerde En Hızlı Haliyle!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Ayarlanabilir</p>
                  <p className="text-gray-500 line-clamp-4">Tümü Ayarlanabilir Komutlarıyla LakenT Botu Kullanmaya Doyamayacaksınız! )</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenilir</p>
                  <p className="text-gray-500 line-clamp-4">Hiçbir Kişisel Verinize Erişim Sağlamayan LakenT Bot İle Daha Güvenli Bir Discord Mümkün!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Destek Ekibi</p>
                  <p className="text-gray-500 line-clamp-4">7/24 Aktif Destek Ekibiyle Her Zaman Sorularınızı Sorabilirsiniz ve Önerilerinizi İletebilirsiniz!</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/737348411568685066/983094813115170866/unknown.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Senin İçin En İyisi</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Geleceğe Giden Kapıyı Açmak İçin Haydi Ne Bekliyorsun!</p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1031133758440607804/1031575092838277141/unknown.png" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
