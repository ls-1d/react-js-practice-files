import { createContext } from 'react';

const UserContext = createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// const { UserProvider, UserConsumer } = UserContext;

export { UserProvider, UserConsumer };
