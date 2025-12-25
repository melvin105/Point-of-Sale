import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import { AppProviders } from './providers'
import { AppRoutes } from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppProviders>
          <AppRoutes />
        </AppProviders>
      </BrowserRouter>
    </Provider>
  )
}

export default App

