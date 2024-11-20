import { Link } from 'react-router-dom'
import Topbar, { TopbarLeft, TopbarRight } from './topbar.style'
import TopbarSearch from './topbarSearch'
import { shallowEqual, useSelector } from 'react-redux'
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
            <img style={{ width: 25, height: 25 }} src='/images/logoEd.png' alt='logo' />
          </Link>
          {view !== 'MobileView' && <TopbarSearch />}
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