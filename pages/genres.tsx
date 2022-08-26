import { GetStaticProps, NextPage } from 'next'
import { GenreService } from '../app/services/genre.service'
import { ICollection } from '../app/components/screens/collections/collection.interface'
import Collections from '../app/components/screens/collections/Collections'
import Error404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({ collections}) => {
	return collections ?  <Collections collections={collections || []} /> : <Error404/>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: { collections },
		}
	} catch (e) {

		return {
			props: {},
			notFound: true,
		}
	}
}

export default GenresPage
