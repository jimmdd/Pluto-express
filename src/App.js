import React, { Component } from 'react';
import { Button, Icon, Modal, Row, Col, Input, Navbar, NavItem, Card, SideNav,SideNavItem} from 'react-materialize';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  //DEMO ONLY IMPLEMENT VALIDATE LATER
  handleLogin() {
    this.setState({ isLogin: true });
  }
  //DEMO ONLY TO-DO REACT-ROUTER
  render() {
    if (this.state.isLogin) {
      return (
        <div>
          <FixedNavBar />
          <main id="main-content">
            <Row>
              <Col m={12} s={12}>
                <Card id="general-card">
                  <Home />
                </Card>
              </Col>
            </Row>
          </main>
          <FixedFooter />
        </div>
      );
    } else {
      return (
        <div>
          <FixedNavBar />
          <main id="main-content">
            <Login handlelogin={this.handleLogin} />
          </main>
          <FixedFooter />
        </div>
      );
    }

  }
}
class Home extends Component {
  constructor() {
    super()
    this.state = {
      isNew: false,
      isEdit: false,
      isDuplicate: false
    }
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickDuplicate = this.handleClickDuplicate.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickNew() {
    this.setState(prevState => ({
      isNew: !prevState.isNew,
    }));
  }
  handleClickEdit() {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  }
  handleClickDuplicate() {
    this.setState(prevState => ({
      isDuplicate: !prevState.isDuplicate,
    }));
  }
  handleClickBack() {
    this.setState({
      isNew: false,
      isEdit: false,
      isDuplicate: false
    });
    console.log("click");
  }

  //conditional rending
  render() {
    if (this.state.isNew) {
      return (
        <Basic title="Enter Account Info" onBackClick={this.handleClickBack} />
      );
    } else if (this.state.isEdit) {
      return (
        <Basic title="Edit Account Info" onBackClick={this.handleClickBack} />
      );

    } else if (this.state.isDuplicate) {
      return (
        <Basic title="Duplicate Account Info" onBackClick={this.handleClickBack} />
      );
    } else {
      return (
        <Landing
          onNewClick={this.handleClickNew}
          onEditClick={this.handleClickEdit}
          onDuplicateClick={this.handleClickDuplicate}
        />
      );
    }
  }
}

//Landing Page Component
class Landing extends Component {

  render() {
    return (
      <div className="container">
        <Row>
          <Button className="btn-large" onClick={this.props.onNewClick}>
            New Quote
          </Button>
        </Row>
        <Row>
          <Button className="btn-large" onClick={this.props.onEditClick}>
            Edit Quote
            </Button>
        </Row>
        <Row>
          <Button className="btn-large" onClick={this.props.onDuplicateClick}>
            Duplicate & Edit Quote
            </Button>
        </Row>
      </div>
    );
  }
}

//Basic Info Page Component
class Basic extends Component {
  constructor() {
    super();
    this.state = {
      isClear: false
    }
    this.handleClearance = this.handleClearance.bind(this);
  }

  //Function to handle Clearance click and need further action for clearance
  handleClearance() {
    this.setState({ isClear: true });
  }

  render() {
    if (this.state.isClear) {
      return <Triage />
    }
    else
      return (
        <div className="container">

          <Row>
            <h3>{this.props.title}</h3>
            <Modal
              header='Import Data From Wrapper'
              actions={
                <section>
                  <Button className="btn-flat modal-action modal-close">Cancel</Button>
                  <Button className="btn-flat modal-action modal-close">Import</Button>
                </section>
              }
              trigger={
                <Button><Icon left>cloud_download</Icon>Import From Wrapper</Button>
              }>
              <p>Please click import on the right bottom to import data from wrappe or click cancel or anywhere else to close this.</p>
            </Modal>
          </Row>

          <Row>
            <Row>
              <Input s={6} className="filled-in" name='group1' type='checkbox' value='General Liability' label='General Liability' />
              <Input s={6} className="filled-in" name='group1' type='checkbox' value='Excess' label='Excess' />
            </Row>

            <Row>
              <Input s={6} type="number" label="ImageRight Task ID" />
              <Input s={6} type="number" label="File Number" />
            </Row>

            <Row>
              <Input s={4} className="datepicker" name="on" label="Effective Date" type='date' onChange={function (e, value) { }} />
              <Input s={4} className="datepicker" name="on" label="Expiration Date" type='date' onChange={function (e, value) { }} />
              <Input s={4} className="datepicker" name="on" label="Receive Date" type='date' onChange={function (e, value) { }} />
            </Row>

            <Row>
              <Input s={6} type="text" label="Insured Name" />
              <Input s={6} type="text" label="Legal status" />
            </Row>

            <Row>
              <Input s={6} type="text" label="Street" />
              <Input s={2} type="text" label="City" />
              <Input s={2} type="text" label="State" />
              <Input s={2} type="number" label="Zipcode" />
            </Row>

            <Row>
              <Input s={6} type='select' label="Classification" defaultValue='0'>
                <option value='0' disabled>Choose Classification</option>
                <option value='1'>60015</option>
                <option value='2'>98820</option>
              </Input>
              <Input s={4} type='select' label="Exposure Basis" defaultValue='0'>
                <option value='0' disabled>Choose Exposure Basis</option>
                <option value='1'>Units</option>
                <option value='2'>Gross Sales</option>
              </Input>
              <Input s={2} type='select' label="Value" defaultValue='0'>
                <option value='0' disabled>Choose Value</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Input>
            </Row>

            <Row>
              <Input s={6} type="text" label="Insured Name" />
              <Input s={6} type="text" label="Legal Status" />
            </Row>

            <Row>
              <Col s={6}>
                <Button className="red accent-2" onClick={this.props.onBackClick}><Icon left>arrow_back</Icon>Go Back</Button>
              </Col>
              <Col s={6}>
                <Modal
                  id="clearanceModal"
                  header='Get Clearance'
                  actions={
                    <section>
                      <Button className="modal-action modal-close btn-flat">Cancel</Button>
                      <Button className="modal-action modal-close btn-flat" onClick={this.handleClearance}>Confirm</Button>
                    </section>
                  }
                  trigger={
                    <Button ><Icon right>exit_to_app</Icon>Get Clearance</Button>
                  }>
                  <p>Please confirm all the information entered are correct and proceed to get clearance. You can't undo this step!</p>
                </Modal>
              </Col>
            </Row>
          </Row>
        </div >
      );
  }
}

class Triage extends Component {
  constructor() {
    super();
    this.state = {
      isRiskRating: false,
    }
    this.handleRiskRating = this.handleRiskRating.bind(this);
  }

