import {
  Header,
  Footer,
  useState,
  Form,
  Button,
  Link
} from './imports'


function Order() {
  const [username, setUsername] = useState('bulma');
  const [email, setEmail] = useState('hello@gmail.com');
  const [number, setNumber] = useState('0972315530');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(email));
  };

  return (
    <div className='order_page'>
        <Header></Header>
        <form>
        <Form.Field>
          <Form.Label>Username</Form.Label>
          <Form.Control>
            <Form.Input
              color=""
              value={username}
              onChange={(e) => {
                return setUsername(e.target.value);
              }}
            />
          </Form.Control>
          {username.length == 0 && <Form.Help color={'danger'}>Input name</Form.Help>}
        </Form.Field>
        
        <Form.Field>
          <Form.Label>Phone number</Form.Label>
          <Form.Control>
            <Form.Input
              color=""
              value={number}
              onChange={(e) => {
                return setNumber(e.target.value);
              }}
            />
          </Form.Control>
          {number.length !== 10 && <Form.Help color={'danger'}>Check phone number</Form.Help>}
        </Form.Field>

        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
              value={email}
              onChange={(e) => {
                validateEmail()
                return setEmail(e.target.value);
              }}
            />
          </Form.Control>
          {!isValid &&<Form.Help color={'danger'}>Check Email</Form.Help>}
        </Form.Field>
        <Button color="link" >Submit</Button>
        <Button color="danger"> <Link to={'/'} style={{color: '#fff'}}> Cancel </Link></Button>
      </form>
      <Footer className="order_footer"/>
    </div>
  )
}

export default Order
