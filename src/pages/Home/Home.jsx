import React, { useState } from 'react'
import ConnectButton from '../../components/ConnectButton'
import backgroundImg from '../../assets/background.png'
import bannerimg from '../../assets/bannerimg.png'
import StyledTextFeild from '../../components/StyledTextFeild'
import { PaidOutlined } from '@mui/icons-material'
import Loader from '../../components/Loader'
import Balance from './Balance'
import img from '../../assets/img.png'
import { motion } from 'framer-motion'


const Home = () => {

  const [amount, setamount] = useState('')
  const [loader, setloader] = useState(false)
  const [selectedDays, setselectedDays] = useState('')

  const days = [
    '7 Days',
    '1 months',
    '4 months',
  ]

  return (
    <div className='bg-[#0A0A0A] min-h-screen overflow-hidden relative'>
      {loader && <Loader />}

      <div className=''>

        <div className='hidden md:flex justify-end pt-[38px] px-[62px]'>
          <ConnectButton />
        </div>

        {/* background Image */}
        <div className='absolute right-0 bottom-0'>
          <div className='relative'>
            <div className='absolute top-0 right-0 bottom-0 left-[0px] bg-gradient-to-r from-[#0A0A0A]' />
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[#0A0A0A]' />
            <div className='absolute top-[-80px] right-[-70px] bottom-0 left-0 bg-gradient-to-tr from-[#0A0A0A]' />
            <div className='mr-[-400px] mb-[-20%]'>
              <img src={backgroundImg} alt="" className='h-[700px]' />
            </div>
          </div>
        </div>

        <motion.div
          whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          initial='hidden'
          style={{ opacity: 0 }}
        >

          <div className='pt-[120px] pb-[40px] px-[27px] md:px-[20px] max-w-[1040px] mx-auto md:pb-[30px] md:py-[45px] '>

            {/* banner  */}
            <div className='min-h-[260px relative'>
              <div className='absolute inset-[-1px] rounded-[29px] opacity-70'
                style={{
                  background: 'linear-gradient(to right, #212121, #363636)'
                }}
              />
              <div className='min-h-[260px] relative  rounded-[29px] bg-black overflow-hidden'
              >

                <div className='absolute top-0 right-[0px] bottom-0 left-[30%] md:left-[48%]'>
                  <div
                    className='absolute top-0 right-0 bottom-0 left-0 bg-black hidden md:block opacity-20'
                  />
                  <div
                    className='absolute top-0 right-0 bottom-0 left-[-10px] md:left-[-30px] bg-gradient-to-r from-black '
                  />
                  <img
                    src={bannerimg}
                    alt='img'
                    className=' h-full w-full object-cover'
                  />
                </div>

                <div className='pt-[20px] px-[31px] lg:pt-[31px] lg:px-[41px] relative z-10'>
                  <h1 className='text-white font-bold text-[25px] sm:text-[30px] md:text-[35px]'>
                    Stake your $BOND to earn $007
                  </h1>
                  <p className='text-white text-[15px] sm:text-[16px]'>
                    Connect your wallet and earn up to 500% APY.
                  </p>
                  <div className='mt-[25px]'>
                    {selectedDays && (
                      <div className='flex flex-col'>
                        <StyledTextFeild
                          value={amount}
                          onChange={setamount}
                          placeholder={'Enter the amount'}
                          icon={<PaidOutlined sx={{ fontSize: '20px' }} />}
                        />
                        <div className='max-w-[320px] flex justify-end pb-[30px] sm:pb-0'>
                          <button
                            className='text-white text-[14px] mt-[25px] sm:text-[15px] rounded-[6px] px-[35px] py-[8px] bg-[#BD0505]'
                            style={{
                              boxShadow: '0px 3px 44px #BD0505E2'
                            }}
                            onClick={() => setloader(true)}
                          >
                            Stake Now
                          </button>

                        </div>
                      </div>
                    )}
                    {!selectedDays && (
                      <div className='my-[20px] flex gap-2 md:gap-3 flex-wrap'>
                        {days.map((item, i) => (
                          <button
                            key={i}
                            className='text-white border bg-black border-gray-500 text-[14px] md:text-[16px] h-[42px] md:h-[47px] w-[130px] md:w-[150px] rounded-[6px] hover:bg-[#BD0505] hover:border-[#BD0505] duration-700'
                            onClick={() => setselectedDays(item)}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* balance  */}
            <Balance />

            {/* earned  */}
            <div className='flex flex-col md:flex-row gap-5 md:gap-3'>
              <div className='min-h-[151px] overflow-hidden flex-[1] rounded-[20px] relative border border-[#363636] bg-black'
              >
                <div className='absolute top-0 right-[2px] bottom-0 left-[30%]'>
                  <div
                    className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black opacity-90'
                  />
                  <div
                    className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50'
                  />
                  <img
                    src={img}
                    alt='img'
                    className=' h-full w-full object-cover rounded-tr-[20px] rounded-br-[20px]'
                  />
                </div>
                <div className='py-[25px] px-[26px]  md:px-[41px] relative z-10'>
                  <h1 className='text-white font-bold text-[22px] md:text-[25px]'>
                    Have no $BOND? Buy it on Uniswap
                  </h1>
                  <button
                    className='text-white text-[14px] md:text-[16px] font-normal mt-[10px] w-[130px] md:w-[150px] h-[47px] rounded-[6px] duration-700 bg-[#BD0505]'
                    style={{
                      boxShadow: '0px 3px 44px #BD0505E2',
                      fontStretch: 'medium',
                      fontStyle: 'normal'
                    }}
                  >
                    Buy Now
                  </button>
                </div>

              </div>
              <div className='md:flex-[0.4] min-h-[151px] border border-[#B9B9B9] bg-[#BD0505] rounded-xl px-[25px] py-[26px] relative'>
                <h6 className='text-white text-[20px] font-normal'
                  style={{
                    fontStretch: 'normal',
                    fontStyle: 'normal'
                  }}
                >
                  Total $00 earned
                </h6>
                <div className='absolute bottom-[24px] right-[25px]'>
                  <h1 className='text-white font-bold text-[26px]'>
                    0
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div >
    </div >
  )
}

export default Home