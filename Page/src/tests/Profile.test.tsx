import { render } from '@testing-library/react'
import Profile from '../components/templates/Profile'

test('renders profile component', () => {
  const { getByText } = render(<Profile />)
  expect(getByText('Nome do Usuário')).toBeDefined()
})
