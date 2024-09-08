import React from 'react'

function Footer(props) {
  return (
    <>
    <div className={`footer bg-${props.mode} py-3`}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p className='text-center' style={{color: props.mode === 'dark'?'white':'black'}}>&copy;  2024 All right reserved. </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
