import Meta from '../app/utils/meta/Meta'
import Heading from '../app/ui/heading/Heading'

export default function Error500(){
	return(
		<>
			<Meta title='Page not found' />
			<Heading title='500 - Server-side error occurred'/>
		</>

	)
}