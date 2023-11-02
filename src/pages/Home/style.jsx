import styled from 'styled-components';
import BaseFlexDiv from '../../shared/Base/BaseFlexDiv';

export const HomePage = styled(BaseFlexDiv)`
    flex-direction: column;
    background-color: ${ props => props.cartVisible ? '#5B5F5D' : '#ffffffc5'};

`

export const Main = styled(HomePage)`
    ${props => props.cartVisible && 'filter: blur(5px) brightness(20%); ' };
    
`



