import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Hero = () => {
  const heroBcg = "https://i.ibb.co/r03QxZ0/pexels-pixabay-37347.jpg";
  const heroBcg2 = "https://i.ibb.co/f2Drnjj/pexels-terje-sollie-312029.jpg";
  const heroBcg3 = "https://i.ibb.co/bHLQRF9/pexels-houzlook-com-3797991.jpg";

  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
        <img src={heroBcg3} alt="person working" className="accent-img-2" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 1rem 2.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      height:100%;
      width: 100%;
    }

    .accent-img, .accent-img-2,.main-img{
      position: absolute;
      height: 260px;
      width: 260px;
      border-radius: var(--radius);
      object-fit: cover;
    } 
    .main-img {
      top:0;
      left: 25%;
    }
    .accent-img{
      bottom: 10%;
      left: -15%;
    }
    .accent-img-2{
      bottom: 10%;
      right: 0;
    }

    // .img-container::before {
    //   content: "";
    //   position: absolute;
    //   width: 10%;
    //   height: 80%;
    //   background: var(--clr-primary-9);
    //   bottom: 0%;
    //   left: -8%;
    //   border-radius: var(--radius);
    // }
  }
`;

export default Hero;
