import { Link } from 'react-router-dom'
import Topbar, { TopbarLeft, TopbarRight } from './topbar.style'
import { shallowEqual, useSelector } from 'react-redux'
import TopbarUser from './topbarUser'
import {Box} from "@components/utility/styles"

function storeSelector(state) {
  return {
    loading: state.Auth.loading,
    view: state.App.view,
    username: state.Auth.user?.name
  }
}

const TopbarContainer = () => {
  const { loading, username } = useSelector(storeSelector, shallowEqual)

  return (
    <>
      <Topbar>
        <TopbarLeft>
          <Link to="/" className='logo'>
            <img style={{ width: 45 }} src='/images/koi.png' alt='logo' />
          </Link>
          <Box width="auto">MC Dashboard</Box>
        </TopbarLeft>
        <TopbarRight>
          {!loading &&
            (
              <></>
            )
          }
          <TopbarUser username={username} />
        </TopbarRight>
      </Topbar>
    </>
  )
}

export default TopbarContainer