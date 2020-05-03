import React, { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'

const Pie = (props) => {
  const [dataset, setDateset] = useState(props.dataset)
  const ref = useRef()

  useEffect(() => {
    const svg = d3.select(ref.current)
    const pie = d3.pie().sort(null).value(d => d.value)
    const arc = d3.arc().innerRadius(80)

    const size = {
      width: 600,
      height: 600
    }

    arc.outerRadius(size.width / 2)
    svg.attr("width", size.width).attr("height", size.height)

    const g = svg.selectAll(".arc")
      .data(pie(dataset))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", `translate(${size.width / 2}, ${size.height / 2})`)
  
    g.append("path")
      .attr("stroke", "white")
      .attr("fill", d => d.data.color)

    const maxValue = d3.max(dataset, d => d.value)

    g.append("text")
      .attr("dy", ".35em")
      .attr("font-size", d => d.value / maxValue * 30)
      .attr("fill", "white")
      .style("text-anchor", "middle")
      .text(d => d.data.legend)

    g.selectAll("text").attr("transform", d => `translate(${arc.centroid(d)})`)
    
    g.selectAll("path")
      .transition()
      .ease(d3.easeCircleInOut)
      .delay(500)
      .duration(1000)
      .attrTween("d", d => {
        const interpolate = d3.interpolate(
          { startAngle: 0, endAngle: 0 },
          { startAngle: d.startAngle, endAngle: d.endAngle }
        )
        return function (t) {
          return arc(interpolate(t))
        }
      })
  }, [dataset])

  return (
    <svg ref={ref}/>
  )
}

export default Pie