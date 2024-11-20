import { Link } from 'react-router-dom'

import Image from "../../image/rob.png"

import FourZeroFourStyleWrapper from './404.style'

const ErrorPage = () => {
  return (
    <FourZeroFourStyleWrapper>
      <div className='content-404'>
        <h1>404</h1>
        <h3>
          Not Found
        </h3>
        <Link to="/">
          <button>
            Go back home page
          </button>
        </Link>
        <div className='artwork-404'>
          <img alt='' src={Image} />
        </div>
      </div>
    </FourZeroFourStyleWrapper>
  )
}

export default ErrorPage