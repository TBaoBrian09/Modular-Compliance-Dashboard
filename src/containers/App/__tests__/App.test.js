/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable react/display-name */
import React from "react";
import configureStore from "redux-mock-store"
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import App from "../App";
import actions from "../../../redux/auth/actions"
// import { fetchAuthSession } from 'aws-amplify/auth';

// Mocks
jest.mock('../../Topbar/index', () => {
  return () => <div>Topbar</div>
})
jest.mock('../../Footer/index', () => {
  return () => <div>Footer</div>
})
jest.mock('../../Sidebar/index', () => {
  return () => <div>Sidebar</div>
})
jest.mock('../AppRouter', () => {
  return () => <div>AppRouter</div>
})
jest.mock('../../../hooks', () => ({
  getSessionAws: jest.fn(() => Promise.resolve({ idToken: { payload: { user: 'testUser' } } }))
}));

// Redux action mock
jest.mock('../../../redux/auth/actions', () => ({
  update: jest.fn((payload) => ({ type: 'UPDATE_USER', payload }))
}));

jest.mock('aws-amplify/auth', () => ({
  fetchAuthSession: jest.fn(),
}))

const mockStore = configureStore([]);
let store;

describe('App Component', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        userInfo: null
      }
    })

    // Mock actions update to check dispactch
    jest.spyOn(actions, 'update').mockImplementation(() => ({ type: 'AUTH_UPDATE' }));
  })

  it('render all main components', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if components are rendered
    expect(screen.getByText('Topbar')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('AppRouter')).toBeInTheDocument();
  });

  // it('calls getSessionAws and dispatches update action', async () => {
  //   // Mock the value from fetchAuthSession
  //   fetchAuthSession.mockResolvedValue({
  //     tokens: { idToken: { payload: { name: 'testUser' } } }
  //   })

  //   render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );

  //   // Wait for the useEffect to finish (or async logic)
  //   await waitFor(() => expect(fetchAuthSession).toHaveBeenCalledTimes(1));

  //   // Check action update dispatched to correct value
  //   const actionsDispatched = store.getActions();
  //   expect(actionsDispatched).toContainEqual({
  //     type: 'AUTH_UPDATE',
  //     payload: { userInfor: { name: 'testUser' } }
  //   })
  // })

})