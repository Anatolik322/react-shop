import {
  Block,
  Columns
} from './imports'

function Footer() {
  return (
   <Block className='footer'>
      <Columns>
        <Columns.Column className='footer_inner'>
          <ul>
              <h2>Contact us:</h2>
              <li>
                0 900 900 99
              </li>
              <li>
                example@gmail.com
              </li>
          </ul>
        </Columns.Column>
        {window.outerWidth > 810 && 
          <Columns.Column style={{color: '#fff', textAlign: 'left'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, ab,
            saepe facilis dicta sed quaerat delectus quas vitae sequi modi sunt nam quasi,
            incidunt itaque. Consequatur aliquam dicta ducimus omnis.
          </Columns.Column>
        }
      </Columns>
   </Block>
  )
}

export default Footer
