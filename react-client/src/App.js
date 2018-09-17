import React from 'react';
import Main from './components/Main/Main'
import FooterLayout from './components/FooterLayout/FooterLayout'
import HeaderLayout from './components/HeaderLayout/HeaderLayout';

//See https://github.com/le-kang/AIP2018/blob/master/week04/react-router-example/src/App.js for routing

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        <Main />
        <FooterLayout />
      </div>
    );
  }
  
export default App;

// class App extends Component {
//     render() {
//         return (
//             <div class="ui grid">
//                 <div class="four wide column">
//                     <SideMenu />
//                 </div>
//                 <div class="twelve wide stretched column">
//                     <h1>Job Matcher</h1>
//                     <Router history={history}>
//                         <Switch>
//                             <Route path='/login' component={Login} />
//                             <Route path='/register' component={Register} />
//                             <Route path='/:usertype/positions' component={AdvertisedPositions} />
//                             <Route path='/:usertype/job-info/:id' component={JobInfo} />
//                             <Route render={() => <Redirect to="/login" />} />
//                         </Switch>
//                     </Router>
//                 </div>
//             </div>
//         );
//     }
// }


