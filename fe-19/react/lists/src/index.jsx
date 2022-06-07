import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const users = [
  { name: 'Tom', age: 20, id: 11 },
  { name: 'Bob', age: 100, id: 22 },
  { name: 'Rob', age: 32, id: 33 },
  { name: 'Rim', age: 45, id: 44 },
  { name: 'Skin', age: 27, id: 55 },
  { name: 'Bobby', age: 26, id: 66 },
  { name: 'Jack', age: 19, id: 77 },
  { name: 'Bom', age: 21, id: 88 },
  { name: 'DOM', age: 22, id: 99 },
  { name: 'Toretto', age: 60, id: 111 },
];

ReactDOM.render(<UsersList users={users} />, rootElem);
