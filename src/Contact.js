import { Link } from "react-router-dom";
import "./css/contact.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <>
      <div className="favorite-body">
        <div className="favorite-list">
          <div className="favorite-title">입주 신청하기</div>
          <div className="house-list2">
            <InputGroup className="inputb" size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">이름</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup className="inputb" size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                연락처
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup className="inputb" size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                계약기간
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup className="inputb" size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                입주가능일
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Button className="btn" variant="primary" size="lg">
              입주 신청하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
