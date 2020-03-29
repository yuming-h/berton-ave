import React, { Fragment, Component } from 'react';
import { Header, Icon, Grid, Card } from 'semantic-ui-react';
import Clock from 'react-live-clock';
import axios from "axios";

const BACKEND_URL = "http://35.199.189.107:8080";

const PRIMARY_COLOR = '#4E80A2';
const SECOND_COLOR = '#4E80A2';
const TEXT_COLOR = '#ffffff';

const pageStyle = {
  marginLeft: '45px',
  marginTop: '45px',
  marginRight: '65px',
  color: PRIMARY_COLOR
}
const timeStyle = {
  textAlign: 'right'
}
const timeTextStyle = {
  fontSize: '60px',
  color: TEXT_COLOR
}
const topHeaderStyle = {
  fontSize: '90px',
  color: TEXT_COLOR
}
const choreHeaderStyle = {
  fontSize: '45px',
  color: TEXT_COLOR
}
const cardStyle = {
  backgroundColor: SECOND_COLOR,
  color: TEXT_COLOR
  
}
const cardHeaderStyle = {
  fontSize: '55px'
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choreArray: []
    }
  }

  componentDidMount() {
      this.interval = setInterval(async () => {
          const res = await axios.get(BACKEND_URL+'/chores')
          this.state.choreArray = res.data
          this.setState(this.state)
      }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
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
            <Card.Content><h2>{this.state.choreArray[0]}</h2></Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={cardStyle}>
            <Card.Header><h1 style={cardHeaderStyle}>Jeff</h1></Card.Header>
            <Card.Content><h2>{this.state.choreArray[1]}</h2></Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={cardStyle}>
            <Card.Header><h1 style={cardHeaderStyle}>Justin</h1></Card.Header>
            <Card.Content><h2>{this.state.choreArray[2]}</h2></Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={cardStyle}>
            <Card.Header><h1 style={cardHeaderStyle}>Celia</h1></Card.Header>
            <Card.Content><h2>{this.state.choreArray[3]}</h2></Card.Content>
          </Card>
        </Grid.Column>
        </Grid>
      </div>
    );
  }

}

