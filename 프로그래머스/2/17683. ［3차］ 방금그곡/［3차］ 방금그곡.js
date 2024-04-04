function solution(m, musicinfos) {
    var answer = '(None)';
    var hashMap = new Map();
    //C#, D#, F#, G#, A#
    m= m.replaceAll("A#","z");
    m = m.replaceAll("G#",'m');
    m = m.replaceAll("F#",'n');
    m = m.replaceAll("D#",'v');
    m = m.replaceAll("C#",'p');
    m = m.replaceAll("B#",'s')
    m = m.replaceAll("E#",'t')

    musicinfos.forEach(element => {
        //"12:00,12:14,HELLO,CDEFGAB"
        //배열 ',' 기준으로 나누기
        var div = element.split(",");
        
        div[3]=div[3].replaceAll("A#","z");
        div[3]=div[3].replaceAll("G#",'m');
        div[3]=div[3].replaceAll("F#",'n');
        div[3]=div[3].replaceAll("D#",'v');
        div[3]=div[3].replaceAll("C#",'p');
        div[3]=div[3].replaceAll("B#",'s')
        div[3]=div[3].replaceAll("E#",'t')
        //시간 나누기
        //시간
        var hour = Number(div[1].split(":")[0]);
        hour -= Number(div[0].split(":")[0])
        //분
        var minute = Number(div[1].split(":")[1]);
        minute -= Number(div[0].split(":")[1])
        if(minute<0){
            hour--;
            minute+=60;
        }
        //재생 시간
        time  = hour*60+minute;
        //재생시간 만큼 코드 붙여넣기
        var code = "";
        var index =0;

        while(time--){
            if(index>=div[3].length){
                index = 0;
            }
            code+=div[3][index++];
        }

        

        hashMap.set(div[2],[code,hour*60+minute]);
    });

    
    var checkTime = 0;
    for(let [key,value] of hashMap){
        //포함하고 있다면

        if(value[0].includes(m)){
            //시간이 큰지 체크
            if(checkTime<value[1]){
                answer = key;
                checkTime = value[1];
            }
        }
    }
    return answer;
}