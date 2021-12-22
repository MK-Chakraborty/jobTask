import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, Row, Button, Badge } from "react-bootstrap";
import logo from "../src/images/wobot-logo_blue 1.png";
import { useEffect, useState } from "react";
import CompanySizes from "./Components/CompanySizes/CompanySizes";

function App() {
  // Cetting Company Sizes from data.json
  const [compSizes, setCompSizes] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCompSizes(data));
  }, []);

  return (
    <div className="App">
      <Container>
        <header className="text-start">
          <img src={logo} alt="Wobot.ai" className="m-5 logo" />
        </header>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
          >
            <main className="ipForm p-5">
              <section className="my-3 text-center logoMain">
                <div className="fstLine"></div>
                <div className="secLine"></div>
                <div className="trdLine"></div>
              </section>

              <h2 className="fw-bold">It’s a delight to have you</h2>
              <h2 className="fw-bold">onboard</h2>
              <article>
                <p className="pt-3 mb-0">Help us know you better.</p>
                <p className="mb-5">
                  (This is how we optimize Wobot as per your business needs)
                </p>
              </article>
              <section className="text-start">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>Company name</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Example Inc" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Industry</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">Software</option>
                      <option value="2">Markating</option>
                      <option value="3">Sales</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Company Size</Form.Label>
                    <br />
                    <div className="d-flex justify-content-between flex-wrap">
                      {compSizes.map((compSize) => (
                        <CompanySizes
                          key={compSize.id}
                          compSize={compSize}
                        ></CompanySizes>
                      ))}
                    </div>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    style={{ background: "#3766e8" }}
                  >
                    Get Started
                  </Button>
                </Form>
              </section>
            </main>

            <footer>
              <h6 className="fw-light">Terms of use | Privacy policy</h6>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
