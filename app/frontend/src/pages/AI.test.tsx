import { render } from '@testing-library/react'
import AI from './AI'

describe('AI', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<AI />)
      expect(getByText('AI Page')).toBeInTheDocument()
   })
})
