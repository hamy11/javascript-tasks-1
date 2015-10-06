function GetRomanNumber(number){
    //var a = new Array("--*+++*--\n\r---+#*---\n\r---+#*---\n\r---+#*---\n\r---+#*---\n\r---+#*---\n\r--*+++*--");
    var newRomanNumber = ["","","","","","",""];
    var arabicNumbers = [1, 4, 5, 9, 10, 40, 50];
    var romanNumbers = [
      [".......", "-*+++*-", "--+#*--", "--+#*--", "--+#*--", "--+#*--", "-*+++*-"],//I
      ["-::::-----...---", "..@@...##....:@.", "..@@...-#=...@-.", "..@@....*#:.+*..", "..@@.....%#:%...", "..@@......#@....", "-====-....--...."],//IV
      ["--------::-", "-=#-----#--", "--#@---=*--", "---#=-:%---", ".--*#*@----", "..--%#-----", "...--*-----"],//V
      ["-----------------", "--##---*#%---@*--", "--@@----:#@:@----", "--@@------##-----", "--@@-----@:@#:---", "--@@---:#---%#*--",":=##%*%@%:--%@@%:"],//IX
      [".............", "..:##...+%...", "....@#-%*....", ".....%#:.....","-...*==#*....","--.%*..+#+...","-%##*..+##@*."],//X
      ["......................", "..:##...+%....=#-.....", "....@#-%*.....=#-.....", ".....%#:......=#-.....","-...*==#*.....=#-.....","--.%*..+#+....=#-...-=","-%##*..+##@*.+#######-"],//XL
      [".........", "-.=#-.....", "-.=#-.....", "-.=#-.....","-.=#-.....","-.=#-...-=","-+#######-"]];//L
    var i = 6;
    while (number > 0){
      if (number >= arabicNumbers[i]){
        for (j=0;j<=6;j++){
          newRomanNumber[j] += romanNumbers[i][j];
        }
        number -=arabicNumbers[i];
      } else {
        i-=1;
      }
    }
    return newRomanNumber;
}

function GetRomanTime() {
    var currenttime= new Date();
    //var hours=0;
    //var minutes = 0;
    //var seconds = 0;
    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var seconds = currenttime.getSeconds();
    var delimiter = ["----", "----", "-##-", "----", "----", "-##-", "----"];
    console.log(currenttime);

    if (hours > 12) hours -= 12;
    
    romanHours = GetRomanNumber(hours);
    romanMinutes = GetRomanNumber(minutes);
    romanSeconds = GetRomanNumber(seconds);
    var result = [];
    for (var i = 0; i <= 6; i++) {
      result.push(romanHours[i] + delimiter[i] + romanMinutes[i]+ delimiter[i] + romanSeconds[i]);
      console.log(result[i]);
    }
}
setInterval(function(){GetRomanTime();}, 1000);
