import React from 'react'
import Rasim from '../assets/img/rasim2.png'
const Massive = () => {
  return (
    <div>
          <section className='massive'>
              <div className="container max-w-[1180px] w-full mx-auto px-4 py-20">
                  <div className='flex items-center justify-between'>
                      <div className='w-[550px] mr-10'>
                         <img className="w-[500px] h-[526px]" src={Rasim} alt="rasim" />
                      </div>
                      <div className='flex flex-col items-start w-[450px]'>
                          <p className='text-[#F2BE22] font-normal text-[24px]  tracking-normal w-[50%]'>о нашем походе</p>
                          <h2 className='font-bold text-[36px] leading-[140%] tracking-[0.02em] text-black mt-2 mb-6'>Исследуйте все горные массивы мира вместе с нами</h2>
                          <p className='font-normal text-[18px] leading-[150%] tracking-normal'>
                          Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                          </p> 
                          
                        <button class="bg-[#1E1E1E] text-white cursor-pointer font-semibold rounded-xl py-3 px-6 hover:text-[#1E1E1E] border-2 bg-inherit' transition">
                        Найти программу
                      </button>
                      </div>
                  </div>
        </div>
        </section>
    </div>
  )
}

export default Massive