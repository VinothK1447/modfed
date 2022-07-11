import React from 'react'
import './App.css'

const ReceiverApp = React.lazy(() => import('PROVIDER/App'))
const ReceiverGridApp = React.lazy(() => import('PROVIDER/Grid'))
const BtnComp = React.lazy(() => import('EISPortal/Btn'))
const EISGrid = React.lazy(() => import('EISPortal/EISGrid'))

const App = () => (
	<div className='provider-app'>
		<h2>Hi from Provider App</h2>
		<React.Suspense fallback='Loading...'>
			<ReceiverApp />
		</React.Suspense>
		<React.Suspense fallback='Loading...'>
			<ReceiverGridApp />
		</React.Suspense>
		<React.Suspense fallback='Loading...'>
			<BtnComp />
		</React.Suspense>
		<React.Suspense fallback='Loading...'>{/* <EISGrid /> */}</React.Suspense>
	</div>
)

export default App
