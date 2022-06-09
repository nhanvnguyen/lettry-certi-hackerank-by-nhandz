import React from 'react'

export default function ContainerText(props) {
  return (
    <div>
        <div>
            {props.data.title}
        </div>
        <div>
            {props.data.string}
        </div>
    </div>
  )
}
