// 07:05:45PM

function timeConverstion(str) {
  const period = str.substring(str.length - 2).toUpperCase()
  const numbers = str.replace(period, '').split(':')
  const [hour, min, sec] = numbers

  if (period == 'AM') {
    const hourPattern = hour === '12' ? '00' : hour
    return [hourPattern, min, sec].join(':')
  }

  const hourEnd = hour === '12' ? '12' : Number(hour) + 12
  return [hourEnd, min, sec].join(':')
}

console.log(timeConverstion('07:05:45PM')) // 19:05:45
console.log(timeConverstion('12:01:00PM')) // 12:01:00
console.log(timeConverstion('12:01:00AM')) // 00:01:00
