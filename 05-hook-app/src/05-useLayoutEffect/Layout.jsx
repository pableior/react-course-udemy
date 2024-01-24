import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";



export const Layout = () => {
  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`);
  console.log( {data, isLoading, hasError});
  

  return (
    <>
        <h1>BreakingBad Quotes</h1> 
        <hr/>

        {
          isLoading
            ? (
              <LoadingQuote />
            )
            : (
              <Quote title = {data.title} id = {data.id} userId = {data.userId} />
            )
        }

        <button 
          className="btn btn-primary"
          disabled = {isLoading}
          onClick={ () => increment() }
        >
          Next Post
        </button>




    </>
  )
}
