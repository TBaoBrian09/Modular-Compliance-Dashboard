import { Link } from 'react-router-dom'
import Topbar, { TopbarLeft, TopbarRight } from './topbar.style'
import TopbarSearch from './topbarSearch'
import { shallowEqual, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/index'
import TopbarUser from './topbarUser'

function storeSelector(state) {
  return {
    loading: state.Auth.loading,
    view: state.App.view,
    username: state.Auth.user?.name
  }
}

const TopbarContainer = () => {
  const { loading, view, username } = useSelector(storeSelector, shallowEqual)

  return (
    <>
      <Topbar>
        <TopbarLeft>
          <Link to="/" className='logo'>
            <img src='/images/icons/cozrum_logo2.svg' alt='logo' />
          </Link>
          {/* {view !== 'MobileView' && <TopbarSearch />} */}
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
      <Sidebar />
    </>
  )
}

export default TopbarContainer