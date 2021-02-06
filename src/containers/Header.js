import React from 'react';
import Profile from '../components/Profile';
// import CodersrankSummary from '@codersrank/summary';

const style = {
  headerColor: {
    tag: "--header-bg-color",
    value: "%2325282c"
  },
  backgroundColor: {
    tag: "--bg-color",
    value: "%23434745"
  },
}

const styleString = `style=${style.backgroundColor.tag}:${style.backgroundColor.value}`;
const widgetOptions = `show-header=false`

const Header = () => (
  <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
              <Profile/>
          </div>
          <div class="column">
            <img 
              src={`https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=vicneto&${widgetOptions}&${styleString}`}
              alt="codersrank"
            />
            {/* <CodersrankSummary username="vicneto"></CodersrankSummary> */}
          </div>
      </div>
      </div>
    </div>
  </section>
);

export default Header;
