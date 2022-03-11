

const OrderManager = ({displayOrder, setDisplayOrder}) => {

	const handleOrderChange = (index, moveUp) => {
    if ((index === 0 && moveUp) || (index === displayOrder.length - 1 && !moveUp)) {
      return null
    }
    const newOrder = [...displayOrder]
    const tarnsition = moveUp ? 1 : - 1
    newOrder[index] = displayOrder[index - tarnsition]
    newOrder[index - tarnsition] = displayOrder[index]

    setDisplayOrder(newOrder)
  }

	return(
		<div className="order-manager">
			<ol className="order-list">
				{displayOrder.map((s,i) => 
				<li key={s} className="order-item">
					<div>{s}</div>
					<div className="arrow-up" onClick={() => handleOrderChange(i, true)}></div>
					<div className="arrow-down" onClick={() => handleOrderChange(i, false)}></div>
				</li>
				)}
			</ol>
		</div>
	)
}

export default OrderManager