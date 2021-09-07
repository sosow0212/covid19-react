import React from 'react'
// rafce 치면 알아서 기본 코드 제공함

const header = () => {
    return (
        <header className="header">
            <h1>COVID-19</h1>
            <select>
                <option>국내</option>
                <option>세계</option>
            </select>
        </header>
    )
}

export default header
