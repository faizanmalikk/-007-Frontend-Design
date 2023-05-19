import { Box, CircularProgress } from '@mui/material'

const Loader = () => {

    return (
        <div
            className='flex justify-center items-center h-[100vh] absolute inset-0 z-20'
        >
            <div className='absolute inset-0 bg-slate-500 opacity-25' />
            <CircularProgress size={55} sx={{ color: 'whitesmoke' }} />

        </div>
    )
}

export default Loader