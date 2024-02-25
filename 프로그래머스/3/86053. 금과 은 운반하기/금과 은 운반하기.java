class Solution {
    public long solution(int a, int b, int[] g, int[] s, int[] w, int[] t) {

        long left=0;
        long right=(long)(10e9*2*10e5*2);
        long answer = right;

        while (left<=right){
            long mid=(left+right)/2;
            long gold,silver,sum;
            gold=silver=sum=0;
            for (int i = 0; i < g.length; i++) {
                long move=mid/(2*t[i]);
                if(mid%(t[i]*2)>=t[i]){
                    //현재 시간(mid)에서 왕복하고 남은 시간이 편도 보다 크거나 같다면 한번 더 가도 됨
                    move++;
                }
                //현재 시간만큼 왕복해서 자원을 채취한다
                //현재 시간에 자원을 모두 캘 수 있다면 모두 캐고, 그렇지 않다면 캘 수 있는 만큼만 캔다
                gold+=Math.min(g[i],move*w[i]);
                silver+=Math.min(s[i],move*w[i]);
                sum+=Math.min(g[i]+s[i],move*w[i]);
            }
            if(a<=gold&&b<=silver&& a+b<=sum){
                right=mid-1;
                answer=Math.min(mid,answer);
            }else left=mid+1;
        }

        return answer;
    }
}