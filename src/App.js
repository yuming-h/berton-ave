import React, { Fragment } from 'react';
import { Header, Icon, Grid, Card } from 'semantic-ui-react';
import Clock from 'react-live-clock';
import io from 'socket.io-client'

const pageStyle = {
  marginLeft: '45px',
  marginTop: '45px',
  marginRight: '65px',
  color: '#4E80A2'
}
const timeStyle = {
  textAlign: 'right'
}
const timeTextStyle = {
  fontSize: '60px',
  color: "#ffffff"
}
const topHeaderStyle = {
  fontSize: '90px',
  color: "#ffffff"
}
const choreHeaderStyle = {
  fontSize: '45px',
  color: "#ffffff"
}
const cardStyle = {
  backgroundColor: "#4E80A2",
  color: "#ffffff"
}
const cardHeaderStyle = {
  fontSize: '55px'
}

var choreArray = ['Garbage/Compost, Recycling', ]

const rotateChores = ()
const App = () => (
  <div style={pageStyle}>
    <Grid columns={2}>
      <Grid.Column>
        <Header style={topHeaderStyle}>
          <Header.Content>Welcome to Berton Avenue</Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column style={timeStyle}>
        <Header as='h1' style={timeTextStyle}>Current Time</Header>
        <Header as='h2' style={timeTextStyle}>
          <Clock format="HH:mm:ss" ticking={true} interval={1000} />
        </Header>
      </Grid.Column>
    </Grid>
    <Header style={choreHeaderStyle}>This Week's Chores</Header>
    <Grid columns={4} divided>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>YuMing</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Jeff</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Justin</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Celia</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    </Grid>
  </div>
);

export default App;
