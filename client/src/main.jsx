import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Error from './pages/Error404/Error.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Marketplace from './pages/Marketplace/Marketplace.jsx'
import Lobby from './pages/Lobby/Lobby.jsx'
import Game from './pages/Game/Game.jsx'
import HowToPlay from './pages/Tutorial/HowToPlay.jsx'
import Trade from './pages/Trade/Trade.jsx'
import MyDeck from './pages/Deck/MyDeck.jsx'
import Rewards from './pages/Rewards/Rewards.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/marketplace',
        element: <Marketplace />
      },
      {
        path: '/lobby',
        element: <Lobby />
      },
      {
        path: '/game',
        element: <Game />
      },
      {
        path: '/tutorial',
        element: <HowToPlay />
      },
      {
        path: '/trade',
        element: <Trade /> 
      },
      {
        path: '/mydeck',
        element: <MyDeck />
      },
      {
        path: '/rewards',
        element: <Rewards />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
