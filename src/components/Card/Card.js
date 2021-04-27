import React from 'react';
import { Container, Button } from '../../globalStyles';
import CardCSS from './Card.module.css';

const Card = () => {
  return (
    <>
      <Container>
      <h1 className={CardCSS.h1}>Pricing Strategies</h1>
      <h3 className={CardCSS.h3}>Affordable options for every client</h3>
        <div className={CardCSS.grid}>
          <div className={CardCSS.card}>
            <h3 className={CardCSS.h3}>Free Trial</h3>
            <p className={CardCSS.p}>
              This offer is for first time clients who wish to try out FANTASTAX for free! Use your 30-day trial to file your personal or business taxes, and enjoy our specialized services at no cost. Give it a try, it's free!
            </p>
            <h2 className={CardCSS.h2}>€0</h2>
            <Button primary>Try It Free</Button>
          </div>
          <div className={CardCSS.card}>
            <h3 className={CardCSS.h3}>Silver</h3>
            <p className={CardCSS.p}>
              Silver tier offers you a one-on-one consultation with a tax specialist to determine your individual needs and set you up with the tools you need to succeed. Our individual tax plan will support your personal or business needs.
            </p>
            <h2 className={CardCSS.h2}>€60/year</h2>
            <Button primary>Select Silver</Button>
          </div>
          <div className={CardCSS.card}>
            <h3 className={CardCSS.h3}>Gold</h3>
            <p className={CardCSS.p}>
              Gold tier is available to clients who wish to have their taxes handled by professionals. We offer you a one-on-one consultation to determine your individual needs, and then we take it from there. No hassle, your taxes are handled by us.
            </p>
            <h2 className={CardCSS.h2}>€200/year</h2>
            <Button primary>Go For Gold</Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Card;