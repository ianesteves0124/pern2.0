

const SecondComponent = ({item}) => {
    return (
        <li className="flex justify-center items-center flex-col m-10 p-10 border border-solid border-slate-400 " key={item.id}>
            <img src={item.poster} alt={item.title} width="300px"/>
            <p className="font-semibold text-white">{`${item.title} by ${item.director} was release on ${item.year}`}</p>
            <p className="font-bold text-red-500">{`Rating: ${item.rating}`}</p>
            <p className="font-semibold text-white">{`Time: ${item.runtime} minutes`}</p>
          </li>
    )
}

export default SecondComponent;