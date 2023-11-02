import styled from 'styled-components';
import Card from '../../../shared/Card/Card';
import BaseCursive from '../../../shared/Base/BaseCursive';
import CardInformation from '../../../shared/Card/CardInformation';
import BaseFlexDiv from '../../../shared/Base/BaseFlexDiv';
import CardHeader from '../../../shared/Card/CardHeader';

export const FlexDivWrapper = styled(BaseFlexDiv)`
    flex-wrap: wrap;
    gap: 20px;
    @media screen and (max-width: 650px){
        gap: 10px;
        
        justify-content: center;
    }
    @media screen and (max-width: 500px){
        justify-content: flex-start;
    }
    
`

export const HowCard = styled(Card)`
 
    ${BaseCursive}{
        font-size: 42px;
    }
    ${CardInformation}{
        @media screen and (max-width: 650px){
        width: 100%;
        padding: 5px;
        align-items: flex-start;
        justify-content: space-around;
        height: 60%;
    }
   
    }
    @media screen and (min-height: 900px){
        height: 40vh;
    }
    @media screen and (max-width: 900px){
        width: 80vw;
    }

    @media screen and (max-width: 650px){
        flex-direction: column;

        ${BaseCursive}{
            font-size: 30px;
        }

        ${CardHeader}{
            width: 100%;
            text-align: center;
        }
    }
`