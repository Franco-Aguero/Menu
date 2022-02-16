import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center' 
            style={{background:"white", width:"300px", height:"250px", position:"absolute",left:"calc(50% - 150px)",top:"calc(50% - 125px)",
            boxShadow:"0px 0px 2px -1px black", border:"1px solid #ced4da"}}
          >
            <Spinner animation="border" variant="success" style={{width: "3rem", height: "3rem",borderWidth:".5rem"}} />
            <h2 className='mt-4'>Loading</h2>
          </div>
    )
}
export default LoadingSpinner;