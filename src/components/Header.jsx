import React from 'react'
import Logo from '../assets/img/logo.png'
import Bg_img from '../assets/img/bacround_img.png'
const Header = () => {
  return (
      <div>
          <header className='header mb-70'>
              <div className="bacround_imgs absolute top-0 left-0 w-full h-full -z-10">
                  <img src={Bg_img} alt="" />
              </div>
              <div className='container max-w-[1180px] w-full mx-auto px-4'>
                  <div className='haeder_wrap flex justify-between items-center py-4 position-relative'>
                      <div className="logo">
                          <img src={Logo} alt="logo" />
                      </div>
                      <nav className='nav flex items-center gap-[45px]'>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Главная</a>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Про гида </a>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Программа тура</a>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Стоимость</a>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Блог</a>
                          <a href="#" className='text-white font-medium text-lg hover:underline'>Контакты</a>
                          <button className='w-[129px] p-3 bg-[#1A3E3E] cursor-pointer'><span className='text-white text-[16px]  tracking-[0.012em]'>Консультация</span></button>
                      </nav>
                 </div>
              </div>
          </header>
          <section className='title'>
              <div className="container max-w-[1180px] w-full mx-auto px-4">
                  <h1 className=' font-bold text-[50px] leading-[150%] tracking-[0.02em] text-white'>Насладись прогулкой в горах с командой единомышленников</h1>
                  <div className='panel_wrap w-full mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-4'>
                      <div className="left_side flex-1">
                          <select className='w-full p-4 rounded-lg bg-white/20 text-white cursor-pointer py-3 px-3'>
                              <option value="default" className='bg-white text-[#1E1E1E]'>Выбери программу тура</option>
                              <option value="program1" className='bg-white text-[#1E1E1E]'>Программа 1</option>
                              <option value="program2" className='bg-white text-[#1E1E1E]'>Программа 2</option>
                              <option value="program3" className='bg-white text-[#1E1E1E]'>Программа 3</option>
                          </select>
                          <small className='text-white font-semibold text- mb-2'>Локация для тура</small>
                      </div>
                      <div class="mb-6">
                          <label for="date" class="block text-white mb-1 font-semibold">Sayohat Sanasi</label>
                       <input type="date" id="date" class="w-full bg-white/20 text-white cursor-pointer py-3 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <small className="text-white font-semibold text- mb-2">Diapazonni ko'rsating</small>
                      </div>
                       <div class="mb-6">
                       <label for="participants" class="block text-white mb-1 font-semibold">Ishtirokchilar</label>
                       <input type="number" id="participants" min="4" placeholder="Minimum 4" class="w-full bg-white/20 text-white py-3 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                       <small class="text-gray-300">Kamida 4 kishi</small>
                       </div>
                      
                       <button class="bg-white text-[#1E1E1E] cursor-pointer font-semibold rounded-xl py-3 px-6 hover:bg-gray-100 transition">
                        Найти программу
                      </button>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Header