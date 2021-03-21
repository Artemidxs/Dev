let bolt = 38
while(bolt>1) {
    bolt--;
    console.log (light(bolt));
    function light(bolt) {
        switch(bolt) {
            case 5: return "пять";
            case 13: return "тринадцать";
            case 22: return "двадцать два";
            case 35: return "тридцать пять";
            case 98: return "девяносто восемь";
            default: return bolt;
        }
    }
}