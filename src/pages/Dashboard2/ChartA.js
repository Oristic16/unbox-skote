import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartB from './ChartB';

ChartJS.register(...registerables);

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  width: 'auto',
};

const state = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',

      data: [
        65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81,
        56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80,
      ],
    },
  ],
};

function ChartA() {
  return (
    <Fragment>
      <Card>
        <CardTitle style={{color:"#483fd3"}}>
          <div className="ps-4 pt-3">
            <i className="fa-sharp fa-solid fa-signal-strong"></i>{' '}
            สถิติการเข้าใช้งานระบบ
          </div>
        </CardTitle>
        <CardBody>
          <Row>
            <Col xl={8} lg={12} md={12} sm={12} xs={12}>
              <Card>
                <CardTitle className="ps-3 pt-3">
                  จำนวนผู้ใช้ประจำเดือน
                </CardTitle>
                <CardBody>
                  <Bar data={state} options={barOptions}></Bar>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={12} md={12} sm={12} xs={12} style={{height:"400px"}}>
              <ChartB />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default ChartA;
