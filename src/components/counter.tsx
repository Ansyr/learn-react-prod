import React, {useState} from 'react';
import styles from "./styles.module.scss"

const Counter = () => {
    const [count,setCount] = useState(0)

    return (
        <div className={styles.btn}>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default Counter;