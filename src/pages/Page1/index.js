import React, { Component } from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap'
import axios from 'axios'

import { withTranslation } from 'react-i18next'

class Page1 extends Component {
  
  constructor(props) {
    super(props)
  

    this.state = {
      data: []
    }
  }

  getData = async () => {
    try {   
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      console.log(response.data)
      this.setState({ data: response.data })
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getData()
  }

  // const [data, setData] = useState([])

  // const getData = async () => {
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
  //     console.log(response.data)
  //     setData(response.data)
  //   } catch (err) {
  //     console.error(err);
  //   }
   
  // }

  // useEffect(() => {
  //   getData();
  // },[])

  render() {

    const { data } = this.state

    return (
      <React.Fragment>
          <div className='page-content'>
            <Container fluid>
            <h4>Hello</h4>
            <Card>
              <CardBody>
                <h1>Hi, this is Page1</h1>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item,idx) => {
                      return (
                        <tr key={idx}>
                          <td>{item.userId}</td>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.body}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            </Container>
          </div>
      </React.Fragment>
      )
  }
}

export default withTranslation()(Page1)