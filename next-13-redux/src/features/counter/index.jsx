"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './slice';
import styles from './index.module.css';

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.div}>        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
           -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>      
      </div>
    </div>
  )
}