import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faWheelchair } from '@fortawesome/free-solid-svg-icons';

const BoredTable = () => {
  const [bored, setBored] = useState();
  const [type, setType] = useState();
  const [list, setList] = useState([]);

  const handleBored = () => {
    type
      ? axios
          .get(`https://www.boredapi.com/api/activity?type=${type}`)
          .then(response => {
            setBored(response.data);
            setList([
              ...list,
              {
                activity: response.data.activity,
                key: response.data.key,
                type: response.data.type,
                price: response.data.price,
                accessibility: response.data.accessibility
              }
            ]);
          })
      : axios
          .get('https://www.boredapi.com/api/activity')
          .then(response => {
            setBored(response.data);
            setList([
              ...list,
              {
                activity: response.data.activity,
                key: response.data.key,
                type: response.data.type,
                price: response.data.price,
                accessibility: response.data.accessibility
              }
            ]);
          });
  };

  const handleType = e => {
    setType(e.target.value);
  };

  return (
    <>
      <h3 id="bored">
        I'm Bored{' '}
        <a
          href="https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/Bored.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="soc fa-brands fa-github pinkLink gitLink"></i>
        </a>
      </h3>
      <p>
        Feeling uninspired? <br /> - Use the dropdown to pick a type (optional) <br /> - Press the
        button to generate a random activity <br />- Keep pressing the button to make a list{' '}
        <br />
        <br /> Powered by the{' '}
        <a
          href="https://www.boredapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pinkLink"
        >
          Bored API
        </a>
      </p>
      <select onChange={handleType}>
        <option disabled selected>
          Select Type (optional)
        </option>
        {bored && bored.type === 'education' ? (
          <option value="education" selected>
            Education
          </option>
        ) : (
          <option value="education">Education</option>
        )}
        {bored && bored.type === 'recreational' ? (
          <option value="recreational" selected>
            Recreational
          </option>
        ) : (
          <option value="recreational">Recreational</option>
        )}
        {bored && bored.type === 'social' ? (
          <option value="social" selected>
            Social
          </option>
        ) : (
          <option value="social">Social</option>
        )}
        <option value="diy">DIY</option>
        {bored && bored.type === 'charity' ? (
          <option value="charity" selected>
            Charity
          </option>
        ) : (
          <option value="charity">Charity</option>
        )}
        {bored && bored.type === 'cooking' ? (
          <option value="cooking" selected>
            Cooking
          </option>
        ) : (
          <option value="cooking">Cooking</option>
        )}
        {bored && bored.type === 'relaxation' ? (
          <option value="relaxation" selected>
            Relaxation
          </option>
        ) : (
          <option value="relaxation">Relaxation</option>
        )}
        {bored && bored.type === 'music' ? (
          <option value="music" selected>
            Music
          </option>
        ) : (
          <option value="music">Music</option>
        )}
        {bored && bored.type === 'busywork' ? (
          <option value="busywork" selected>
            Busywork
          </option>
        ) : (
          <option value="busywork">Busywork</option>
        )}
      </select>
      <button onClick={handleBored}>Generate</button>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Accessibility</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.key}>
              <td>{item.activity}</td>
              <td>{item.type}</td>
              <td>
                    {item.price === 0 ? (
                      <FontAwesomeIcon icon={faDollarSign} />
                    ) : (
                      <FontAwesomeIcon icon={faDollarSign} style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    {item.accessibility === 1 ? (
                      <FontAwesomeIcon icon={faWheelchair} />
                    ) : (
                      <FontAwesomeIcon icon={faWheelchair} style={{ color: 'red' }} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    };
    
    export default BoredTable;

