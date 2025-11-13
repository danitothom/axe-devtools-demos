import React, { useState } from 'react'

type UseModal = [boolean, () => void]

const useModal = (): UseModal => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return [isOpen, toggle]
}

export default useModal
