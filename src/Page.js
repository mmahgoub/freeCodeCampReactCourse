import logo from './logo.svg';

function Page({salutation, firstName, lastName}) {

  return (
    <h1>{salutation === "Hi" && "Hullo"} {firstName} {lastName}!</h1>
  )
}

export default Page