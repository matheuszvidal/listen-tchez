import React from 'react'

function Bar(props: { children: string | number | boolean | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
  return (
    <div className="flex justify-center items-center bg-zinc-200 w-full h-10 gap-3">
      {props.children}
    </div>
  )
}

export default Bar
