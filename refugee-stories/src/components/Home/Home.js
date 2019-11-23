import React from 'react';
import '../../index.css';
import Image from '../../images/immigrants_make_america.jpg'
import styled from "styled-components";

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
    return ( 
        <div className='home-page'>
              <h2>Voices of Refugees</h2>
              <img
                  className='main-img'
                  src={Image}
                  alt='rally' />
        </div>
     );
}
 
export default Home;
