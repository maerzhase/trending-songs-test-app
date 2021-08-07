import React from 'react'
import { render } from '../testUtils'
import { getStoreInstances } from '../../stores/index'
import Home from '../../pages/index'

const { dataStore } = getStoreInstances(null)

const initStores = async () => {
  await dataStore.initialize()
  return {}
}

describe('Home page', () => {
  it('matches snapshot', () => {
    return initStores().then(() => {
      const { asFragment } = render(<Home />, {})
      expect(asFragment()).toMatchSnapshot()
    })
  })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
})
