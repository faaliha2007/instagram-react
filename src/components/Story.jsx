

function Story({image,name})
{
    return (
        <div className="story">
<div className="round">

    <img src={image} alt={name}/>
</div>

<p>{name}</p>
        </div>
    )
}

export default Story;