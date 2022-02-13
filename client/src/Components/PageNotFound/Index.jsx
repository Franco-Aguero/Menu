import { Link } from "react-router-dom";
import ImgNotFound from "./pageNotFound.png";
/* import Robot from "./robot.png"; */
const PageNotFound = () => {
    const resetToken = () => {
        localStorage.clear();
        return window.location.assign(`${process.env.REACT_APP_URL_CLIENT}/login`)
    };
    return (
        <article className='d-flex flex-column align-items-center' style={{height:"calc(100vh - 2.6rem)",color:"#afa9a9"}}>
            <div className="d-flex align-items-center">
                <img className="me-5" src={ImgNotFound} alt="Page not found" />
                <h2 className="ms-4 text-red-500 fst-italic">Page Not Found</h2>
            </div>
            {/* <div className="d-flex "> */}
                <div className="d-flex flex-column mt-5">
                    <Link to="/home" className="btn btn-outline-secondary btn-sm fs-6 fw-normal" style={{padding:"4px 35px"}}>Go to menu</Link>
                    
                    <span className="text-center fs-5 fw-normal my-1"> or </span>
                    
                    <button onClick={resetToken} className="btn btn-outline-secondary btn-sm btn-sm fs-6 fw-normal" style={{padding:"4px 35px"}} >Sign out</button>
                </div>
                {/* <img className="" src={Robot} alt="Robot" /> */}
            {/* </div> */}
        </article>
    )
}
export default PageNotFound;