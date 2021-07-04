import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

// import Tommy from './Components/Tommy'
// import Bigdrop from './Components/Bigdrop'
// import Cuker from './Components/Cuker'

const url = 'https://course-api.com/react-tabs-project'

class ResumeApp extends React.Component {

  state = {
    name: 'athos',
    jobs: []
  }

  componentDidMount = () => {
    const fetchJobs = async () => {
      const response = await fetch(url)
      const jobs = await response.json()
      this.setState(() => ({ jobs }))
    }
    fetchJobs()
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/tommy'>
              {this.state.jobs.map((job) => {
                if (job.order === 3) {
                  return <Tommy
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    dates={job.dates}
                    duties={job.duties}
                  />
                }
              })}
            </Route>
            <Route path='/cuker'>
              {this.state.jobs.map((job) => {
                if (job.order === 1) {
                  return <Cuker
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    dates={job.dates}
                    duties={job.duties}
                  />
                }
              })}
            </Route>
            <Route path='/bigdrop'>
              {this.state.jobs.map((job) => {
                if (job.order === 2) {
                  return <Bigdrop
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    dates={job.dates}
                    duties={job.duties}
                  />
                }
              })}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Header = () => (
  <header>
    <h1>Experience</h1>
    <NavLink to="/tommy" activeClassName="is-active">Tommy</NavLink>
    <NavLink to="/bigdrop" activeClassName="is-active">Bigdrop</NavLink>
    <NavLink to="/cuker" activeClassName="is-active">Cuker</NavLink>
  </header>
)

const Tommy = (props) => (

  <div>
    <h3>{props.title}</h3>
    <h4>{props.company}</h4>
    <p>{props.dates}</p>
    {props.duties.map((dutie) => {
      return <li key={props.id}>{dutie}</li>
    })}

  </div>
)

const Cuker = (props) => (
  <div>
    <h3>{props.title}</h3>
    <h4>{props.company}</h4>
    <p>{props.dates}</p>
    {props.duties.map((dutie) => {
      return <li key={props.id}>{dutie}</li>
    })}
  </div>
)

const Bigdrop = (props) => (
  <div>
    <h3>{props.title}</h3>
    <h4>{props.company}</h4>
    <p>{props.dates}</p>
    {props.duties.map((dutie) => {
      return <li key={props.id}>{dutie}</li>
    })}
  </div>
)

ReactDOM.render(
  <ResumeApp />,
  document.getElementById('root')
);


