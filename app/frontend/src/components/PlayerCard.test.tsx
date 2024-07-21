import { render } from '@testing-library/react'
import PlayerCard from './PlayerCard'

const mockPlayer = {
   firstName: 'John',
   lastName: 'Doe',
   image: 'http://example.com/image.jpg',
   url: 'http://example.com',
   team: 'Example Team',
   position: 'C-F',
   height: '6.2',
   weight: '220 kg',
   experience: 5,
   country: 'USA'
}

describe('PlayerCard Component', () => {
   it('renders player information correctly', () => {
      const { getByRole, getByAltText, getByText } = render(
         <PlayerCard {...mockPlayer} />
      )

      const imgElement = getByAltText(
         `${mockPlayer.firstName}-${mockPlayer.lastName}`
      )
      expect(imgElement).toHaveAttribute('src', mockPlayer.image)

      expect(getByText(mockPlayer.firstName)).toBeInTheDocument()

      expect(getByText('Center-Forward')).toBeInTheDocument()

      expect(getByText(mockPlayer.team)).toBeInTheDocument()

      const linkElement = getByRole('link')
      expect(linkElement).toHaveAttribute('href', mockPlayer.url)
      expect(linkElement).toHaveAttribute(
         'aria-label',
         `To learn more, visit ${mockPlayer.firstName} ${mockPlayer.lastName}'s NBA profile`
      )
   })

   it('if a position code cannot be found, render the code', () => {
      const { getByText } = render(
         <PlayerCard {...{ ...mockPlayer, position: 'ABCD' }} />
      )
      expect(getByText('ABCD')).toBeInTheDocument()
   })
})
