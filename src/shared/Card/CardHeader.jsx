import styled from 'styled-components';
import  BaseParagraph  from '../Base/BaseParagraph';


const CardHeader = styled.div`
     @media screen and(max-width: 650px){
        ${BaseParagraph}{
            font-size: 12px;
        }
     }
`

export default CardHeader;