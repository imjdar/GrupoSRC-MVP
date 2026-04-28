import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import { describe, it, expect, vi } from 'vitest'

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header Component', () => {
  it('renders the logo text correctly', () => {
    render(<Header />)
    expect(screen.getByText('SRS')).toBeDefined()
    expect(screen.getByText('GRUPO EMPRESARIAL')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByText('INICIO')).toBeDefined()
    expect(screen.getByText('EL GRUPO')).toBeDefined()
    expect(screen.getByText('PORTAFOLIO')).toBeDefined()
    expect(screen.getByText('ACTUALIDAD')).toBeDefined()
    expect(screen.getByText('CONTACTO')).toBeDefined()
  })
})
