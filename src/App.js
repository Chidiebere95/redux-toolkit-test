import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getLorem } from './features/get-lorem/loremSlice';

function App() {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => {
    return state.lorem;
  });
  console.log(lorem);
  useEffect(() => {
    console.log('useeffect');
     dispatch(getLorem());
  }, []);
  return <div className='App'>{lorem.loading?<h5>Loading...</h5>:lorem.isSuccess?lorem.data.map((item,index)=><h5 key={index}>{item}</h5>):<h5>Unable to connect to the internet. check your network and try again...</h5>}</div>;
}

export default App;
