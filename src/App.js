
import useApiCall from "./hooks/useApiCall";
import "./App.css"
import Mainpage from "./components/mainpage"
import Info from "./components/info";
import Slider from "./components/decoration-slider";
import service from "./service"

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"


const App = () => {
  const [newsData, loading, error] = useApiCall({}, service.getData)

  if(error) {
    alert(`Error occured: ${error}`)
  }

  return (
    <Router>
      <Slider indexData={newsData.indices}/>
      <div className="nav">
        <Link to="/">ETUSIVU</Link>
        <Link to="/info">INFO</Link>
      </div>
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Mainpage newsData={newsData.news} loading={loading}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
