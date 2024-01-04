import { Link, useParams } from 'react-router-dom'
import { useGetPostsByIdQuery } from '../store/post'

const Post = () => {
	const { id } = useParams()
	const { data, isLoading, error } = useGetPostsByIdQuery(id)
	return (
		<>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div>
					<p>{data.id}</p>
					<p>{data.title}</p>
					<p>{data.body}</p>
					<Link to={'/'}>
						<button>Назад</button>
					</Link>
				</div>
			) : null}
		</>
	)
}

export default Post
