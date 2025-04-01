import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'
import HexaColum from './HexaColum' 
import Faq from './Faq' 
import Contact from './Contact'
import Footer from './Footer'
import Timeline from './Timeline'
import Overlay from './Overlay'
import Testimonials from './Testimonials'



function Landing() {
  return (
 <>
 <Header />
 <Navbar />
 <Main />
 <HexaColum />
 <Timeline />
 <Testimonials />
 <Overlay />
 <Faq />
 <Contact />
<Footer />
 </>
  )
}

export default Landing