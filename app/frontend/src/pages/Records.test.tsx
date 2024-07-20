import { render } from '@testing-library/react'
import Records from './Records'

describe('Records', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<Records />)
      expect(getByText('Records Page')).toBeInTheDocument()
   })
})
