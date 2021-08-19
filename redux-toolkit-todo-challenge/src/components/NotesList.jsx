import React from 'react'
import { useSelector } from 'react-redux'

function NotesList() {

    const items = useSelector(state => state.notes.items)
    console.log(items)

    return (
        <div>
            <div className="greenBox" style={{ backgroundColor: "white", color: "black" }}>
                <ul style={{listStyleType: "none !important"}}>
                    {
                        items.map((item) => (
                            <div key={item.id}> {item.color === "" && item.title}</div>
                        ))

                    }
                </ul>
            </div>

            <div className="box" style={{ marginTop: "10px !important" }}>

                <div className="greenBox">
                    {
                        items.map((item) => (
                            <div key={item.id}>{item.color === "green" && item.title}</div>
                        ))

                    }
                </div>

                <div className="blueBox">
                    {
                        items.map((item) => (
                            <div key={item.id}> {item.color === "blue" && item.title} </div>
                        ))

                    }
                </div>
                <div className="yellowBox">
                    {
                        items.map((item) => (
                            <div key={item.id}> {item.color === "yellow" && item.title} </div>
                        ))

                    }
                </div>
                <div className="redBox">
                    {
                        items.map((item) => (
                            <div key={item.id}> {item.color === "red" && item.title}</div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default NotesList
