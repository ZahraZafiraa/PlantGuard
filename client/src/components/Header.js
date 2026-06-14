import React from 'react';
import logo from "../Assets/Images/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Chip
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 15,
        left: '50%',
        transform: 'translateX(-50%)',

        width: '92%',
        maxWidth: '1200px',

        background: 'rgba(27, 67, 50, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',

        borderRadius: '999px',

        border: '1px solid rgba(255,255,255,0.12)',

        boxShadow: '0 10px 30px rgba(0,0,0,0.18)',

        overflow: 'hidden',
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 4 },
          py: 1,
          minHeight: '72px !important'
        }}
      >

        {/* Logo + Nama */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5
          }}
        >
          <Avatar
            src={logo}
            sx={{
              width: 42,
              height: 42,
              border: '2px solid rgba(255,255,255,0.2)',
              bgcolor: 'rgba(255,255,255,0.1)'
            }}
          >
            <LocalFloristIcon />
          </Avatar>

          <Box>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.2
              }}
            >
              PlantGuard
            </Typography>

            <Typography
              sx={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Deteksi Penyakit Tanaman
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Badge */}
        <Chip
          icon={
            <LocalFloristIcon
              sx={{
                color: '#52B788 !important',
                fontSize: '16px !important'
              }}
            />
          }
          label="20 Jenis Tanaman"
          sx={{
            bgcolor: '#52B78826',
            border: '1px solid #52B7884D',
            color: '#D8F3DC',

            fontWeight: 600,

            '& .MuiChip-icon': {
              ml: '6px'
            }
          }}
        />

      </Toolbar>
    </AppBar>
  );
}

export default Header;