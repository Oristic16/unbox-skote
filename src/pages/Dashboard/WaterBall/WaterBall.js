import React, { useState } from "react";
import Wave from "react-wavify";
import { Card, CardBody } from "reactstrap";

const WaterBall = () => {
  const [widthWater, setWidthWater] = useState(71);
  return (
    <div>
      {/* <Card>
        <CardBody> */}
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              alignItems: "end",
              border: "2px solid black",
            }}
          >
            <Wave
              fill={
                widthWater <= 70
                  ? "#ff0b0b"
                  : widthWater > 70 && widthWater <= 120
                  ? "#ff9b00"
                  : widthWater > 120
                  ? "#04e218"
                  : null
              }
              paused={false}
              style={{
                position: "absolute",
                width: "200px",
                height: `${widthWater}px`,
                // backgroundColor: "#333",
                zIndex: "1",
                // bottom: 0
              }}
              options={{
                height: 20,
                amplitude: 9,
                speed: 0.5,
                points: 3,
              }}
            ></Wave>
          </div>
        {/* </CardBody>
      </Card> */}
    </div>
  );
};

export default WaterBall;
