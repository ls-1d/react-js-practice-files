import store from './app/store.js';

import { cakeActions } from './features/cake/cakeSlice.js';

import { iceCreamActions } from './features/icecream/icecreamSlice.js';

import { fetchUsers } from './features/user/userSlice.js';

console.log('Initial State ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state ', store.getState());
});

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));

// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));

// store.dispatch(iceCreamActions.restocked(3));

store.dispatch(fetchUsers());
unsubscribe();
