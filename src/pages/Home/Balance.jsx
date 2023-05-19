import React from 'react'

const Balance = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4 my-[28px]'>
            <div className='h-[151px] border bg-[#0A0A0A] border-[#363636] rounded-[17px] hover:bg-[#BD0505]  duration-700 px-[26px] py-[25px] relative'>
                <h6 className='text-white text-[20px]'>
                    Time period
                </h6>
                <div className='absolute bottom-[24px] right-[25px]'>
                    <h1 className='text-white font-bold text-[27px]'>
                        0 months
                    </h1>
                </div>
            </div>
            <div className='h-[151px] bg-[#0A0A0A] border border-[#363636] rounded-[17px] hover:bg-[#BD0505]  duration-700 px-[26px] py-[25px] relative'>
                <h6 className='text-white text-[20px]'>
                    Earning
                </h6>
                <div className='absolute bottom-[24px] right-[25px]'>
                    <h1 className='text-white font-bold text-[27px]'>
                        0/ day
                    </h1>
                </div>
            </div>
            <div className='h-[151px] bg-[#0A0A0A] border border-[#363636] rounded-[17px] hover:bg-[#BD0505]  duration-700 px-[26px] py-[25px] relative'>
                <h6 className='text-white text-[20px]'>
                    Total $BOND staked
                </h6>
                <div className='absolute bottom-[24px] right-[25px]'>
                    <h1 className='text-white font-bold text-[27px]'>
                        0
                    </h1>
                </div>
            </div>
            <div className='h-[151px] bg-[#0A0A0A] border border-[#363636] rounded-[17px] hover:bg-[#BD0505]  duration-700 px-[26px] py-[25px] relative'>
                <h6 className='text-white text-[20px]'>
                    Total Balance
                </h6>
                <div className='absolute bottom-[24px] right-[25px]'>
                    <h1 className='text-white font-bold text-[27px]'>
                        0
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Balance