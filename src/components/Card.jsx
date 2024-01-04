import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Card = ({ id, title, body }) => {
	return (
		<div>
			<div>№ {id}</div>
			<div>Title: {title}</div>
			<div>Body: {body.length > 20 ? body.substring(0, 20) + '...' : body}</div>
			<Link to={`/posts/${id}`}>
				<button>Просмотр</button>
			</Link>
		</div>
	)
}
export default Card
