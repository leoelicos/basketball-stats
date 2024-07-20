import { render } from '@testing-library/react'
import Games from './Games'

describe('Games', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<Games />)
      expect(getByText('Games Page')).toBeInTheDocument()
   })
})
