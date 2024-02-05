import React, { ReactElement, useEffect, useState } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';

import './App.css';

function PriceChange({ type, changeValue }: { type: string;  changeValue: number }) {
  return (
    <div className={`${type === 'negative' ? 'negative' : 'positive'} price-change`}>
      <ChangeHistoryRoundedIcon className={type === 'negative' ? 'rotate-180' : ''} />
      {type === 'negative' ? '-' : '+'}${changeValue.toFixed(2)}
    </div>
  )
}

interface StockData {
  symbol: string;
  price: number;
  change: ReactElement;
  percent_change: string;
  options: number;
  cost: string;
  value: string;
  total_gain: string;
  positive_total_gain: boolean;
  positive_change: boolean;
}

const stocks: StockData[] = [
  {
    symbol: 'ABCD',
    price: 1.03,
    change: <PriceChange type="negative" changeValue={1.34} />,
    percent_change: '-1.89',
    positive_change: false,
    options: 2,
    cost: '$30.00',
    value: '$35.00',
    total_gain: '+$5.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCC',
    price: 80.03,
    change: <PriceChange type="positive" changeValue={2.34} />,
    percent_change: '+2.89',
    positive_change: true,
    options: 2,
    cost: '$100.00',
    value: '$115.00',
    total_gain: '+$15.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCE',
    price: 3.67,
    change: <PriceChange type="negative" changeValue={3.34} />,
    percent_change: '-1.49',
    positive_change: false,
    options: 5,
    cost: '$20.00',
    value: '$15.00',
    total_gain: '-$5.00',
    positive_total_gain: false,
  },
  {
    symbol: 'ABCF',
    price: 4.43,
    change: <PriceChange type="negative" changeValue={3.34} />,
    percent_change: '-3.89',
    positive_change: false,
    options: 6,
    cost: '$40.00',
    value: '$47.00',
    total_gain: '+$7.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCG',
    price: 8.53,
    change: <PriceChange type="positive" changeValue={6.34} />,
    percent_change: '+6.89',
    positive_change: true,
    options: 2,
    cost: '$10.00',
    value: '$15.00',
    total_gain: '+$5.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCH',
    price: 90.23,
    change: <PriceChange type="negative" changeValue={1.36} />,
    positive_change: false,
    percent_change: '-1.87',
    options: 1,
    cost: '$100.33',
    value: '$75.33',
    total_gain: '-$25.00',
    positive_total_gain: false,
  },
  {
    symbol: 'ABCI',
    price: 12.03,
    change: <PriceChange type="negative" changeValue={2.34} />,
    percent_change: '-7.89',
    positive_change: false,
    options: 3,
    cost: '$36.00',
    value: '$35.00',
    total_gain: '-$1.00',
    positive_total_gain: false,
  },
  {
    symbol: 'ABCJ',
    price: 19.03,
    change: <PriceChange type="positive" changeValue={7.34} />,
    positive_change: true,
    percent_change: '+4.89',
    options: 4,
    cost: '$19.00',
    value: '$20.00',
    total_gain: '+$1.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCK',
    price: 14.03,
    change: <PriceChange type="negative" changeValue={4.34} />,
    percent_change: '-9.89',
    positive_change: false,
    options: 3,
    cost: '$50.00',
    value: '$105.00',
    total_gain: '+$55.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCL',
    price: 11.03,
    change: <PriceChange type="negative" changeValue={8.34} />,
    positive_change: false,
    percent_change: '-5.89',
    options: 1,
    cost: '$3.00',
    value: '$35.00',
    total_gain: '+$32.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCM',
    price: 11.03,
    change: <PriceChange type="positive" changeValue={6.34} />,
    percent_change: '+2.89',
    positive_change: true,
    options: 2,
    cost: '$70.00',
    value: '$35.00',
    total_gain: '-$35.00',
    positive_total_gain: false,
  },
  {
    symbol: 'ABCN',
    price: 117.03,
    change: <PriceChange type="negative" changeValue={8.34} />,
    positive_change: false,
    percent_change: '-2.89',
    options: 8,
    cost: '$1000.00',
    value: '$1500.00',
    total_gain: '+$500.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCO',
    price: 16.13,
    change: <PriceChange type="negative" changeValue={1.34} />,
    positive_change: false,
    percent_change: '-1.89',
    options: 2,
    cost: '$15.13',
    value: '$17.13',
    total_gain: '+$2.00',
    positive_total_gain: true,
  },
  {
    symbol: 'ABCP',
    price: 10.03,
    change: <PriceChange type="negative" changeValue={1.34} />,
    positive_change: false,
    percent_change: '-1.89',
    options: 2,
    cost: '$11.00',
    value: '$15.00',
    total_gain: '+$4.00',
    positive_total_gain: true,
  },
];

function TradeButton() {
  return (
    <button className="trade-button">TRADE</button>
  )
}

function App() {
  const [stockData, setStockData] = useState<StockData[]>(stocks);
  const [ticker, setTicker] = useState<number>(0);

  const generateRandomValue = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const generateStockData = () => {
    const newStockData = [...stockData];

    setStockData(newStockData.map((stock) => {
      const oldStockPrice = stock.price;
      const randomValue = Math.random();
      const newStockPrice = generateRandomValue(oldStockPrice - randomValue, oldStockPrice + randomValue);
      const positiveChange = newStockPrice > oldStockPrice;
      const priceChange = Math.abs(newStockPrice - oldStockPrice);
      const percentChange = `${positiveChange ? '+' : '-'}${((Math.abs(priceChange / newStockPrice) * 100)).toFixed(2)}`;

      return {
        ...stock,
        price: newStockPrice,
        change: <PriceChange type={positiveChange ? 'positive' : 'negative'} changeValue={priceChange} />,
        percent_change: percentChange,
        positive_change: positiveChange,
      }
    }))
  }

  useEffect(() => {
    const interval = setInterval(() => setTicker(Math.random()), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateStockData();
  }, [ticker]);

  return (
    <div className="App">
      <main>
        <section>
          <div className="table-container">
            <header>
              <h3>Positions</h3>
              <MoreVertOutlinedIcon sx={{ color: '#81A6D1' }} />
            </header>
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <div className="triangle"></div>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Change</th>
                  <th scope="col">(%)</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Options</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Value</th>
                  <th scope="col">Total Gain</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stock) => (
                <tr key={stock.symbol}>
                  <td>
                    {stock.symbol}<ExpandMoreTwoToneIcon />
                  </td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.change}</td>
                  <td className={stock.positive_change ? 'positive' : 'negative'}>{stock.percent_change}</td>
                  <td></td>
                  <td>{stock.options}</td>
                  <td>{stock.cost}</td>
                  <td>{stock.value}</td>
                  <td className={stock.positive_total_gain ? 'positive' : 'negative'}>{stock.total_gain}</td>
                  <td>
                    <TradeButton />
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
