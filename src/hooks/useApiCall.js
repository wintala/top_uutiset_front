import { useEffect, useState } from "react"

const useApiCall = (initial, fetchFunc) => {
	const [loading, setloading] = useState(true)
	const [data, setData] = useState(initial)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchFunc()
		.then(d => {
			setData(d)
			setloading(false)
		})
		.catch(e => {
			setError(e)
			setloading(false)
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return [data, loading, error]
}

export default useApiCall