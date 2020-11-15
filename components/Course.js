import React from 'react'
import styled from 'styled-components'

const Course = props => (
    <Container>
        <Cover>
            <Image source ={props.image} />
            <Logo source ={props.logo}/>
            <Subtite>{props.subtitle}</Subtite>
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Avatar source={props.Avatar} />
            <Caption>{props.avatar}</Caption>
            <Name> {props.name}</Name>
        </Content>
    </Container>
)

export default Course;

const Container = styled.View`
width:315px;
height:335px;
`

const Cover = styled.View`
height:20px;
`

const Image =styled.Image`
width:100%;
height:100%;
`

const Logo=styled.Logo`
width:48px;
height:48px;
`

const  Title=styled.Title``

const Subtitle= styled.Subtitle``

const Content = styled.View``

const Avatar = styled.Image`
width:32px;
height:32px;
`

const Caption = styled.text``

const Name = styled.Text``

