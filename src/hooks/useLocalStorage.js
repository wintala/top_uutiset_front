
import { useEffect, useState } from "react"

const useLocalStorage = (localStorageKey, initial, alwaysSaveToStorage) => {
	const [data, setData] = useState(initial)

	useEffect(() => {
		const storedValue = window.localStorage.getItem(localStorageKey)
    if (storedValue) {
      setData(JSON.parse(storedValue))
    }
	}, [localStorageKey])

	const setValue = (newValue) => {
		setData(newValue)

		if (alwaysSaveToStorage) {
			window.localStorage.setItem(localStorageKey, JSON.stringify(newValue))
		}
	}

	const saveToStorage = () => {
		window.localStorage.setItem(localStorageKey, JSON.stringify(data))
	}
	
	return [data, setValue, saveToStorage]
}

export default useLocalStorage