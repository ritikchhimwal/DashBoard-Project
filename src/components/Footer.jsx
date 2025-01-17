import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                <span>Ritik Chhimwal</span>
            </strong>
            .All Rights Reserved
        </div>
        <div className="credits">
            Designed by <a href='#'>Ritik</a>
        </div>
    </footer>
  )
}

export default Footer