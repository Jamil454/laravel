import React from 'react'
import { usePage } from '@inertiajs/react'
import './style.css'

export default function Index() {
    const { posts, pgtitle } = usePage().props
  return (
    <div>
        <h1>{pgtitle}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis sed tenetur nostrum pariatur enim sit ipsa, provident totam maiores, aliquam, blanditiis vitae a eligendi similique sapiente molestias recusandae ad.</p> <br />

        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {posts.map(({ id, title, body }) => (
            <tr>
                <td>{ id }</td>
                <td>{ title }</td>
                <td>{ body }</td>
            </tr>
               ))}
        </table>
    </div>
  )
}
