import ReactDom from 'react-dom'

{/*
    Here, we are using 'handleCloseModal' as a javascript function
    that will make it so that clicking the greyed out overlay
    in the background of the 'sign in' portal will exit out
    (instead of just having, say, an 'x' on the rop right)
    */}

export default function Modal(props) {
    const { children, handleCloseModal } = props

    return ReactDom.createPortal(
        <div className='modal-container'>
            <button onClick={handleCloseModal} className='modal-underlay' />
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}