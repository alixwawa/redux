const redux = require('redux');

//reducer
//must give state a initial state. in this example state = {counter: 0}
const counterReducer = (state = { counter: 0 }, action) => {
	return {
		counter: state.counter + 1,
	};
};

//store with reducer
const store = redux.createStore(counterReducer);

//subscriber
const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({
	type: 'increment',
});
