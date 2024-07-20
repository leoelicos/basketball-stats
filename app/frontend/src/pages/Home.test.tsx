import { render } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<Home />)
      expect(getByText('Home Page')).toBeInTheDocument()
   })
})
