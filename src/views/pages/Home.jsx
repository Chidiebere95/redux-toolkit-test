import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLorem } from '../../features/get-lorem/loremSlice';
import { AppContext } from '../../context/Context';
import { randomFuncTion } from '../../random-function/randomFunction';
import RandomComponent from '../../random-function/RandomComponent';
import { icons } from '../../assets/icons';

function Home() {
  const { variable1 } = randomFuncTion();
  const dispatch = useDispatch();
  const { lorem } = useSelector((state) => {
    return state;
  });
  const array = [];
  const { theme } = useContext(AppContext);
  useEffect(() => {
    dispatch(getLorem());
  }, []);
  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
            <th>column 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>item1</td>
            <td>item2</td>
            <td>item3</td>
            <td>item4</td>
          </tr>
        </tbody>
      </table>
      {lorem.status === 'loading' ? (
        <p>Loading...</p>
      ) : lorem.status === 'success' ? (
        <div>
          {lorem.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigator.clipboard.writeText(lorem.data.join(''));
            }}
            className='copy'
          >
            <button>Copy all</button>
            <figure className={`${theme}_theme_color`}>{icons.copy}</figure>
          </div>
        </div>
      ) : lorem.status === 'error' || lorem.status === 'base' ? (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      ) : (
        <></>
      )}
      {lorem.status === 'loading' ? (
        <p>Loading...</p>
      ) : lorem.status === 'success' ? (
        <div>
          {lorem.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigator.clipboard.writeText(lorem.data.join(''));
            }}
            className='copy'
          >
            <button>Copy all</button>
            <figure className={`${theme}_theme_color`}>{icons.copy}</figure>
          </div>
        </div>
      ) : lorem.status === 'error' || lorem.status === 'base' ? (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
