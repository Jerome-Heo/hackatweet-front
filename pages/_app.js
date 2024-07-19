import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import tweets from '../reducers/tweets';
import 'antd/dist/antd.css';


const store = configureStore({
  reducer: { user, tweets },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hack a Tweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
