import * as React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';
import Box from '../Box/Box';
import Time from '../../components/Time/Time';
import './Leftside.css';
import Image from '../../components/Image/Image';

const Leftside = () => {
  return (
    <Wrapper>
      <Card className="to-do-list-date-logo-container">
        <Box className="to-do-list-date-logo-box">
          <Box>
            <Image
              src={
                'https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc'
              }
              alt="logo"
              className="to-do-list-logo-image"
            />
          </Box>

          <Box className="to-do-list-date">
            <Time />
          </Box>
        </Box>
      </Card>
    </Wrapper>
  );
};
export default Leftside;