  //handle enter riskrating info input form TO-DO implement input form in R&R
  handleRiskRating() {
    this.setState({ isRiskRating: true });
    console.log("this is working");
  }

  render() {
    if (this.state.isRiskRating) {
      return <RiskRating />;
    } else {
      return (
        <div className="container">
          <h3>Triage Page</h3>
          <Refer />
          <Declination />
          <Button onClick={this.handleRiskRating}>Enter Risk and rating info </Button>
        </div>
      );
    }
  }
}

//TO-DO PASS PROPS AND AND MODAL
class Declination extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Modal
            header='Send Decination letter'
            actions={
              <section>
                <Button className="modal-action modal-close btn-flat">Cancel</Button>
                <Button className="modal-action modal-close btn-flat">Send Now</Button>
              </section>
            }
            trigger={
              <Button ><Icon right>send</Icon>Decline</Button>
            }>
            <p>Please review all the information entered are correct and proceed to decline.</p>
          </Modal>
        </Row>


      </div>
    );
  }
}

class Refer extends Component {

  //TO-DO CHANGE ALL HARDCODE DATA TO PROPS

  render() {
    return (
      <div className="container">
        <Row>
          <Modal
            header='Refer Letter'
            actions={
              <section>
                <Button className="modal-action modal-close btn-flat">Cancel</Button>
                <Button className="modal-action modal-close btn-flat">Refer Now</Button>
              </section>
            }
            trigger={
              <Button ><Icon right>send</Icon>Refer</Button>
            }>
            <p>Please confirm all the information entered are correct and proceed to refer.</p>
          </Modal>
        </Row>


      </div>
    );
  }
}

class RiskRating extends Component {
  constructor() {
    super();

  }

  //TO-DO
  handleCalculate() {

  }

  render() {
    return (
      <div className="container">
        <Row>
          <h3>Enter Risk and Rating Info</h3>
          <h5>TO-DO FORM</h5>
        </Row>
        <Row>
          <Col s={6}>
            <Button onClick={this.handleCalculate}> Calculate Premium</Button>
          </Col>
          <Col s={6}>

            <Refer />
          </Col>
        </Row>
      </div>
    );
  }
}

//TO-DO IMPLEMENT
class Quote extends Component {
  render() {
    return (
      <Row>
        <h1>Quote</h1>
      </Row>
    );
  }
}

//TO-DO NAME LOGO AND NAVITEM
class FixedNavBar extends Component {
  render() {
    return (
      <header>
        <Navbar className="blue-grey lighten-1" brand='Argo Express' right>
          <NavItem href='#'>Help</NavItem>
          <NavItem href='#'>My Account</NavItem>
        </Navbar>
      </header>
    );
  }
}

//NOT USING REACT-MATERIALIZE FOOT COMPONENT COZ 
class FixedFooter extends Component {
  render() {
    return (
      <footer className="page-footer blue-grey lighten-1">
        <div className="footer-copyright blue-grey lighten-1">
          <div className="container">
            Argo Group© 2017 Copyright
          </div>
        </div>
      </footer>
    );
  }
}

//Fake Demo component TO-DO flex it
class FixedSideNav extends Component{
  render(){
    return(
      <SideNav
      trigger={<Button>SIDE NAV DEMO</Button>}
      options={{ closeOnClick: true }}
      >
      <SideNavItem userView
        user={{
          background: 'img/office.jpg',
          image: 'img/yuna.jpg',
          name: 'John Doe',
          email: 'jdandturk@gmail.com'
        }}
      />
      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <SideNavItem href='#!second'>Second Link</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
     );
     }
  }

//TO-DO WIRE WITH VALIDATION AND ADD CHANGEABLE LOGO  
class Login extends Component {
  render() {
    return (
      <div className="container" id="login">
        <Row>
          <Col className="offset-m2 offset-l3" m={8} l={6} s={12}>
            <Card
              actions={
                [<a href='#'>Forgot Password</a>]}
            >
            <Row>
              <div className="card-image">
                <img src="./argo-group.jpg"/>
                </div>
              </Row>
              <Row>
                <Input s={12} type="text" label="Email" ><Icon left>email</Icon></Input>
              </Row>
              <Row>
                <Input s={12} type="text" label="Password"><Icon left>vpn_key</Icon></Input>
              </Row>
              <Row>
                <Button className="btn-large cyan" id="login-button" onClick={this.props.handlelogin}>Login</Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
