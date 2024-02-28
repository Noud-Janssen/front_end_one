

const Item = ({text}: {text: string}, {index}: {index: BigInt}) => {
    return (
        <div>
            <div>{index.toString()}</div>
            <p className="border">{text}</p>
        </div>
    
    )
}

export default Item