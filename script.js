  // Question 01
        // let userNum = +prompt("enter Num");
        // let sum = 0;
        // for (let i = userNum; i >= 1; i--) {
        //     sum += i;
        // }
        // console.log(sum)

        // Question 02
        // let userNum1 = +prompt("enter Num");
        // let userNum2 = +prompt("enter Num");
        // let sumrange = 0;
        // for(i = userNum1; i<=userNum2; i++){
        //     sumrange += i;
        // }
        // console.log(sumrange)

        // Question 03
        // let arr = [15, 2, 5, 3, 25]
        // let sumOfDigi = 0
        // let count = 0;
        // let average;
        // for (let i = 0; i < arr.length; i++) {
        //     sumOfDigi = sumOfDigi + arr[i];
        //     average = sumOfDigi / 5;
        // }
        // console.log(average)

        // Question 04
        // let str1 = prompt("enter name 1");
        // let str2 = prompt("enter name 1");
        // if(str1.length = str2.length){
        //     console.log("same")
        // }
        // else{
        //     console.log("not same")
        // }

        // Question  05
        let str = prompt("enter name");
        let lastCh = str.charAt(str.length - 1)
        let firstCh = str.charAt(0)

        let beechWale = str.substring(1, str.length - 1)

        let finallans = lastCh + beechWale + firstCh;
        console.log(finallans)
