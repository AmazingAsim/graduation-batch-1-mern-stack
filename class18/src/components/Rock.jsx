import React from 'react'

export default function Rock() {
  return (
    <div>
        <div className='container'>
            <div className="row">
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(0)}} className="img-fluid" src="rock.png" alt="" />
                </div>
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(1)}} className="img-fluid" src="paper.png" alt="" />
                </div>
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(2)}} className="img-fluid" src="scissor.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
