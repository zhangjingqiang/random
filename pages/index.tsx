import React, { useState } from "react";
import { Avatar, Button, Col, Row } from "antd";

const options = process.env.OPTIONS.split(",");

const Random: React.FC = () => {
  const [value, setValue] = useState(options[0]);
  const [showValue, setShowValue] = useState(false);

  const handleClick = () => {
    const randomValue = options[Math.floor(Math.random() * options.length)];
    setValue(randomValue);
    setShowValue(!showValue);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={24}>
        <Row justify="center">
          <Col>
            <Button type="primary" size="large" onClick={handleClick}>
              Random
            </Button>
          </Col>
        </Row>
        <Row justify="center">
          <Col
            style={{
              display: showValue ? "block" : "none",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "40px"
            }}
          >
            <Avatar size={64} style={{ backgroundColor: "green", fontWeight: "bold" }}>
              {value}
            </Avatar>
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          {options.map((member, index) => (
            <Col key={index}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  width: "100px",
                  height: "10px",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                  boxShadow: "2px 2px 10px #ccc",
                }}
              >
                {member}
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Random;
