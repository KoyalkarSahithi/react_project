import { data } from "../Utilities/data"
import { Child } from "./Child"
export const Parent = () => {
    return (
        <>
            <div className="parent">{
                data.map((item) => {
                    return <Child key={item.id} title={item.title} desc={item.description} price={item.price} image={item.image} />
                })
            }
            </div>
        </>
    )
}