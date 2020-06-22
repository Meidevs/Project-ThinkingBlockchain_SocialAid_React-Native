import { useCallback } from "react";

class getTime {
    setTime() {
        clearInterval(intervalid);
        var count = 0;
        var intervalid = setInterval(() => {
            count++;
            console.log('count', count)
            if (count == 10) {
                clearInterval(intervalid);
                useCallback(count)
            }
        }, 1000);
        console.log(count)
        return intervalid;
    }

    Clear() {
        clearInterval(this.intervalid)
    }
}

const Timer = new getTime();
export default Timer;