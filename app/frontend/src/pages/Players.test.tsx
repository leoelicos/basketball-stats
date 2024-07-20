import { render } from '@testing-library/react'
import Players from './Players'

describe('Players', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<Players />)
      expect(getByText('Players Page')).toBeInTheDocument()
   })
})
