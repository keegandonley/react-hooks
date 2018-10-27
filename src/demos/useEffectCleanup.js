import React, { useState, useEffect} from 'react';
import text from './effectCleanup.text.js';

function UseEffectCleanup() {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		const timeDelay = 300;
		const timer = setInterval(() => {
			setTimer(timer);
			setTime(time + timeDelay);
		}, timeDelay);

		return function cleanup() {
			clearInterval(timer);
		}
	});

	return (
		<div className="App-header">
			<span>
			<strong><a href="https://reactjs.org/docs/hooks-effect.html">useEffect</a></strong> with cleanup | State is updated every 300ms using setInterval
			</span>
			<div>
			Rendered {time}ms ago (Current timer: {timer})
			</div>
			<pre className="App-Demo">
			{text}
			</pre>
		</div>
	);	
}

export default UseEffectCleanup;
