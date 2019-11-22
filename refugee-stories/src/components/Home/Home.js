import React from 'react';
import '../../index.css';
import Image from '../../images/immigrants_make_america.jpg'
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
    return ( 
      <Wrapper>
        <div className='home-page'>
          <section>
              <h2>Voices of Refugees</h2>
              <img
                  className='main-img'
                  src={Image}
                  alt='rally' />
          </section>
        </div>
      </Wrapper>
     );
}
 
export default Home;
