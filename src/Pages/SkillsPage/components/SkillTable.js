import React from 'react'

export default function SkillTable() {
    return (
        <div className="skill-table-list">
            <table>
                <thead>
                    <tr>
                        <th>Front End</th>
                        <th>Back End</th> 
                        <th>Other</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Express</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>Moment</td>
                        <td>Moment</td>
                        <td>Git</td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>Firebase</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Socket.io</td>
                        <td>Socket.io</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Sequelize</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Axios</td>
                        <td>Node Js</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Redux</td>
                        <td>Postgres</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Stripe</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
