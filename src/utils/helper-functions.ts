function accurateCalc(
  num1: string | number,
  operator: string,
  num2: string | number
) {
  if (typeof num1 === 'string') num1 = parseFloat(num1)
  if (typeof num2 === 'string') num2 = parseFloat(num2)

  if (isNaN(num1) || isNaN(num2)) {
    return Number.NaN
  }

  let strNum1 = num1 + '',
    strNum2 = num2 + '',
    dpNum1 = !!(num1 % 1) ? strNum1.length - strNum1.indexOf('.') - 1 : 0,
    dpNum2 = !!(num2 % 1) ? strNum2.length - strNum2.indexOf('.') - 1 : 0,
    multiplier = Math.pow(10, dpNum1 > dpNum2 ? dpNum1 : dpNum2),
    tempNum1 = Math.round(num1 * multiplier),
    tempNum2 = Math.round(num2 * multiplier),
    result

  switch (operator.trim()) {
    case '+':
      result = (tempNum1 + tempNum2) / multiplier
      break
    case '-':
      result = (tempNum1 - tempNum2) / multiplier
      break
    case '*':
      result = (tempNum1 * tempNum2) / (multiplier * multiplier)
      break
    case '/':
      result = tempNum1 / tempNum2
      break
    case '%':
      result = (tempNum1 % tempNum2) / multiplier
      break
    default:
      result = Number.NaN
  }

  return result
}

export const performCalc = (str: string): string => {
  const arr = str.split(' ')

  if (arr.length === 1) {
    return arr[0]
  }

  const multiplyIndex = arr.includes('x') ? arr.indexOf('x') : Infinity
  const divideIndex = arr.includes('÷') ? arr.indexOf('÷') : Infinity

  if (multiplyIndex !== Infinity || divideIndex !== Infinity) {
    if (multiplyIndex < divideIndex) {
      const multiplication = accurateCalc(
        arr[multiplyIndex - 1],
        '*',
        arr[multiplyIndex + 1]
      )
      arr.splice(multiplyIndex - 1, 3, multiplication.toString())
    } else {
      const division = accurateCalc(
        arr[divideIndex - 1],
        '/',
        arr[divideIndex + 1]
      )
      arr.splice(divideIndex - 1, 3, division.toString())
    }
    return performCalc(arr.join(' '))
  }

  const plusIndex = arr.includes('+') ? arr.indexOf('+') : Infinity
  const subtractIndex = arr.includes('-') ? arr.indexOf('-') : Infinity

  if (plusIndex || subtractIndex) {
    if (plusIndex < subtractIndex) {
      const addition = accurateCalc(arr[plusIndex - 1], '+', arr[plusIndex + 1])
      arr.splice(plusIndex - 1, 3, addition.toString())
    } else {
      const subtraction = accurateCalc(
        arr[subtractIndex - 1],
        '-',
        arr[subtractIndex + 1]
      )
      arr.splice(subtractIndex - 1, 3, subtraction.toString())
    }
    return performCalc(arr.join(' '))
  }

  return 'err'
}

export const formatDisplay = (str: string): string => {
  let result: string = str

  if (str.includes('e')) {
    result = str.replace('+', '')
    if (result.length > 9) {
      let [foreNum, zeroes] = result.split('e')
      result = foreNum.slice(0, 9 - zeroes.length) + 'e' + zeroes
    }
  } else if (str.length > 9) {
    let [int, dec] = str.split('.')
    if (int.length > 9) {
      let zeroes = int.length - 1
      result = `${int[0]}.${int.slice(1, 8 - `${zeroes}`.length)}e${zeroes}`
    } else if (int.length === 9) {
      result = int
    } else {
      result = `${int}.${dec.slice(0, 9 - int.length)}`
    }
  }

  let [int, dec] = result.split('.')
  if (dec === undefined) dec = '.'

  let numArr: string[] = int
    .split('')
    .filter((num) => num !== ',')
    .reverse()
    .map((num, i) => {
      if (i % 3 === 0 && i !== 0 && num !== '-') {
        return `${num},`
      }
      return num
    })

  if (/\./.test(result)) {
    result = numArr.reverse().join('') + `.${dec}`
  } else {
    result = numArr.reverse().join('')
  }

  return result
}
