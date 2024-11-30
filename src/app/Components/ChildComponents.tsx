

const ChildComponent = (props:any) => {
    console.log(props)
  return (
    <fieldset className="bg-pink-300 h-01 w-80 m-20  flex justify-center">
    <div>
      <h1 className="text-2xl flex justify-center">{props.name}</h1>
      <h1 className="text-2xl flex justify-center">{props.favoriteDish}</h1>
      <h1 className="text-2xl flex justify-center">{props.address}</h1>
    </div>
    </fieldset>
  )
}

export default  ChildComponent

