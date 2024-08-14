import React from 'react'

interface propsType{
    size: string
}

const CartCountBadge: React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} right-20 top-5 rounded-full grid place-items-center`}>
      0
    </div>
  )
}

export default CartCountBadge
