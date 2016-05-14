var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');
var CircleEventHandler = require('./components/circleEventHandler');
var RadialTree = require('./components/convertRadialTree');
var BestCanidate = require('./components/convertBestCanidate');
var ColorMesh = require('./components/convertColorMesh');
var MergeSort = require('./components/convertMergeSort');
var RoundedRectangles = require('./components/convertRoundedRectangles');
var CircleTransitions = require('./components/circleTransitions');
var CongressionalDistricts = require('./components/convertCongressionalDistricts');
var CalendarView = require('./components/convertCalendarView');

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <Route path='bubbleChart' component={BubbleChart} />
      <Route path='circleEventHandler' component={CircleEventHandler} />
      <Route path='radialTree' component={RadialTree} />
      <Route path='colorMesh' component={ColorMesh} />
      <Route path='bestCanidate' component={BestCanidate} />
      <Route path='mergeSort' component={MergeSort} />
      <Route path='roundedRectangles' component={RoundedRectangles} />
      <Route path='circleTransitions' component={CircleTransitions} />
      <Route path='congressionalDistricts' component={CongressionalDistricts} />
      <Route path='calendarView' component={CalendarView} />
    </Route>
  </Router>
)
