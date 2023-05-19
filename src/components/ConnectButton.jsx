import { Button, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import dummy from '../assets/dummy.png'

const ConnectButton = () => {

    const [connect, setconnect] = useState(false)

    const [walledAddress, setwalledAddress] = useState('0x3u8UDIh****ejij939do')
    const smallerthen600 = useMediaQuery('(max-width:600px)')


    useEffect(() => {

        const firstNine = walledAddress.slice(0, smallerthen600 ? 4 : 9); 
        const lastNine = walledAddress.slice(smallerthen600 ? -4 : -9);

        const result = firstNine + "****" + lastNine;
        setwalledAddress(result)

    }, [])


    return (
        <>
            {!connect ? (
                <Button
                    disableRipple
                    sx={{
                        color: 'white',
                        border: '1px solid #3E3E3E',
                        textTransform: 'none',
                        borderRadius: '6px',
                        fontSize: { xs: '12px', sm: '16px' },
                        padding: {xs:'10px 12px',sm:'9px 18px'},
                        transition: 'all 0.5s ease-in-out',
                        ':hover': {
                            backgroundColor: '#BD0505',
                        }
                    }}
                    onClick={() => setconnect(true)}
                >
                    Connect Wallet
                </Button>
            ) : (
                <div className='flex gap-[20px] items-center'>
                    <p
                        className='text-[16px] text-[#BD0505] font-medium cursor-pointer hidden md:block'
                        onClick={() => setconnect(false)}
                    >
                        Disconnect
                    </p>
                    <Button
                        disableRipple
                        sx={{
                            color: 'white',
                            border: '1px solid #3E3E3E',
                            textTransform: 'none',
                            borderRadius: '6px',
                            padding: {xs:'8px 11px',sm:'5px 11px'},
                        }}
                        onClick={() => setconnect(false)}
                    >
                        <img
                            src={dummy}
                            className='h-[25px] sm:h-[36px] w-[25px] sm:w-[36px] rounded-full'
                        />
                        <h1 className='text-white text-[12px] sm:text-[16px] font-medium pl-[13px]'>
                            {walledAddress}
                        </h1>
                    </Button>
                </div>
            )}

        </>
    )
}

export default ConnectButton