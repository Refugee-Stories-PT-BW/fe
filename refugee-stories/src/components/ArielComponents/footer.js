import React from "react";
import { Segment, Breadcrumb, Container } from "semantic-ui-react";
import styled from "styled-components";

const FooterStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  font-size: 0.7rem;
`;


export default function footer() {
  return (
      <Segment raised style={{marginTop:'5%',background:'#1B2538'}} >
        <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', fontSize:'0.7rem', color:'white'}}>Refugee Stories by</p>
        <Breadcrumb style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'150px', fontSize:'1rem'}} >
          <Breadcrumb.Section link>Vlad Burlutskiy</Breadcrumb.Section>
          <Breadcrumb.Divider style={{color:'white'}}/>
          <Breadcrumb.Section link>Lindsey Cason</Breadcrumb.Section>
          <Breadcrumb.Divider style={{color:'white'}} />
          <Breadcrumb.Section link>Ariel Rodriguez</Breadcrumb.Section>
          <Breadcrumb.Divider style={{color:'white'}} />
          <Breadcrumb.Section link>Chase Wallace</Breadcrumb.Section>
        </Breadcrumb>
      </Segment>
  );
}