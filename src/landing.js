
import ReactTable from 'react-table';
import React, {Component} from 'react';
import { Button, Icon, Modal, Row, Col, Input, Navbar, NavItem, Card, Collection, CollectionItem, SideNav, SideNavItem } from 'react-materialize';

//Landing Page Component
class Landing extends Component {
    
      render() {
        const data = [{
          user: 'Tanner Linsley',
          insName: 'Auto',
          status: 'Declined',
          subNum: 1051679324,
          effDate: '10/02/2017',
          preimum: 30000
        },
        {
          user: 'Sam Polly',
          insName: 'Auto',
          status: 'Issued',
          subNum: 23109231023,
          effDate: '10/20/2017',
          preimum: 530000
        },
        {
          user: 'Laura Schewize',
          insName: 'Auto',
          status: 'Declined',
          subNum: 32434234,
          effDate: '11/02/2017',
          preimum: 20000
        },
        {
          user: 'Anna Lee',
          insName: 'Auto',
          status: 'Declined',
          subNum: 32434234,
          effDate: '11/02/2017',
          preimum: 20000
        },
        {
          user: 'Jean Doe',
          insName: 'Auto',
          status: 'Declined',
          subNum: 32434234,
          effDate: '11/02/2017',
          preimum: 20000
        },
        {
          user: 'John Smith',
          insName: 'Auto',
          status: 'Declined',
          subNum: 32434234,
          effDate: '11/02/2017',
          preimum: 20000
        },
        {
          user: 'Jeff Schewize',
          insName: 'Auto',
          status: 'Declined',
          subNum: 32434234,
          effDate: '11/02/2017',
          preimum: 20000
        },
        {
          user: 'John Doe',
          insName: 'Auto',
          status: 'Blocked',
          subNum: 2333443,
          effDate: '12/02/2017',
          preimum: 10000
        }]
    
        const columns = [{
          Header: 'User',
          accessor: 'user' // String-based value accessors!
        },
        {
          Header: 'Insured Name',
          accessor: 'insName'
        }, {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Submission#',
          accessor: 'subNum',
        },
        {
          Header: 'Effective Date',
          accessor: 'effDate',
        },
        {
          Header: 'Preimum ',
          accessor: 'preimum',
        },
      {
        Header: 'Action'
      }]
        
        return (
          <div className="container">
            {/* <Row>
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
            </Row> */}
            <h4>Prototype Landing Page</h4>
            <Row>
              <Row>
                <Col s={12}>
                  <Input s={12} type="search" label={<Icon left>search</Icon>} />
                </Col>
              </Row>
            </Row>
            <Row>
              <ReactTable
                data={data}
                columns={columns}
                showPaginationBottom={false}
                minRows={1}
              />
            </Row>
            <h4>Prototype RiskRating Page</h4>
            <Row>
              <Col s={2} l={1}>
              
                <FixedSideBar />
              </Col>
              <Col s={10} l={12}>
                <RiskRating />
              </Col>
            </Row>
          </div>
        );
      }
    }

    export default landing;