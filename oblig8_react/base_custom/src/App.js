import { Link, Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import Navigation from './components/Navigation'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>

        <Route path="movies">
          <Route index element={<Movies />} />
        </Route>

        <Route path="/actors" />
        <Route path="/actors/:name" />
      </Routes>
      
    </>
  )
}
