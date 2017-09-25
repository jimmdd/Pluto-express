import React, { Component } from 'react';
import { Button, Icon, Modal, Row, Col, Input, Footer, Navbar,NavItem } from 'react-materialize';

class App extends Component {
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
          <Basic title="Enter Account Info" onBackClick={this.handleClickBack}/>
      );
    } else if (this.state.isEdit) {
      return (
          <Basic title="Edit Account Info" onBackClick={this.handleClickBack}/>
      );

    } else if (this.state.isDuplicate) {
      return (
          <Basic title="Duplicate Account Info" onBackClick={this.handleClickBack}/>      
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

  render() {
    return (
      <div className="container">
        <Row>
          <h3>{this.props.title}</h3>
          <Modal
            header='Import Data From Wrapper'
            actions={
              <section>
                <Button className="btn-flat">Cancel</Button>
                <Button className="btn-flat">Import</Button>
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
            <Input s={6} type="text" label="Stree" />
            <Input s={2} type="text" label="City" />
            <Input s={2} type="text" label="State" />
            <Input s={2} type="number" label="Zipcode" />
          </Row>

          <Row>
            <Input s={6} type='select' label="Classification" defaultValue='0'>
              <option value='0' disabled>Choose Classification</option>
              <option value='1'>Option 2</option>
              <option value='2'>Option 3</option>
            </Input>
            <Input s={4} type='select' label="Exposure Basis" defaultValue='0'>
              <option value='0' disabled>Choose Exposure Basis</option>
              <option value='1'>Option 2</option>
              <option value='2'>Option 3</option>
            </Input>
            <Input s={2} type='select' label="Value" defaultValue='0'>
              <option value='0' disabled>Choose Value</option>
              <option value='1'>Option 2</option>
              <option value='2'>Option 3</option>
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
              header='Get Clearance'
              actions={
                <section>
                  <Button className="btn-flat">Cancel</Button>
                  <Button className="btn-flat">Confirm</Button>
                </section>
              }
              trigger={
                <Button><Icon right>exit_to_app</Icon>Get Clearance</Button>
              }>
              <p>Please confirm all the information entered are correct and proceed to get clearance.</p>
            </Modal>
            </Col>
          </Row>
        </Row>
      </div >
    );
  }
}

class Triage extends Component {
  render() {
    return (
      <Row>
        <h1>Triage</h1>
      </Row>
    );
  }
}

class DeclineModal extends Component {
  render() {
    return (
      <Row>
        <h1>Declination Letter</h1>
      </Row>
    );
  }
}

class Refer extends Component {
  render() {
    return (
      <Row>
        <h1>Refer Letter</h1>
      </Row>
    );
  }
}

class RiskRating extends Component {
  render() {
    return (
      <Row>
        <h1>RiskRating</h1>
      </Row>
    );
  }
}

class Quote extends Component {
  render() {
    return (
      <Row>
        <h1>Quote</h1>
      </Row>
    );
  }
}

class FixedNavBar extends Component{
  render(){
    return(
      <Navbar brand='logo' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
    );
  }
}
class FixedFooter extends Component{
  render(){
    return(
      <Footer copyrights="&copy 2015 Copyright Text"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      }
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>
      }
      className='example'
    >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>
    );
  }
}

export default App;
