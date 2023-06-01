import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getLorem } from './features/get-lorem/loremSlice';

function App() {
  const dispatch = useDispatch();
  const lorem=useSelector((state)=>{
    return state.lorem
  })
  console.log(lorem);
  useEffect(() => {
    dispatch(getLorem());
  }, []);
  return <div className='App'>hello world</div>;
}

export default App;
