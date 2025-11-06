import React from 'react'
import Card1 from '../assets/img/card1.png'
import Card2 from '../assets/img/card2.png'
import Card3 from '../assets/img/card3.png'
import Card4 from '../assets/img/card4.png'

const Img_cord = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div className="pt-6 pb-6">
            <p className="text-sm text-teal-700 font-semibold uppercase">наше предложение</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Лучшие программы для тебя
            </h3>

            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-md bg-emerald-100 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="50" height="50" rx="4" fill="#E5EEEB"/>
                      <g clipPath="url(#clip0_1_35)">
                        <path d="M19.0345 31.9276H22.678V32.23H19.0345V31.9276ZM35.0395 31.9276H43.0001V32.23H35.0395V31.9276ZM34.8446 20.8785C35.1761 21.3344 35.4439 21.7347 35.6571 22.0913C35.726 20.9452 35.9244 20.2457 36.1207 19.8438V23.0015C36.223 23.2605 36.2964 23.5328 36.3004 23.8194C36.3007 24.0228 36.2609 24.2095 36.1814 24.3774C36.164 24.415 36.1427 24.4512 36.1207 24.4869V30.3885C36.1207 30.6191 36.2123 30.8402 36.3753 31.0033C36.5384 31.1663 36.7595 31.2579 36.9901 31.2579C37.2206 31.2579 37.4418 31.1663 37.6048 31.0033C37.7678 30.8402 37.8594 30.6191 37.8594 30.3885V24.0418H38.1852V30.3885C38.1852 30.6191 38.2768 30.8402 38.4398 31.0032C38.6028 31.1662 38.8239 31.2578 39.0545 31.2578C39.285 31.2578 39.5061 31.1662 39.6691 31.0032C39.8321 30.8402 39.9237 30.6191 39.9237 30.3885V23.2883C37.9405 21.1585 36.5848 18.808 36.2571 18.2165C36.1947 18.2373 36.1291 18.2637 36.0609 18.2981C35.6828 18.4855 35.2751 18.8956 34.9898 19.6226C34.8698 19.9257 34.7665 20.2862 34.6864 20.7172C34.7465 20.7632 34.7997 20.8175 34.8446 20.8785ZM34.5091 23.3365L34.5105 23.3966L34.5426 23.4034C34.5316 23.381 34.5204 23.3587 34.5091 23.3365Z" fill="#45766A"/>
                        <path d="M37.4385 19.6932C38.046 20.6196 38.8962 21.7997 39.9236 22.9309V19.8455C39.9653 19.9309 40.0073 20.029 40.0488 20.1435C40.2469 20.6928 40.4136 21.5941 40.413 23.0005C40.413 23.3882 40.4006 23.8142 40.3732 24.2818C40.3687 24.3584 40.3799 24.435 40.4061 24.5071C40.4324 24.5792 40.4731 24.6451 40.5257 24.7009C40.5784 24.7567 40.6419 24.8011 40.7123 24.8314C40.7827 24.8617 40.8586 24.8773 40.9353 24.8772C41.0787 24.877 41.2166 24.8221 41.3209 24.7236C41.4252 24.6252 41.4879 24.4906 41.4963 24.3475C41.5231 23.899 41.537 23.4498 41.5379 23.0005C41.5351 20.8787 41.1963 19.7042 40.7339 18.998C40.5031 18.6477 40.2328 18.4227 39.9832 18.298C39.7339 18.1726 39.5148 18.1473 39.3903 18.1478L39.388 18.1479C39.3853 18.1478 39.383 18.147 39.3802 18.147H36.664C36.6608 18.147 36.6576 18.148 36.6545 18.148H36.6539C36.603 18.1482 36.5522 18.1519 36.5018 18.159C36.6579 18.4375 36.9781 18.9915 37.4385 19.6932Z" fill="#45766A"/>
                        <path d="M38.022 17.7463C38.8957 17.7463 39.6039 17.038 39.6039 16.1644C39.6039 15.2907 38.8957 14.5825 38.022 14.5825C37.1484 14.5825 36.4402 15.2907 36.4402 16.1644C36.4402 17.038 37.1484 17.7463 38.022 17.7463Z" fill="#45766A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_35">
                          <rect width="36" height="36" fill="white" transform="translate(7 7)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Опытный гид</h4>
                  <p className="mt-1 text-gray-600 text-sm">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активации.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="50" height="50" rx="4" fill="#E3E6EE"/>
                      <path d="M38.4036 14.0611C38.3342 13.7483 38.2162 13.4484 38.0537 13.1723C38.0537 13.1723 34.151 7 23.9992 7C13.8505 7 9.94482 13.1723 9.94482 13.1723C9.80108 13.3988 9.6438 13.7984 9.59413 14.0611C9.59413 14.0611 8.83934 18.0638 10.0886 23.8012C11.2392 29.0758 14.4194 36.6365 23.0541 42.6997C23.3309 42.8948 23.6613 42.9996 24 42.9996C24.3387 42.9996 24.6691 42.8948 24.9459 42.6997C33.5776 36.6358 36.7593 29.0758 37.9092 23.8012C39.1622 18.0638 38.4036 14.0611 38.4036 14.0611ZM34.5822 23.0758C34.5499 23.227 34.51 23.385 34.4723 23.5401H23.9992V39.1741C17.2625 34.0613 14.579 27.9793 13.5254 23.5401H23.9992V10.4052C31.2274 10.4052 34.446 14.0445 35.0842 14.8738C35.1895 15.6384 35.5176 18.79 34.5822 23.0758Z" fill="#6276AA"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Безопасный поход</h4>
                  <p className="mt-1 text-gray-600 text-sm">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активации.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-md bg-yellow-100 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="50" height="50" rx="4" fill="#F3F1E1"/>
                      <path d="M33.3006 16.4461L26.0547 11.8351V8.05469C26.0547 7.47222 25.5825 7 25 7C24.4175 7 23.9453 7.47222 23.9453 8.05469V11.8351L16.6994 16.4461C16.5497 16.5414 16.4265 16.6729 16.3411 16.8284C16.2557 16.9839 16.2109 17.1585 16.2109 17.3359V41.9453C16.2109 42.5278 16.6832 43 17.2656 43H32.7344C33.3168 43 33.7891 42.5278 33.7891 41.9453V17.3359C33.7891 16.9754 33.6048 16.6398 33.3006 16.4461ZM25 24.2969C23.0615 24.2969 21.4844 22.7198 21.4844 20.7812C21.4844 19.21 22.5205 17.8765 23.9453 17.4275V18.3203C23.9453 18.9028 24.4175 19.375 25 19.375C25.5825 19.375 26.0547 18.9028 26.0547 18.3203V17.4275C27.4795 17.8765 28.5156 19.21 28.5156 20.7812C28.5156 22.7198 26.9385 24.2969 25 24.2969Z" fill="#F2BE22"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Лояльные цены</h4>
                  <p className="mt-1 text-gray-600 text-sm">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активации.</p>
                </div>
              </div>

            </div>

            <div className="mt-6">
              <button className="inline-block px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-md transition">
                Стоимость программ
              </button>
            </div>
          </div>

          {/* RIGHT - images grid */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="rounded-lg overflow-hidden bg-white shadow-sm transform hover:scale-105 transition duration-300">
              <img src={Card1} alt="Sayohat rasmi 1" className="w-full h-48 object-cover" />
            </div>

            <div className="rounded-lg overflow-hidden bg-white shadow-sm transform hover:scale-105 transition duration-300">
              <img src={Card2} alt="Sayohat rasmi 2" className="w-full h-48 object-cover" />
            </div>

            <div className="rounded-lg overflow-hidden bg-white shadow-sm transform hover:scale-105 transition duration-300">
              <img src={Card3} alt="Sayohat rasmi 3" className="w-full h-48 object-cover" />
            </div>

            <div className="rounded-lg overflow-hidden bg-white shadow-sm transform hover:scale-105 transition duration-300">
              <img src={Card4} alt="Sayohat rasmi 4" className="w-full h-48 object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Img_cord
