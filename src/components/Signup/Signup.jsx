import { Form, Button,Card } from 'react-bootstrap';

const Signup = () => {
    return (
        <Card className='text-start m-5'>
        <Form>
            <h2>CREATE AN ACCOUNT</h2>
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                    type="email"
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                />
            </Form.Group>

            <Form.Group controlId="repeatPassword">
                <Form.Label>Repeat your password</Form.Label>
                <Form.Control
                    type="password"
                />
            </Form.Group>

            <Form.Group controlId="termsAgreed">
                <Form.Check
                    type="checkbox"
                    label="I agree to all statements in Terms of service"

                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>

            <p>
                Have already an account? <a href="#">Login here</a>
            </p>
        </Form>
        </Card>
    )
}

export default Signup