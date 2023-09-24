const getBarsWidth = (data: [ string, number ][], innerWidth: number):number => {
  const barWidth = 40
  const barsWidth = barWidth*data.length
  console.log(barsWidth)
  if (data.length > 8)
    return barsWidth
  return innerWidth
}

export default getBarsWidth;