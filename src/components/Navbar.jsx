import React from 'react'
import styled from 'styled-components'

// const Section = styled.div`
//     display: flex;
//     justify-content: center;

//     @media only screen and (max-width: 768px){
//         width: 100%;
//     }
// `;

const Section = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    color: white; /* 文字の色を適宜設定 */
    z-index: 100; /* 必要に応じて適切な値を設定 */

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  /* ここに他のスタイルを追加できます */
`;


const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 10px;
    }
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;


    @media only screen and (max-width: 768px){
        display: none;
    }
`;
const ListItem = styled.li`
    cursor: pointer;

`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;
// const Button = styled.button`
//     width: 100px;
//     padding: 10px 0px;
//     background-color: #da4ea2;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// `;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src ="./img/logo2.png"></Logo>
            <List>
                <ListItem>
                    <StyledLink href="#home">Home</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink href="#threejs">Three.js</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink href="#skills">Skills</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink href="#contact">Contact</StyledLink>
                </ListItem>
            </List>
            </Links>
            {/* <Icons>
                <Icon src="./img/search.png"></Icon>
                <Button>Hire Now</Button>
            </Icons> */}
        </Container>
    </Section>
  )
}

export default Navbar
