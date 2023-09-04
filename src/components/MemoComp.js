import React from 'react'

function MemoComp() {
    console.log("rendering MemoComponent")
  return (
    <div>MemoComp
        
    </div>
  )
}

export default React.memo(MemoComp)