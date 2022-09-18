import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import styled from "styled-components";

export const BoxContainer = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;

`;
export const FormContainer= styled.form`
width: 100%;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 2.5px rgba(15, 15, 0.19);
`;

export const Mutedlink = styled.a`
 font-size: 11px;
 color : rgba(200, 200, 200, 200, 0.8);
 font-weight: 500;
 text-decoration: none;
 `; 


 export  const Boldlink = styled.a`
 font-size: 12px;
 color :rgb(241, 196, 15);
 font-weight: 500;
 text-decoration: none;
 `;

 export const Input = styled.input`
   height: 42px;
   width: 100%;
   outline: none;
   border 1px solid rgba (200, 200, 200, 0.0.3);
   padding: 0px 10px;
   border-bottom: 1.4px solid transparent;
   transition: all 200ms ease-in-out;
   font-size: 12px;
   
   &::placeholder{
    color: rgba(200, 200, 200, 1);
   }

   &: not (:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);

   }

   &: focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
   }
 `;


 export const SubmitButton = styled.button`
 width: 100%
 padding: 11px 40%;
 color: #fff;
 font-size: 15px;
 font-weight: 600;
 border: none;
 border-radius: 100px 100px 100px 100px;
 cursor: pointer ;
 transition: allowedStatusCodes, 240ms ease-in-out;
 background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 46%, rgba(252,178,69,1) 100%);

 &:hover {
    filter: brightness(1.03);

 }


 `;
