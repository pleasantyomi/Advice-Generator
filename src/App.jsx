import Body from './Components/Body'
import ErrorBoundary from './Components/ErrorBoundary'

function App() {

  return (
    <>
    <ErrorBoundary>
       <Body/>
    </ErrorBoundary>
    </>
  )
}

export default App
