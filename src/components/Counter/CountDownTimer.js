import React,{useState,useEffect} from "react"

const CountDownTimer = ({seconds,onTimeUp}) =>{
    const [remainSecond, setRemainSecond] = useState(0)

    useEffect(() => {
      const countDownSecond = seconds
  
      // 產生 Timer
      const startTime = Date.now()
      const countDownTimer = setInterval(() => {
        // 計算剩餘秒數
        const pastSeconds = parseInt((Date.now() - startTime) / 1000)
        const remain = (countDownSecond - pastSeconds)
        setRemainSecond(remain < 0 ? 0 : remain)
        //console.log('[timer] count down: ', remain)
  
        // 檢查是否結束
        if (remain <= 0) {
          clearInterval(countDownTimer)
          //console.log(`[timer] == stop count down ${countDownSecond}s  ==`)
          onTimeUp() // 透過 prop 通知外部時間已到
        }
      }, 1000)
    }, []) // 相依 prop / state 值的 Effect

    return(
        <div className='container'>
            <div className='container__time'>
                {new Date(remainSecond * 1000).toISOString().substr(11, 8)}
            </div>
        </div>
    )
}

export default CountDownTimer