import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('Tudo está funcionando corretamente', () => {
  render(<App />)
  const inputName = screen.getByTestId('input')
  expect(inputName).toBeInTheDocument()
  const jogar = screen.getByTestId('link')
  expect(jogar).toBeInTheDocument()

  userEvent.type(inputName, 'Matheus')
  userEvent.click(jogar)

  const playerName = screen.getByTestId('playerName')
  expect(playerName).toBeInTheDocument()
  expect(playerName).toHaveTextContent("Matheus's Game")
  const divs = screen.getAllByTestId('quadrado')
  const reset = screen.getByTestId('reset')
  const link2 = screen.getByTestId('link2')
  
  expect(divs).toHaveLength(9)
  expect(reset).toBeInTheDocument()
  expect(link2).toBeInTheDocument()
  
  userEvent.click(divs[0])

  expect(divs[0].firstChild.innerText).toBe('X')

  userEvent.click(divs[1])

  expect(divs[1].firstChild.innerText).toBe('O')

  userEvent.click(divs[2])

  expect(divs[2].firstChild.innerText).toBe('X')
})
