import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getLorem } from './features/get-lorem/loremSlice';

function App() {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => {
    console.log('yo');
    return state.lorem;
  });
  console.log(lorem);
  useEffect(() => {
    console.log('useeffect');
     dispatch(getLorem());
  }, []);
  return <div className='App'>{lorem.loading?<h5>loading...</h5>:lorem.data.map((item,index)=><h5 key={index}>{item}</h5>)}</div>;
}

export default App;
