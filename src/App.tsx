import { useState } from 'react'
import { performCalc, formatDisplay } from './utils/helper-functions'
import './App.css'

function App() {
  const [liveDisplay, setLiveDisplay] = useState('')
  const [formulaDisplay, setFormulaDisplay] = useState('')
  const [lastInput, setLastInput] = useState('')
  const [operatorActive, setOperatorActive] = useState('')
  const [allClear, setAllClear] = useState(true)

  const insertOperator = (event: any) => {
    setOperatorActive(event.target.value)

    if (liveDisplay !== '') {
      setFormulaDisplay((currentFormula) => {
        return currentFormula + liveDisplay + event.target.value
      })
    }
  }

  const plusMinusToggle = () => {
    if (liveDisplay.startsWith('-')) {
      setLiveDisplay((curr) => curr.slice(1))
    } else {
      setLiveDisplay((curr) => `-${curr}`)
    }
  }

  const insertNum = (event: any): void => {
    if (operatorActive !== '') {
      setLiveDisplay(event.target.value)
      setOperatorActive('')
    } else {
      if (liveDisplay.length < 9) {
        setLiveDisplay((currentNum) => {
          return currentNum + event.target.value
        })
      }
    }
    setAllClear(false)
  }

  const insertZero = (event: any): void => {
    if (operatorActive !== '') {
      setLiveDisplay('')
      setOperatorActive('')
    } else {
      if (liveDisplay !== '') {
        setLiveDisplay((currentNum) => {
          return currentNum + event.target.value
        })
      }
    }
  }

  const insertDecimal = (event: any): void => {
    setLiveDisplay((currentNum) => {
      if (/\./.test(liveDisplay)) {
        return currentNum
      } else if (liveDisplay === '') {
        setAllClear(false)
        return 0 + event.target.value
      } else {
        return currentNum + event.target.value
      }
    })
  }

  const finishCalc = () => {
    let answer: string
    if (formulaDisplay === '') {
      answer = performCalc(liveDisplay + lastInput)
    } else {
      setLastInput(formulaDisplay.slice(-3) + liveDisplay)
      answer = performCalc(formulaDisplay + liveDisplay)
    }
    setFormulaDisplay('')
    setLiveDisplay(answer)
  }

  const clearDisplay = (event: any) => {
    if (event.target.value === 'AC') setFormulaDisplay('')
    setLiveDisplay('')
    setAllClear(true)
  }

  return (
    <div className="App">
      <div className="calc-container-outer">
        <div className="calc-container">
          <div className="display">
            <p
              className={
                liveDisplay.length >= 9
                  ? 'small'
                  : liveDisplay.length === 8
                  ? 'medium'
                  : liveDisplay.length === 7
                  ? 'large'
                  : 'x-large'
              }
            >
              {liveDisplay === ''
                ? '0'
                : liveDisplay === '-'
                ? '-0'
                : formatDisplay(liveDisplay)}
            </p>
          </div>
          <button
            className="top-row"
            onClick={clearDisplay}
            value={allClear ? 'AC' : 'C'}
          >
            {allClear ? 'AC' : 'C'}
          </button>
          <button className="top-row" onClick={plusMinusToggle} value="-">
            +/-
          </button>
          <button className="top-row">%</button>
          <button
            className={
              operatorActive === ' ÷ ' ? 'operator-active' : 'operator'
            }
            onClick={insertOperator}
            value=" ÷ "
          >
            ÷
          </button>
          <button onClick={insertNum} value="7">
            7
          </button>
          <button onClick={insertNum} value="8">
            8
          </button>
          <button onClick={insertNum} value="9">
            9
          </button>
          <button
            className={
              operatorActive === ' x ' ? 'operator-active' : 'operator'
            }
            onClick={insertOperator}
            value=" x "
          >
            ×
          </button>
          <button onClick={insertNum} value="4">
            4
          </button>
          <button onClick={insertNum} value="5">
            5
          </button>
          <button onClick={insertNum} value="6">
            6
          </button>
          <button
            id="minus"
            className={
              operatorActive === ' - ' ? 'operator-active' : 'operator'
            }
            onClick={insertOperator}
            value=" - "
          >
            -
          </button>
          <button onClick={insertNum} value="1">
            1
          </button>
          <button onClick={insertNum} value="2">
            2
          </button>
          <button onClick={insertNum} value="3">
            3
          </button>
          <button
            className={
              operatorActive === ' + ' ? 'operator-active' : 'operator'
            }
            onClick={insertOperator}
            value=" + "
          >
            +
          </button>
          <button className="zero" onClick={insertZero} value="0">
            0
          </button>
          <button onClick={insertDecimal} value=".">
            .
          </button>
          <button className="operator" onClick={finishCalc} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
