import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from "styled-components";
import Card from './components/Card';
import {Icon} from "@expo/vector-icons";
import {NotificationIcon} from "./components/Icons";
import Logo from './components/Logo';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
        <ScrollView>
        <TitleBar>
          <Avatar source={require('./assets/avatar.jpg')}/>
        <Title>My first aoo!</Title>
        <Name>CodePractice</Name>
        <NotificationIcon 
        style={{position:"absolute",right:20, top:5}}
        
        />
        </TitleBar>
        <ScrollView style={{flexDirection:"row",padding:20, paddingLeft: 12, paddingTop:30}} horizontal={true} showsHorizontalScrollIndicator={false}>

          {logos.map((logo, index) => (
        <Logo key={index} image={logo.image}
        text={logo.text}
        />
          ))}

        </ScrollView>
        <Subtitle>Continue Learning</Subtitle>
        <ScrollView horizontal={true} style={{paddingBottom:30}}
        showsHorizontalScrollIndicator={false}
        >
          {cards.map((card, index) => (       
             <Card 
             key={index}
             title={card.title}
             image={card.image}
             caption={card.caption}
             logo={card.logo}
             subtitle={card.subtitle}
        />
        ))}
 </ScrollView>
        </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}


const Subtitle = styled.Text`
color:#b9bece;
font-weight:600;
font-size:15px;
margin-left:20px;
margin-top:20px;
text-transform:uppercase;
`


const Avatar = styled.Image`
width:44px;
height: 44px;
background: black;
border-radius:22px;
margin-left:20px;
position: absolute;
top: 0;
left:0;
`;

const Container = styled.View`
flex:1;
background-color: #f0f3f5;
justify-content: center;
align-items: center;

`;

const Title=styled.Text`
font-size: 16px;
color: #b8bece;
font-weight:500;
`;

const Name = styled.Text`
font-size: 20px;
color:#3c4560;
font-weight:bold;
`

const TitleBar = styled.View`
width:100%;
margin-top: 50px;
padding-left:80px;
`

const logos= [
  {
    image:require("./assets/logo-framerx.png"),text:"Framer X"

  },
  {
    image:require("./assets/logo-figma.png"),text:" Figma"
    
  },
  {
    image:require("./assets/logo-studio.png"),text:"studio"
    
  },
  {
    image:require("./assets/logo-react.png"),text:"React"
    
  },
  {
    image:require("./assets/logo-swift.png"),text:"Swift"
    
  },
  {
    image:require("./assets/logo-sketch.png"),text:"sketch"
    
  }
];

const cards = [
  {
  title: "React Native for Designers",
  image: require("./assets/background11.jpg"),
  subtite: "React Native",
  caption:"1 of 12 sections",
  logo: require("./assets/logo-react.png")
},
{
  title: "Styled Components",
  image: require("./assets/background12.jpg"),
  subtite: "React Native",
  caption:"1 of 12 sections",
  logo: require("./assets/logo-react.png")
},
{
  title: "Props and Icons",
  image: require("./assets/background13.jpg"),
  subtite: "React Native",
  caption:"1 of 12 sections",
  logo: require("./assets/logo-react.png")
},
{
  title: "Static Data and loop",
  image: require("./assets/background14.jpg"),
  subtite: "React Native",
  caption:"1 of 12 sections",
  logo: require("./assets/logo-react.png")
}
];