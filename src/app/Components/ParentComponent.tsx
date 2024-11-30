import ChildComponent from './ChildComponents'


const ParentComponent = () => {
  let name = " Name: Ali Jawwad"
  let favoriteDish = " Favorite Dish : Biryani"
  let address = " Address : Korangi no 2"
  return (
    <div className="mt-9">
      <ChildComponent name={name} />
      <ChildComponent favoriteDish={favoriteDish} />
      <ChildComponent address={address} />
    </div>
  )
}

export default ParentComponent
