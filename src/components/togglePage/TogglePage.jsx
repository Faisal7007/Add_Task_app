import React from 'react'
import { useState } from 'react'
import './TogglePage.scss'
import data from '../data'

function TogglePage() {

    const [buttonToggle1, setButtonToggle1] = useState('none')
    const [buttonToggle2, setButtonToggle2] = useState('none')
    const [buttonToggle3, setButtonToggle3] = useState('none')
    const [buttonToggle4, setButtonToggle4] = useState('none')
    const [bgColor, setBgColor] = useState('lightgray')
    const [boxBgColor, setBoxBgColor] = useState('wheat')
    const [articles, setArticles] = useState(data)

    console.log(articles, 'articles')
    articles[0].buttonToggle = buttonToggle1
    articles[1].buttonToggle = buttonToggle2
    articles[2].buttonToggle = buttonToggle3
    articles[3].buttonToggle = buttonToggle4

    const handleBox1 = () => {
        // alert('clicked')
        if (buttonToggle1 === 'none') {

            setButtonToggle1('block')
            setBgColor('black')
            setBoxBgColor('black')
        }
        else {

            setButtonToggle1('none')
            setBgColor('lightgray')
            setBoxBgColor('wheat')
        }
    }

    articles[0].func = handleBox1

    const handleBox2 = () => {
        if (buttonToggle2 === 'none') {

            setButtonToggle2('block')
            setBgColor('black')
            setBoxBgColor('black')
        }
        else {

            setButtonToggle2('none')
            setBgColor('lightgray')
            setBoxBgColor('wheat')
        }
    }

    articles[1].func = handleBox2

    const handleBox3 = () => {
        if (buttonToggle3 === 'none') {

            setButtonToggle3('block')
            setBgColor('black')
            setBoxBgColor('black')
        }
        else {
            setButtonToggle3('none')
            setBgColor('lightgray')
            setBoxBgColor('wheat')
        }
    }

    articles[2].func = handleBox3

    const handleBox4 = () => {
        if (buttonToggle4 === 'none') {

            setButtonToggle4('block')
            setBgColor('black')
            setBoxBgColor('black')
        }
        else {

            setButtonToggle4('none')
            setBgColor('lightgray')
            setBoxBgColor('wheat')
        }
    }

    articles[3].func = handleBox4

    const handleDeleteButton = () => {
        setBgColor('lightgray')
        setBoxBgColor('wheat')
        setButtonToggle1('none')
        setButtonToggle2('none')
        setButtonToggle3('none')
        setButtonToggle4('none')
    }
    articles[0].deleteFunc = handleDeleteButton
    articles[1].deleteFunc = handleDeleteButton
    articles[2].deleteFunc = handleDeleteButton
    articles[3].deleteFunc = handleDeleteButton

    return (
        <div style={{ background: bgColor }} className='toggle_page'>
            {
                articles.map((item) => {
                    return (
                        <div className="main_div" key={item.id}>
                            <div onClick={item.func} style={{ backgroundColor: boxBgColor }} className="box">
                                <h2 className='description'>{item.description}</h2>
                            </div>
                            <button style={{ display: item.buttonToggle }} onClick={item.deleteFunc} className='delete_button'>Delete</button>
                        </div>
                    )
                })
            }

            {/* <div className="main_div" >
        <div onClick={handleBox1} style={{backgroundColor:boxBgColor}} className="box">
            <h2 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt nisi dicta ipsum eligendi delectus sint repellendus soluta hic aliquam.</h2>
        </div>
        <button style={{display:buttonToggle1}} onClick={handleDeleteButton} className='delete_button'>Delete</button>
      </div> */}

            {/* <div className="main_div">
        <div onClick={handleBox2}  style={{backgroundColor:boxBgColor}}  className="box">
            <h2 className='description'>ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt nisi dicta ipsum eligendi delectus sint repellendus soluta hic aliquam.</h2>
        </div>
        <button style={{display:buttonToggle2}} onClick={handleDeleteButton} className='delete_button'>Delete</button>
      </div> */}

            {/*       
      <div className="main_div">
        <div onClick={handleBox3}  style={{backgroundColor:boxBgColor}}  className="box">
            <h2 className='description'> dolor sit amet consectetur adipisicing elit. Adipisci incidunt nisi dicta ipsum eligendi delectus sint repellendus soluta hic aliquam.</h2>
        </div>
        <button style={{display:buttonToggle3}} onClick={handleDeleteButton} className='delete_button'>Delete</button>
      </div> */}

            {/* <div className="main_div">
        <div onClick={handleBox4}  style={{backgroundColor:boxBgColor}}  className="box">
            <h2 className='description'>sit amet consectetur adipisicing elit. Adipisci incidunt nisi dicta ipsum eligendi delectus sint repellendus soluta hic aliquam.</h2>
        </div>
        <button style={{display:buttonToggle4}} onClick={handleDeleteButton} className='delete_button'>Delete</button>
      </div> */}
        </div>
    )
}

export default TogglePage
