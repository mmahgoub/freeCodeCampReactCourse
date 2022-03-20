import logo from './logo.svg';

function Page({test}) {

    const firstName = "Joe"
    const lastName = "Schmoe"

    console.log(test)

  return (
    <h1>{test} {firstName} {lastName}!</h1>
  )
}

export default Page