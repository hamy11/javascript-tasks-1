//'use strict';
function getRomanNumber(arabicNumber){
    if (!arabicNumber)
        return ['.###..###..###..###.','.####.###..####.###.','.########..########.','.########..########.','.###.####..###.####.','.###..###..###..###.'];//NN
    var romanNumbers = {
        '1':['-*+++*-', '--+#*--', '--+#*--', '--+#*--', '--+#*--', '-*+++*-'],//I
        '4':['..@@...##....:@.', '..@@...-#=...@-.', '..@@....*#:.+*..', '..@@.....%#:%...', '..@@......#@....', '-====-....--....'],//IV
        '5':['-=#-----#--', '--#@---=*--', '---#=-:%---', '.--*#*@----', '..--%#-----', '...--*-----'],//V
        '9':['--##---*#%---@*--', '--@@----:#@:@----', '--@@------##-----', '--@@-----@:@#:---', '--@@---:#---%#*--',':=##%*%@%:--%@@%:'],//IX
        '10':['..:##...+%...', '....@#-%*....', '.....%#:.....','-...*==#*....','--.%*..+#+...','-%##*..+##@*.'],//X
        '40':['..:##...+%....=#-.....', '....@#-%*.....=#-.....', '.....%#:......=#-.....','-...*==#*.....=#-.....','--.%*..+#+....=#-...-=','-%##*..+##@*.+#######-'],//XL
        '50':['-.=#-.....', '-.=#-.....', '-.=#-.....','-.=#-.....','-.=#-...-=','-+#######-']};//L
    var newRomanNumber = ['','','','','',''];
    var i = Object.keys(romanNumbers).length--;
    var itemNumber;
    while (arabicNumber > 0){
        itemNumber = Object.keys(romanNumbers).map(Number)[i];
        if (arabicNumber >= itemNumber) {
            for (var j = 0; j <= 6; j++){
                newRomanNumber[j] += romanNumbers[itemNumber][j];
            }
            arabicNumber -= itemNumber;
        } else {
            i--;
        }
    }
    return newRomanNumber;
}

function getRomanTime() {
    var currentTime= new Date();
    var hours = currentTime.getHours();
    if (hours > 12) hours -= 12;
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var romanHours = getRomanNumber(hours);
    var romanMinutes = getRomanNumber(minutes);
    var romanSeconds = getRomanNumber(seconds);
    var delimiter = ['----', '-##-', '----', '----', '-##-', '----'];
    for (var i = 0; i < 6; i++) {
        console.log(romanHours[i] + delimiter[i] + romanMinutes[i]+ delimiter[i] + romanSeconds[i]);
    }
}

setInterval(function(){
    process.stdout.write('\033c');//'use strict', clear console 
    getRomanTime();
}, 1000);
