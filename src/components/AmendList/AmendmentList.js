
import React from 'react'

import "../br.css" 
import styled from "styled-components";
import AmendmentHeader from './AmendmentListHeader';

const AmendmentList = () => {

  return (

    <>
  
  <AmendmentHeader />

  <div className='flex flex-start pl-4'>
        <EditProfileRoot>CSC 201 (Computer Amendment List)</EditProfileRoot>
        </div> 

    <div>
    <div className='flex flex-row justify-end '>
   

    <div className='pr-6'>
    <RectangleRoot>
      <FlexRow>
        
        <Text1>Download all</Text1>
      </FlexRow>
    </RectangleRoot>
    </div>
    </div> 
               <div style={{overflowX: "auto"}} className='bg-white mx-6 my-6 '> 
     <table className='Yourdoc' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"10%"}}><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></th>
         <th style={{width:"20%"}}>Date/Time</th>
         <th style={{width:"15%"}}>Name</th>
         <th>Old Score</th>
         <th>New Score</th> 
         <th style={{width:"30%"}}><span className='text-left md:pl-5 lg:pl-9'>Instructor</span></th>
         
     </tr>    

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>
      
     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>
     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>


     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>
     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>24/10/2020</Text3></td>
         <td><Text3>Ayomide Akinyemi</Text3></td>
         <td><Text3>55</Text3></td>
         <td><Text3>75</Text3></td>
         <td> <Text3>Dr. Ayomide Akinyemi</Text3></td> 
     </tr>

 
 
     
     
 </table>

  
 
</div>
  
    </div>

    </>
  )
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};






const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;

  @media ${devices.tablet} { 
    font-size: 17px;
    padding-left: 3px;
  }
 
`;



const RectangleRoot = styled.div`
  border-style: solid;
  border-color: #2d0353;
  width: 163px;
  mix-blend-mode: normal;
  background-color: #f0f0f0;
  padding-right: 20px;
  border-radius: 6px;
  padding: 11.5px ; 
  border-width: 0.5px;

`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
 
`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
 
`;



const EditProfileRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  display:flex;
  justify-content: center; 
  margin-bottom: 10px;
  font-weight: bold;
  padding-top: 20px;
`;


export default AmendmentList