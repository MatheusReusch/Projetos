import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import NotFound from './NotFound';
import Game from './Game';
const renderWithRouter = require('./renderWithRouter')

function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100)
}

function divisivelPorDois() {
  return retornaNumeroAleatorio() % 2 === 0
}

test('Testa a aplicação toda', () => {
  const {history} = renderWithRouter(<App />);

  const title = screen.getByTestId('title')
  
  expect(title).toBeInTheDocument();

  const inputName = screen.getByTestId('inputName')
  const link = screen.getByTestId('link')

  expect(link).toBeInTheDocument()

  userEvent.type(inputName, 'Matheus')
  userEvent.click(link)

  expect(history.location.pathname).toBe('/teste')

  const title2 = screen.getByTestId('title2')

  expect(title2).toBeInTheDocument()
  expect(title2).toHaveTextContent('Teste Nerd')

  const buttons = screen.getAllByRole('button')

  expect(buttons).toHaveLength(2)

  const image = screen.getAllByRole('img')

  expect(image).toHaveLength(1)

  const sorteNome = screen.getByTestId('sorteNome')

  expect(sorteNome).toBeInTheDocument()
  expect(sorteNome).toHaveTextContent('Boa sorte, Matheus')

  const timer = screen.getByTestId('timer')

  expect(timer).toHaveTextContent('120 segundos restantes')

  history.push('/saasasas')

  const title3 = screen.getByTestId('title3')

  expect(history.location.pathname).toBe('/saasasas')
  expect(title3).toBeInTheDocument()
  expect(title3).toHaveTextContent('Página não encontrada')
});

test('Testa o NotFound', () => {
  renderWithRouter(<NotFound/>)

  const title3 = screen.getByTestId('title3')

  expect(title3).toBeInTheDocument()
  expect(title3).toHaveTextContent('Página não encontrada')
})

test('Testa o Game', () => {
  renderWithRouter(<Game />)

  const result = screen.getByTestId('result')

  expect(result).toHaveTextContent('')
})

test('Funções Mock', () => {
  retornaNumeroAleatorio = jest.fn()
  retornaNumeroAleatorio()
  retornaNumeroAleatorio()

  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2)
  
  retornaNumeroAleatorio = jest.fn().mockReturnValue(4)

  expect(divisivelPorDois()).toBe(true)

  retornaNumeroAleatorio = jest.fn().mockReset()

  expect(retornaNumeroAleatorio()).toBe(undefined)

  retornaNumeroAleatorio = jest.fn().mockReturnValue(3)

  expect(divisivelPorDois()).toBe(false)

})
