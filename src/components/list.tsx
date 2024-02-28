import Item from "@/components/item";


const List = () => {
    return (
        <div className="border flex-col gap-10">
            {
                Array(100).fill(null).map((_, index)=>{
                    return(<Item text={index.toString()} index={index}/>);
                })
            }
        </div>
    
    )
}

export default List