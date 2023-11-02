import styled from "styled-components";
import BaseFlexDiv from "../../../shared/Base/BaseFlexDiv";

const HeroSection = styled.section`
    align-items: end;
    justify-content: center;
    height: 100vh;
    width: 100%;
    display: flex;

    @media (max-width: 912px ){
        height: 70vh;
        align-items: center;
        gap: 20px;
    }


`
const ContentDiv= styled(BaseFlexDiv)`

    z-index: 1;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 15px;
    max-width: 480px;

    @media(max-width: 420px){
        gap: 5px;
    }
 
`;

const BigPlant = styled.img`
    z-index: 1;
    margin-right: 40px;
    max-width: 50vw;
    max-height: 100vh;

   @media (max-width: 912px){
        display: none;
   }

`
const Oracle = styled.img`
    position: absolute;
    top: -20%;
    right: -15%;
    transform: rotate(20.536deg);

    @media(max-width: 600px){
        right: -15%;
        top: -12%;
        transform: rotate(-20.536deg);
    }
    @media(max-width: 420px){
       top: -16%;
       transform: rotate(-24deg)
    }
   
`;

export{ HeroSection, ContentDiv, BigPlant, Oracle }