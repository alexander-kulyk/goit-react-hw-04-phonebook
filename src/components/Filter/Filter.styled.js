

import styled from 'styled-components';

export const FilterTitle = styled.h3`
    color: ${p=>p.theme.colors.grayText};
    font-family:${p=>p.theme.fonts.arial};
    font-size: ${p=>p.theme.fontSizes[1]}px;

  
`

export const FilterIntput = styled.input`
    border: ${p=>p.theme.borders.border};
    border-radius: ${p=>p.theme.space[1]}px;

    height:20px;
`