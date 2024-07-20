import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar', () => {
   test('renders the app bar with title', () => {
      const { getByText } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const titleElement = getByText(/Basketball Stats/i)
      expect(titleElement).toBeInTheDocument()
   })

   test('renders the Home button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const homeButton = getByRole('link', { name: /Basketball Stats/i })
      expect(homeButton).toBeInTheDocument()
      expect(homeButton).toHaveAttribute('href', '/')
   })

   test('renders the Players button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const playersButton = getByRole('link', { name: /Players/i })
      expect(playersButton).toBeInTheDocument()
      expect(playersButton).toHaveAttribute('href', '/players')
   })

   test('renders the Teams button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const teamsButton = getByRole('link', { name: /Teams/i })
      expect(teamsButton).toBeInTheDocument()
      expect(teamsButton).toHaveAttribute('href', '/teams')
   })

   test('renders the Games button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const gamesButton = getByRole('link', { name: /Games/i })
      expect(gamesButton).toBeInTheDocument()
      expect(gamesButton).toHaveAttribute('href', '/games')
   })
   test('renders the Records button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const gamesButton = getByRole('link', { name: /Records/i })
      expect(gamesButton).toBeInTheDocument()
      expect(gamesButton).toHaveAttribute('href', '/records')
   })
   test('renders the AI button with correct link', () => {
      const { getByRole } = render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      )
      const gamesButton = getByRole('link', { name: /AI/i })
      expect(gamesButton).toBeInTheDocument()
      expect(gamesButton).toHaveAttribute('href', '/ai')
   })
})
