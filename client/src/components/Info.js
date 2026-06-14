import React, { useState } from 'react';
import {
  Box, Typography, Collapse, Divider, Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';

const Section = ({ icon, label, content, color = 'var(--green-mid)', defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box
      sx={{
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--gray-100)',
        bgcolor: '#fff',
        overflow: 'hidden',
        mb: 1.5,
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: 'var(--shadow-md)' },
      }}
    >
      {/* Header accordion */}
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
          cursor: 'pointer',
          userSelect: 'none',
          bgcolor: open ? 'var(--green-pale)' : '#fff',
          transition: 'background 0.2s',
          '&:hover': { bgcolor: 'var(--green-pale)' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ color, display: 'flex' }}>{icon}</Box>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              color: 'var(--green-deep)',
            }}
          >
            {label}
          </Typography>
        </Box>
        <ExpandMoreIcon
          sx={{
            color: 'var(--gray-500)',
            fontSize: 20,
            transition: 'transform 0.25s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Box>

      <Collapse in={open}>
        <Divider sx={{ borderColor: 'var(--green-pale)' }} />
        <Box sx={{ px: 2.5, py: 2 }}>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: 'var(--gray-700)',
              lineHeight: 1.75,
            }}
          >
            {content}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

function Info({ data }) {
  const { description, agent, symptom } = data.info;
  const confidence = parseFloat(data.confidence);

  const confidenceColor =
    confidence >= 80 ? '#22c55e' :
    confidence >= 50 ? '#f59e0b' : '#ef4444';

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 380 },
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'auto',
        p: 2.5,
      }}
    >
      {/* Result card */}
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 'var(--radius-md)',
          p: 2.5,
          mb: 2.5,
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--green-pale)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.68rem',
            fontWeight: 600,
            color: 'var(--gray-500)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb: 0.5,
          }}
        >
          Hasil Deteksi
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: 'var(--green-deep)',
            lineHeight: 1.3,
            mb: 1.5,
          }}
        >
          {data.name}
        </Typography>

        {/* Confidence bar */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography sx={{ fontSize: '0.78rem', color: 'var(--gray-500)', fontFamily: "'Inter', sans-serif" }}>
              Tingkat Keyakinan
            </Typography>
            <Chip
              label={`${data.confidence}%`}
              size="small"
              sx={{
                bgcolor: `${confidenceColor}18`,
                color: confidenceColor,
                fontWeight: 700,
                fontSize: '0.78rem',
                height: 22,
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </Box>
          <Box sx={{ height: 8, bgcolor: 'var(--gray-100)', borderRadius: 99, overflow: 'hidden' }}>
            <Box
              sx={{
                height: '100%',
                width: `${confidence}%`,
                bgcolor: confidenceColor,
                borderRadius: 99,
                transition: 'width 1s ease',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Accordion sections */}
      {description && (
        <Section
          icon={<InfoOutlinedIcon sx={{ fontSize: 18 }} />}
          label="Deskripsi"
          content={description}
          defaultOpen={true}
        />
      )}
      {agent && (
        <Section
          icon={<BugReportOutlinedIcon sx={{ fontSize: 18 }} />}
          label="Penyebab"
          content={agent}
          color="#f59e0b"
          defaultOpen={false}
        />
      )}
      {symptom && (
        <Section
          icon={<HealingOutlinedIcon sx={{ fontSize: 18 }} />}
          label="Gejala"
          content={symptom}
          color="#ef4444"
          defaultOpen={false}
        />
      )}
    </Box>
  );
}

export default Info;