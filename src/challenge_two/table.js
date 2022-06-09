import React from 'react'
import style from './style.css'
export default function TableChanllenge(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                {props.data.map((x) => (
                    <tr>
                        <td>{x.title}</td>
                        <td>{x.vote}</td>
                        <td>{x.date}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
