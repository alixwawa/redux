const redux = require('redux');

//reducer
//must give state a initial state. in this example state = {counter: 0}
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
    }
    
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

//store with reducer
const store = redux.createStore(counterReducer);

//subscriber
const counterSubscriber = () => {
	const latestState = store.getState();
	console.log('hi', latestState);
};

store.subscribe(counterSubscriber);

//dispatch an action
store.dispatch({
	type: 'increment',
});

store.dispatch({
	type: 'decrement',
});
