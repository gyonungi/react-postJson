import { useEffect, useState } from 'react'
import Card from '../components/card'
import { useGetPostsQuery } from '../store/post'

const Main = () => {
	const [currentPostStart, setCurrentPostStart] = useState(0)
	const { data, isLoading, error } = useGetPostsQuery({
		limit: 7,
		start: currentPostStart,
	})
	const [isMyFetching, setIsFetchingDown] = useState(false)
	const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
	useEffect(() => {
		if (isMyFetching) {
			setCurrentPostStart(prev => {
				return prev < 93 ? prev + 1 : prev
			})
			setIsFetchingDown(false)
		}
	}, [isMyFetching])
	useEffect(() => {
		if (isMyFetchingUp) {
			setCurrentPostStart(prev => {
				return prev > 0 ? prev - 1 : prev
			})
			setIsMyFetchingUp(false)
		}
	}, [isMyFetchingUp])
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])
	const scrollHandler = e => {
		if (e.target.documentElement.scrollTop < 50) {
			setIsMyFetchingUp(true)
		}
		if (
			e.target.documentElement.scrollHeight -
				e.target.documentElement.scrollTop -
				window.innerHeight <
			50
		) {
			setIsFetchingDown(true)
			window.scrollTo(
				0,
				e.target.documentElement.scrollHeight +
					e.target.documentElement.scrollTop
			)
		}
	}
	return (
		<div>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div>
					{data.map(post => (
						<Card key={post.id} {...post} />
					))}
				</div>
			) : null}
		</div>
	)
}

export default Main
