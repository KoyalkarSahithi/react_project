export const Child=({image,title,desc,price})=>{
    return(
        <>
        <div className="card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <mark>{price}</mark>
        </div>
        </>
    )
}