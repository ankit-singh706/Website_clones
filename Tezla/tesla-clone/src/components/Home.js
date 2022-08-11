import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="model-s.jpg"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="model-y.jpg"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="model-3.jpg"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="model-x.jpg"
        />
        <Section
          title="Lowest Cost Solar Panels in India"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roofs cost less than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Order Now"
        />
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`
