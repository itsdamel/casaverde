import styled from 'styled-components';
import BaseFlexDiv from "../Base/BaseFlexDiv";


const CardImg = styled(BaseFlexDiv)`
    background: url(${props => props.backgroundpath}) no-repeat center bottom;
    background-size: cover;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 650px){
        width: 100%;
        height: 50%;
    }

`
export default CardImg;