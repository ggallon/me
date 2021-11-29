/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { mockNextUseRouter } from '@/utils/test/mockNextUseRouter'

import Home from '../pages/index'

describe('Home', () => {
  // Mocks Next.js route
  mockNextUseRouter({
    pathname: '/',
  })

  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Gwenaël Gallon/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
