import { createTheme } from '@mui/material/styles';

export const optionsTipoDeEvento = () => {
    const tipoDeEvento = [
        { title: 'Universitario'},
        { title: 'Carrera'},
        { title: 'Curso'},
        { title: 'Estudiantil'},
      ];

      return tipoDeEvento;
}

export const optionsOrganizador = () => {
      const organizador = [
        { title: 'UCR'},
        { title: 'Curso' },
        { title: 'Grupo'},
      ];  

      return organizador;
}

export const optionsFrecuencia = () => {
      const frecuencia = [
        { title: 'Mensual' },
        { title: 'Semanal' },
        { title: 'Diario' },
      ];    

    return frecuencia;
}

export function style() {
    return createTheme({
        components: {
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        backgroundColor: 'rgba(239, 237, 250, 1)',
                        '& fieldset': {
                        border: 'none',
                        },
                        '&:hover fieldset': {
                        border: 'none',
                        color: 'rgb(255 255 255)',
                        },
                        '&.Mui-focused fieldset': {
                        border: 'none',
                        },
                        },
                    },
                },
            },
        },
    });
}