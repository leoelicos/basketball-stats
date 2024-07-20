import { render, screen } from '@testing-library/react'
import App from './App'

describe('app', () => {
   it('renders the correct text', () => {
      const { getByText } = render(<App />)
      expect(getByText('Basketball Stats')).toBeInTheDocument()
      screen.logTestingPlaygroundURL()
   })
})
