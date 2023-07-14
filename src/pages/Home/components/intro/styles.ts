import styled from 'styled-components'
import { rgba } from 'polished'
import introBackgroundImg from '../../../../assets/intro-background.svg'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitleText = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['title-title-xl']};
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme.colors['base-title']};
`

export const IntroRegularText = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes['text-regular-l']};
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin-top: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4rem;
`

// export const ContentWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 5rem;

//   @media screen and (max-width: 414px) {
//     padding: 0 0.8rem;
//   }
// `

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `

// export const TitleMain = styled.div`
//   max-width: 36rem;

//   & h1 {
//     font-size: 48px;
//     font-family: 'Baloo 2';
//     font-style: normal;
//     font-weight: 800;
//     line-height: 130%;
//     color: ${(props) => props.theme['base-title']};
//     margin-bottom: 1rem;

//     @media screen and (max-width: 414px) {
//       font-size: 36px;
//       line-height: 130%;
//       text-align: center;
//       margin-bottom: 1rem;
//     }
//   }

//   & h3 {
//     font-size: 20px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 130%;
//     color: ${(props) => props.theme['base-subtitle']};

//     @media screen and (max-width: 414px) {
//       font-size: 16px;
//     }
//   }
// `

// export const Information = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media screen and (max-width: 414px) {
//     flex-direction: column;
//   }
// `

// export const Description = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   & div {
//     display: flex;
//     align-items: center;
//   }

//   @media screen and (max-width: 414px) {
//     font-size: 0.875rem;
//     margin-bottom: 2rem;
//     width: 250px;
//   }
// `

// export const SpanBackground = styled.span<BackgroundProps>`
//   display: flex;
//   align-items: center;
//   padding: 0.4rem;
//   margin-right: 0.5rem;
//   border-radius: 9999999999px;
//   background: ${(props) => {
//     if (props.background === 'yellow-dark') {
//       return props.theme['yellow-dark']
//     }

//     if (props.background === 'yellow') {
//       return props.theme.yellow
//     }

//     if (props.background === 'base-text') {
//       return props.theme['base-text']
//     }

//     if (props.background === 'purple') {
//       return props.theme.purple
//     }
//   }};

//   & svg {
//     color: ${(props) => props.theme.white};
//   }
// `

// export const ImageMain = styled.div`
//   @media screen and (max-width: 414px) {
//     display: none;
//   }
// `
