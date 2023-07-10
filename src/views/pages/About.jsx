import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLorem } from '../../features/get-lorem/loremSlice';
import { AppContext } from '../../context/Context';
import { randomFuncTion } from '../../random-function/randomFunction';
import RandomComponent from '../../random-function/RandomComponent';
function About() {
  const { variable1 } = randomFuncTion();
  const dispatch = useDispatch();
  const lorem = useSelector((state) => {
    return state.lorem;
  });
  // console.log(lorem);
  const { theme } = useContext(AppContext);
  useEffect(() => {
    dispatch(getLorem());
  }, []);
  return (
    <div className='App'>
      {/* {lorem.loading ? (
        <h5>Loading...</h5>
      ) : lorem.isSuccess ? (
        <div>
          {lorem.data.map((item, index) => (
            <h5 key={index}>{item}</h5>
          ))}
          <img src='https://roqqu.com/static/media/tokens/btc.png' alt='coin logo' />
        </div>
      ) : (
        <h5>
          Unable to connect to the internet. check your network and try again...
        </h5>
      )} */}
      <div className='about'>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
          assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
          officiis aperiam earum eum vel quas odio optio, distinctio ab sunt
          unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi,
          cupiditate iusto!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi
          architecto quidem, non odit saepe facere voluptas esse mollitia illo
          fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit
          velit beatae laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi
          architecto quidem, non odit saepe facere voluptas esse mollitia illo
          fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit
          velit beatae laudantium.
        </p>
      </div>
    </div>
  );
}

export default About;
