import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLorem } from '../../features/get-lorem/loremSlice';
import { AppContext } from '../../context/Context';
import { randomFuncTion } from '../../random-function/randomFunction';
import RandomComponent from '../../random-function/RandomComponent';
function Home() {
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
       {lorem.loading ? (
        <p>Loading...</p>
      ) : lorem.isSuccess ? (
        <div>
          {lorem.data.map((item, index) => (
            <hp key={index}>{item}</hp>
          ))}
        </div>
      ) : (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      )} 
      
      {/* <div className='home'>
        <h2>Welcome</h2>
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
      </div> */}
    </div>
  );
}

export default Home;
