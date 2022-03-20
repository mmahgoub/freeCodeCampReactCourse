import logo from './logo.svg';

function Page(props) {

    const firstName = "Joe"
    const lastName = "Schmoe"

    console.log(props)

  return (
    <h1>{props.test} {firstName} {lastName}!</h1>
  )
}

export default Page