import { render } from '@testing-library/react'
import Teams from './Teams'

describe('Teams', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<Teams />)
      expect(getByText('Teams Page')).toBeInTheDocument()
   })
})
