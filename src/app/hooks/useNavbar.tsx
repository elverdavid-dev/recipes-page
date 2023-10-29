'use client'

import { useState } from 'react'

const useNavbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = () => { setIsOpenMenu(!isOpenMenu) }
  return { isOpenMenu, closeMenu }
}

export default useNavbar
