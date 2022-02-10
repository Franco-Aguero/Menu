
const CardHome = ({ name, image, features}) => {    //options view details and delete of menu
    return (
        <div class="col-3 d-print-flex justify-content-center" style={{width:"220px",}}>
            <div class="card">
            <img src={image} class="card-img-top" alt={name} style={{width:"200px", height:"200px", objectFit:"cover" , margin:".5rem auto 0"}}/>
            <div class="card-body">
                <h5 class="card-title text-center">{name}</h5>
            </div>
            </div>
        </div>
    )
}
export default CardHome;
//GET https://api.spoonacular.com/food/menuItems/424571 es para el details