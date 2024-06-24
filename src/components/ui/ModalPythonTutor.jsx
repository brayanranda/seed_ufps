import React, { Fragment } from 'react'
import FrameCode from './FrameCode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function ModalPythonTutor({ showModal, url }) {
  return (
    <Fragment>
        <div className="bg-black bg-opacity-75 min-h-screen w-full flex items-center justify-center fixed left-0 top-0 z-50 pt-10">
            <div className="mx-auto w-10/12 flex flex-col items-end">
                 <div className='flex justify-between'>
                    <p>{url}</p>
                    <button onClick={showModal} className="bg-red-500 py-1 px-3 font-black">
                        <FontAwesomeIcon icon={faX} />
                    </button>
                 </div>
                <FrameCode url={url} />
            </div>
        </div>
    </Fragment>
  )
}
