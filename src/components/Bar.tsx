import React from 'react'

function Bar(props: { children: string | number | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
  return (
    <div className="flex justify-center items-center bg-white w-full h-10 gap-3">
      {props.children}
    </div>
  )
}

export default Bar
