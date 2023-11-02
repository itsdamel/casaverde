import styled from 'styled-components';
import Card from '../../../shared/Card/Card';
import BaseCursive from '../../../shared/Base/BaseCursive';
import CardInformation from '../../../shared/Card/Card';
import BaseFlexDiv from '../../../shared/Base/BaseFlexDiv';

export const FlexDivWrapper = styled(BaseFlexDiv)`
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 650px){
        gap: 10px;
    }
`

export const HowCard = styled(Card)`
    ${BaseCursive}{
        font-size: 42px;
    }
    ${CardInformation}{
        @media screen and (max-width: 650px){
        width: 100%;
        align-items: center;
        justify-content: space-around;
        height: 60%;
        
    }
    }
    @media screen and (max-width: 900px){
        width: 80vw;
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
        ${BaseCursive}{
            font-size: 30px;
        }
    }
`