import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

import withRouter from '../../Common/withRouter'

function VerticalLayout(props) {
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header 
        // toggleMenuCallback={toggleMenuCallback} 
        />
        <Sidebar
        //   theme={leftSideBarTheme}
        //   type={leftSideBarType}
        //   isMobile={isMobile}
        />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>
      {/* {showRightSidebar ? <RightSidebar /> : null} */}
    </React.Fragment>
  )
}

export default withRouter(VerticalLayout)