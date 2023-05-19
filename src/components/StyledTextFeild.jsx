import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const StyledTextFeild = ({ value, onChange, icon, placeholder }) => {

    const handleKeyDown = (e) => {
        if (e.key === '-') {
            e.preventDefault();
        }
    };

    return (
        <TextField
            placeholder={placeholder}
            value={value}
            fullWidth
            onKeyDown={handleKeyDown}
            type={'number'}
            onChange={(e) => onChange(e.target.value)}
            InputProps={{
                disableUnderline: true,
                style: {
                    fontSize: 13,
                },
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                )
            }}
            sx={{

                maxWidth: '320px',
                overflow: 'auto',
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                    display: "none",
                },
                "& input[type=number]": {
                    MozAppearance: "textfield",
                },
                '& .MuiInputBase-root': {
                    padding: '4px 10px',
                    borderRadius: '10px',
                    transition: 'all 0.4s ease-in-out',
                    backgroundColor: '#f2f7fb',
                },
                '& .Mui-focused': {
                    backgroundColor: '#BD0505 !important',
                    color: 'white',

                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                    '& ::placeholder': {
                        color: 'white',
                        opacity: '0.7'
                    }
                },

            }}
            variant="standard"
        />
    )
}

export default StyledTextFeild