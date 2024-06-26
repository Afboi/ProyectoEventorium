import { createTheme } from '@mui/material/styles';
import { useFetchAllUserCourses } from '../hooks/useFetchUserCourses';
import { useFetchCategories } from '../hooks/useFetchCategories';

//Utility in charge of storing the data shown in the search filters, as well as the visual style of these filters.

//Event type filter data
export const optionsTipoDeEvento = () => {

    const { data } = useFetchCategories();

    const tipoDeEvento = data.map(item => ({ title: item.name }));

    const a = [
        { title: 'Evento' },
        { title: 'Tarea' },
        { title: 'Comunicado' },
    ];

    return tipoDeEvento;
}

//Organizer filter data
export const optionsOrganizador = (id) => {

    const { data } = useFetchAllUserCourses(id);

    const curso = data.map(item => ({ title: item.initial }));

    const a = [
        { title: 'UCR' },
        { title: 'Curso' },
        { title: 'Grupo' },
    ];

    return curso;
}

//Frequency filter data
export const optionsFrecuencia = () => {
    const frecuencia = [
        { title: 'Mensual' },
        { title: 'Semanal' },
        { title: 'Diario' },
    ];

    return frecuencia;
}

//Visual style of the search filters
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